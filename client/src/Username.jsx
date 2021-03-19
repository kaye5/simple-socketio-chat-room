import React from 'react';
import Proptypes from 'prop-types';
import Api from './api';

const Username = ({ setUsername }) => {
  const inputRef = React.useRef(null);
  const saveUsername = async (ev) => {
    ev.preventDefault();
    const { value } = inputRef.current;
    if (value) {
      localStorage.setItem('username', value);
      setUsername(value);
      const { data } = await Api.get('/api/session');
      localStorage.setItem('userid', data);
    }
  };
  return (
    <div>
      <h1>Input username to start</h1>
      <div>
        <form onSubmit={saveUsername}>
          <label htmlFor="username" className="w-100">
            Username
            <input id="username" className="form-control" type="text" ref={inputRef} />
          </label>
          <button className="btn btn-primary" type="submit">
            Save username
          </button>
        </form>
      </div>
    </div>
  );
};
Username.propTypes = {
  setUsername: Proptypes.func.isRequired,
};
export default Username;
