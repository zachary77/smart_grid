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
        component={Input}
      />
      <Route path="/main/:data" component={Main} /> {/*/:data 는 match를 이용해서 데이터를 받을거임*/}
    </div>
  );
};

export default App;