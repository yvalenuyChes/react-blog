import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {Provider} from 'react-redux'
import rootReducer from './store/rootReducers'
import reportWebVitals from './reportWebVitals'
import './styles/nullstyle.scss'

ReactDOM.render(
  <React.StrictMode>
  <Provider store={rootReducer}>
    <App />
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
