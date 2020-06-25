import React from 'react';
import {Route} from 'react-router-dom';
import Input from './components/Input';
import Main from './components/Main';

function App() {
  return(
    <div>
      <Route
        path="/"
        exact={true}
        render={() => <Input />}
      />
      <Route path="/main" component={Main} />
    </div>
  );
};

export default App;