package com.example.chatApp.chat;

import com.example.chatApp.MailService;
import com.example.chatApp.RedisService;
import io.lettuce.core.dynamic.annotation.Param;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.*;

@Controller
public class ChatController {

    private final MailService mailService;
    private final RedisService redisService;
    private final RedisTemplate<String, Object> redisTemplate;

    private final SimpMessagingTemplate simpMessagingTemplate;


    public ChatController(MailService mailService, RedisService redisService, RedisTemplate<String, Object> redisTemplate, SimpMessagingTemplate simpMessagingTemplate) {
        this.mailService = mailService;
        this.redisService = redisService;
        this.redisTemplate = redisTemplate;
        this.simpMessagingTemplate = simpMessagingTemplate;
    }

    @MessageMapping("/chat.sendMessage")
    @SendTo("/topic/public")
    public ChatMessage sendMessage(@Payload ChatMessage chatMessage) {
        return chatMessage;
    }

    @MessageMapping("/chat.addUser")
    @SendTo("/topic/public")
    public ChatMessage addUser(@Payload ChatMessage chatMessage, SimpMessageHeaderAccessor simpMessageHeaderAccessor) {
        //Send mail about new user
//        mailService.sendMail(chatMessage.getSender() + " is joined to chat");
        //Add username to web socket session
        Set<String> users;
        if (redisTemplate.opsForValue().get("users") != null){
             users = (Set<String>)  redisTemplate.opsForValue().get("users");
        } else {
            users = new HashSet<>();
        }
        users.add(chatMessage.getSender());
        redisTemplate.opsForValue().set("users",users);
        simpMessageHeaderAccessor.getSessionAttributes().put("username", chatMessage.getSender());
        return chatMessage;
    }

    @MessageMapping("/chat.videoCall")
    @SendTo("/topic/public")
    public VideoCallMessage joinVideo(@Payload VideoCallMessage message) {
        redisService.saveData("caller", message);

        return message;
    }

    @GetMapping("/users")
    public ResponseEntity<Set<String>> getUsers() {
        Set<String> users = new HashSet<>();
        if (redisTemplate.opsForValue().get("users") != null){
            users = (Set<String>) redisTemplate.opsForValue().get("users");
        }
        return ResponseEntity.ok().body(users);
    }
    @MessageMapping("/answer.videoCall")
    public void answerCall(@Payload AnswerVideoCall signal) {
        simpMessagingTemplate.convertAndSend("/topic/answer", signal);
    }
    @PostMapping("/delete-users")
    public ResponseEntity<String> deleteUsers(){
        redisService.deleteData("users");
        return ResponseEntity.ok().body("Users are deleted!");
    }

    @PostMapping("/check-if-username-free")
    public ResponseEntity<String> checkUsername(@RequestBody UsernameRequest request) {
        System.out.println("username is=> " + request.getUsername());
        var users = (Set<String>)  redisService.getData("users");
        if (users.contains(request.getUsername())) {
            return ResponseEntity.badRequest().body("Username is already taken");
        }

        return ResponseEntity.ok().body("Good username");
    }

}
