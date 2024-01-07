package com.example.chatApp;

import com.example.chatApp.chat.VideoCallMessage;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;
import org.springframework.messaging.simp.SimpMessagingTemplate;

import java.util.Set;


@Service
public class RedisService {

    private final RedisTemplate<String, Object> redisTemplate;
    private final ObjectMapper objectMapper;


    public RedisService(RedisTemplate<String, Object> redisTemplate, ObjectMapper objectMapper) {
        this.redisTemplate = redisTemplate;
        this.objectMapper = objectMapper;
    }

    public void saveData(String key, VideoCallMessage data) {


        redisTemplate.opsForValue().set(key, data.getSender());
    }

    public Object getData(String key) {
        return redisTemplate.opsForValue().get(key);
    }

    public void deleteData(String key) {
        redisTemplate.delete(key);
    }

    public void updateUsers(String user) {
        Set<String> users = (Set<String>) redisTemplate.opsForValue().get("users");
        redisTemplate.delete("users");
        users.remove(user);
        redisTemplate.opsForValue().set("users",users);
    }
}
