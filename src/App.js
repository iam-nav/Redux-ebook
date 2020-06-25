import React from 'react';
import CakeContainer from './components/todo'
import {Provider} from 'react-redux'
import store from './redux/cakes/task/store'
import './App.css';
 
function App() {  
  return (
  <div>
    <Provider store={store}>
<CakeContainer></CakeContainer>
</Provider>
  </div>
  );
}

export default App;
