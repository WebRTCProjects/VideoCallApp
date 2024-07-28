package com.example.chatApp.config;

import com.example.chatApp.RedisService;
import com.example.chatApp.TelegramService;
import com.example.chatApp.chat.ChatMessage;
import com.example.chatApp.chat.MessageType;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.event.EventListener;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.messaging.simp.stomp.StompHeaderAccessor;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.messaging.SessionConnectEvent;
import org.springframework.web.socket.messaging.SessionDisconnectEvent;

@Component
@Slf4j
public class WebSocketEventListener {

    private final SimpMessageSendingOperations messageTemplate;
    private final RedisService redisService;
    private final TelegramService telegramService;


    public WebSocketEventListener(SimpMessageSendingOperations messageTemplate, RedisService redisService, TelegramService telegramService) {
        this.messageTemplate = messageTemplate;
        this.redisService = redisService;
        this.telegramService = telegramService;
    }

    @EventListener
    public void handleWebsocketDisconnectListener(SessionDisconnectEvent event) {
        StompHeaderAccessor headerAccessor = StompHeaderAccessor.wrap(event.getMessage());
        String username = (String) headerAccessor.getSessionAttributes().get("username");

        if (username != null) {
            log.info("User disconnected {}", username);

            var chatMessage = ChatMessage.builder()
                    .type(MessageType.LEAVE)
                    .sender(username)
                    .build();
            messageTemplate.convertAndSend("/topic/public",chatMessage );
            telegramService.sendMessage(chatMessage.getSender()+" left the chat");
            redisService.updateUsers(username);

        }
    }

    @EventListener
    public void handleNewUserJoined(SessionConnectEvent event) {
        StompHeaderAccessor headerAccessor = StompHeaderAccessor.wrap(event.getMessage());
        String username = (String) headerAccessor.getSessionAttributes().get("username");

        if (username != null) {
            log.info("User connected {}", username);

            var chatMessage = ChatMessage.builder()
                    .type(MessageType.JOIN)
                    .sender(username)
                    .build();
            messageTemplate.convertAndSend("/topic/public",chatMessage );
            telegramService.sendMessage(chatMessage.getSender()+" joined the chat");
        }
    }
}
