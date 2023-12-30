import { useVideoStore } from './stores/videostream-store';
import { videoCall, con } from './socket';

const videoStream = useVideoStore();

export const getRemoteVideo = (username, stream) => {
  const peer = new SimplePeer({
    initiator: false,
    stream: stream,
    trickle: false,
  });
  peer.on('error', (err) => {
    console.error('Peer error:', err);
  });

  peer.on('signal', (data) => {
    // videoCall(data, username);
  });
  peer.on('stream', (currStream) => {
    videoStream.video = currStream;
  });
  if (videoStream.getSignal) {
    console.log('signal sent');
    peer.signal(videoStream.getSignal);
  }

  videoStream.setConnection(peer);
};
