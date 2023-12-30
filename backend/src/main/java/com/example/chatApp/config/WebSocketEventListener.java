package com.example.chatApp.config;

import com.example.chatApp.RedisService;
import com.example.chatApp.chat.ChatMessage;
import com.example.chatApp.chat.MessageType;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.event.EventListener;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.messaging.simp.stomp.StompHeaderAccessor;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.messaging.SessionDisconnectEvent;

@Component
@Slf4j
public class WebSocketEventListener {

    private final SimpMessageSendingOperations messageTemplate;
    private final RedisService redisService;


    public WebSocketEventListener(SimpMessageSendingOperations messageTemplate, RedisService redisService) {
        this.messageTemplate = messageTemplate;
        this.redisService = redisService;
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
            redisService.updateUsers(username);

        }
    }
}
