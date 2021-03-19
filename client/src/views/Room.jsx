import React from 'react';
import { useParams } from 'react-router-dom';
import { io } from 'socket.io-client';
import Api from '../api';
import SingleAnnouncer from '../components/SingleAnnouncer';
import SingleMessage from '../components/SingleMessage';
import './room.css';

const Room = () => {
  const inputRef = React.useRef();
  const { roomid } = useParams();
  const [room, setRoom] = React.useState({});
  const [socket, setSocket] = React.useState(null);
  const [messages, setMessages] = React.useState([]);
  const userData = {
    username: localStorage.getItem('username'),
    userid: localStorage.getItem('userid'),
  };
  const handleSendChat = (ev) => {
    ev.preventDefault();
    socket.emit('room:sendMessage', {
      message: inputRef.current.value,
      username: userData.username,
      userSession: userData.userid,
      roomid,
    });
    inputRef.current.value = '';
  };
  const fetch = async () => {
    const { data } = await Api.get(`/api/rooms/${roomid}`);
    setRoom(data);
  };

  React.useEffect(() => {
    fetch();
    if (!socket) {
      const Socket = io(`${process.env.REACT_APP_SERVER_ENDPOINT}/rooms`, {
        query: `roomid=${roomid}&username=${userData.username}&userSession=${userData.userid}`,
      });
      setSocket(Socket);
      Socket.on('room:recieveMessage', (msg) => {
        setMessages((m) => [...m, msg]);
      });
      Socket.on('room:broadcast', (msg) => {
        setMessages((m) => [...m, msg]);
      });
    }
  }, []);
  return (
    <>
      <div>
        <h1 className="text-center">{room.title}</h1>
      </div>
      <div className="chat-container">
        {messages.map((message) => (
          <React.Fragment key={message.timestamp}>
            {message.type === 'message' ? (
              <SingleMessage messageData={message} />
            ) : (
              <SingleAnnouncer message={message.message} timestamp={message.timestamp} />
            )}
          </React.Fragment>
        ))}
      </div>
      <div>
        <form onSubmit={handleSendChat} className="chat-send">
          <div>
            <input placeholder="Write something" ref={inputRef} className="form-control" />
          </div>
          <div>
            <button type="submit" className="btn btn-primary">
              Send
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Room;
