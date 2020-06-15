import React from 'react';
import {Route} from 'react-router-dom';
import Input from './Input';
import Main from './Main';

const users = [
  {
      id: 101,
      username: '101호',
      elec: 230
  },
  {
      id: 102,
      username: '102호',
      elec: 340
  }
]

function App() {
  return(
    <div>
      <Route
        path="/"
        exact={true}
        render={() => <Input users={users} />}
      />
      <Route path="/main" component={Main} />
    </div>
  );
};

export default App;