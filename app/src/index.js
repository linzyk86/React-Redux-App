import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {reducer} from './reducers/reducer';
import {Provider} from 'react-redux';
import Quote from './components/Quote';


const logger = ({getState}) => next =>action =>{
  console.log("Dispatching action", action);
  next(action);
};

let store = createStore(reducer, applyMiddleware(logger, thunk));

function App() {
  return (
    <div className="App">
      <h1>Quotes</h1>
      <Quote />
    </div>
  );
}

ReactDOM.render(
    <Provider store={store}><App /></Provider>
 ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
