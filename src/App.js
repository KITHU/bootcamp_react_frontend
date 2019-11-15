import React from 'react';
import {Provider} from 'react-redux'
import store from './redux/store'
import './App.css';

import SignIn from './components/Signin'
import SignUp from './components/Signup'
function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <SignUp/>
      </div>
    </Provider>
  );
}

export default App;
