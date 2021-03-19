import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Username from './Username';
import Home from './views/Home';
import Room from './views/Room';

function App() {
  const [username, setUsername] = React.useState(null);
  React.useEffect(() => {
    const localData = localStorage.getItem('username');
    if (localData) setUsername(localData);
  }, [username]);
  return (
    <div className="container p-3">
      {username ? (
        <BrowserRouter>
          <Switch>
            <Route path="/" exact>
              <Home username={username} />
            </Route>
            <Route path="/room/:roomid" exact>
              <Room />
            </Route>
          </Switch>
        </BrowserRouter>
      ) : (
        <Username setUsername={setUsername} />
      )}
    </div>
  );
}

export default App;
