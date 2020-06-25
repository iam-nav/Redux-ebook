import React from 'react';
import TodoContainer from './components/todoContainer'
import UserContainer from './components/UserContainer'
import {Provider} from 'react-redux'
import store from './store/store'
import './App.css';
 
function App() {  
  return (
  <div>
    <Provider store={store}>
      <TodoContainer></TodoContainer>
      <UserContainer></UserContainer>
    </Provider>
  </div>
  );
}

export default App;
