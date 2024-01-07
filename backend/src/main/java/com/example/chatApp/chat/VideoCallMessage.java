package com.example.chatApp.chat;

import lombok.*;

import java.io.Serializable;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class VideoCallMessage implements Serializable {

    private Signal signal;
    private String sender;
    private String from;
    private MessageType type;
}

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
class Candidate {
    private String candidate;
    private int sdpMLineIndex;
    private String sdpMid;
}

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
class Signal {
    private String type;
    private String sdp;
}
