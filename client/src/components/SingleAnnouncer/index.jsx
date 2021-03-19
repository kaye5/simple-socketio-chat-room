import React from 'react';
import PropTypes from 'prop-types';

const SingleAnnouncer = ({ message, timestamp }) => (
  <div className="announcer">
    <p>
      {new Date(timestamp).toLocaleTimeString()}
      &nbsp;
      {message}
    </p>
  </div>
);
SingleAnnouncer.propTypes = {
  message: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
};
export default SingleAnnouncer;
