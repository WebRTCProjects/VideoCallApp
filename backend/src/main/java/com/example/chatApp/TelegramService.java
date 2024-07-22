package com.example.chatApp;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class TelegramService {
    @Value("${telegram.token}")
    private String botToken;

    @Value("${telegram.chatId}")
    private String chatId;

    public void sendMessage(String message) {
        String url = "https://api.telegram.org/bot" + botToken + "/sendMessage";
        RestTemplate restTemplate = new RestTemplate();
        String requestUrl = url + "?chat_id=" + chatId + "&text=" + message;
        ResponseEntity<String> response = restTemplate.getForEntity(requestUrl, String.class);
        if (response.getStatusCode().is2xxSuccessful()) System.out.println("Telegram message was send!");
        else  System.out.println("Error sending Telegram message!");
    }

}
