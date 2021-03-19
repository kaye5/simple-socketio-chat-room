import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import api from '../api';

const Home = ({ username }) => {
  const [rooms, setRooms] = React.useState([]);
  const history = useHistory();
  const fetch = async () => {
    const { data } = await api.get('/api/rooms');
    setRooms(data);
  };
  const onClick = (id) => {
    history.push(`/room/${id}`);
  };
  React.useEffect(async () => {
    fetch();
  }, []);
  return (
    <>
      <div>
        <p className="h2">Hello, {username}</p>
      </div>
      <div>
        <p className="h3">Available rooms</p>
      </div>
      {rooms.map((room) => (
        <div key={room.id} className="card mb-3 p-3" onClick={() => onClick(room.id)}>
          <div>
            <p>Room Name : {room.title}</p>
          </div>
        </div>
      ))}
    </>
  );
};
Home.propTypes = {
  username: PropTypes.string.isRequired,
};
export default Home;
