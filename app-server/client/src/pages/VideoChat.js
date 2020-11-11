import React, { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';
import Peer from 'simple-peer';
import styled from 'styled-components';
import axios from 'axios';
import './assets/css/main.css';
import { CONTENT_ENDPOINT, SOCKET_ENDPOINT } from '../util/config';

const Container = styled.div`
  padding: 20px;
  display: flex;
  height: 100vh;
  width: 90%;
  margin: auto;
  flex-wrap: wrap;
`;

const StyledVideo = styled.video`
  height: 40%;
  width: 50%;
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
`;

// video component
const Video = (props) => {
  const ref = useRef();

  useEffect(() => {
    props.peer.on('stream', (stream) => {
      ref.current.srcObject = stream;
    });
  }, []);

  return <StyledVideo playsInline autoPlay ref={ref} />;
};

const videoConstraints = {
  height: window.innerHeight / 2,
  width: window.innerWidth / 2,
};

const VideoChat = (props) => {
  const [peers, setPeers] = useState([]);
  const socketRef = useRef();
  const userVideo = useRef();
  const peersRef = useRef([]);
  const roomID = props.match.params.roomID;

  const [podcast, setPodcast] = useState({
    title: '',
    desc: '',
    download_url: '',
  });

  useEffect(() => {
    if (roomID === '0') {
      setPodcast({
        title: 'anything!',
        desc:
          'Come join us just to socialzie and meet new people! Also, download our latest podcast below.',
        download_url: '',
      });
      return;
    }

    axios({
      url: `${CONTENT_ENDPOINT}/api/podcast/${roomID}`,
      method: 'GET',
      timeout: 0,
    })
      .then((res) => {
        setPodcast(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    socketRef.current = io.connect(`${SOCKET_ENDPOINT}`);
    navigator.mediaDevices
      .getUserMedia({ video: videoConstraints, audio: true })
      .then((stream) => {
        userVideo.current.srcObject = stream;
        socketRef.current.emit('join room', roomID);

        // server send all other users in room
        socketRef.current.on('all users', (users) => {
          const peers = [];
          // we get all the rooms and create peer connection with them
          users.forEach((userID) => {
            // peer id, our own id, and our own stream
            const peer = createPeer(userID, socketRef.current.id, stream);
            peersRef.current.push({
              peerID: userID,
              peer,
            });
            peers.push(peer);
          });
          // populating our peers array
          setPeers(peers);
        });

        // this handles when i am already in the room
        // and a new peer joined the room
        socketRef.current.on('user joined', (payload) => {
          // add peer's stream, peer's id, and my own stream
          const peer = addPeer(payload.signal, payload.callerID, stream);
          peersRef.current.push({
            peerID: payload.callerID,
            peer,
          });

          setPeers((users) => [...users, peer]);
        });

        socketRef.current.on('receiving returned signal', (payload) => {
          // receiving the new signal
          const item = peersRef.current.find((p) => (p.peerID = payload.id));
          item.peer.signal(payload.signal);
        });
      });
  }, []);

  // this is for when we first join the room
  function createPeer(userToSignal, callerID, stream) {
    // create webrtc peer
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream,
    });

    // each individual person in room gets a signal sent to them
    peer.on('signal', (signal) => {
      socketRef.current.emit('sending signal', {
        userToSignal,
        callerID,
        signal,
      });
    });

    return peer;
  }

  function addPeer(incomingSignal, callerID, stream) {
    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream,
    });

    peer.on('signal', (signal) => {
      // return our own stream
      socketRef.current.emit('returning signal', { signal, callerID });
    });

    // accept incoming stream
    peer.signal(incomingSignal);

    return peer;
  }
  return (
    <div id='page-wrapper'>
      <div id='header'>
        <div className='inner'>
          <header>
            <h1>
              <a href='index.html' id='logo'>
                Welcome! Let's talk about {podcast.title}
              </a>
            </h1>
            <p>{podcast.desc}</p>
            <a
              href={podcast.download_url}
              class='button'
              style={{ margin: '20px' }}
            >
              Download
            </a>
          </header>
        </div>
      </div>

      <div className='wrapper style1'>
        <div className='container'>
          <Container>
            <StyledVideo muted ref={userVideo} autoPlay playsInline />
            {peers.map((peer, index) => {
              return <Video key={index} peer={peer} />;
            })}
          </Container>
        </div>
      </div>

      <div id='footer'>
        <div className='col-12'>
          <header>
            <a href='main/index.html'>
              <button>Back to Home Page</button>
            </a>
          </header>
        </div>
      </div>
    </div>
  );
};

export default VideoChat;
