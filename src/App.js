import React from 'react';
import {Provider} from 'react-redux'
import './App.css';
import store from './store/Rstore'


import SignIn from './components/Signin'
import SignUp from './components/Signup'
import Questions from './components/Questions'


function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <SignIn/>
      <SignUp/>
      </div>
    </Provider>
  );
}

export default App;
