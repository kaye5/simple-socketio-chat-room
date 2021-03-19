import React from 'react';
import PropTypes from 'prop-types';

const SingleMessage = ({ messageData }) => {
  const userid = localStorage.getItem('userid');
  if (messageData.senderid === userid)
    return (
      <div className="my-msg-container">
        <div>{messageData.sender}</div>
        <div className="msg-content">{messageData.message}</div>
        <div>{new Date(messageData.timestamp).toDateString()}</div>
      </div>
    );
  return (
    <div className="other-msg-container">
      <div>{messageData.sender}</div>
      <div className="msg-content">{messageData.message}</div>
      <div>{new Date(messageData.timestamp).toDateString()}</div>
    </div>
  );
};

SingleMessage.propTypes = {
  messageData: PropTypes.shape({
    message: PropTypes.string,
    timestamp: PropTypes.number,
    senderid: PropTypes.string,
    sender: PropTypes.string,
  }).isRequired,
};
export default SingleMessage;
