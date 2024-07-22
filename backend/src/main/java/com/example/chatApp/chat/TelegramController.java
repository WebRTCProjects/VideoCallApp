package com.example.chatApp.chat;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TelegramController {
    private final SimpMessageSendingOperations messageTemplate;

    public TelegramController(SimpMessageSendingOperations messageTemplate) {
        this.messageTemplate = messageTemplate;
    }

    @PostMapping("/webhook")
    public void handleWebhook(@RequestBody String update) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            JsonNode jsonNode = objectMapper.readTree(update);
            System.out.println("Received update: " + jsonNode);

            JsonNode messageNode = jsonNode.path("message");
            String text = messageNode.path("text").asText();
            ChatMessage chatMessage = new ChatMessage();
            chatMessage.setContent(text);
            chatMessage.setSender("AdminJimmy27");
            chatMessage.setType(MessageType.CHAT);
            messageTemplate.convertAndSend("/topic/public",chatMessage );


        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
