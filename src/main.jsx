import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/index.jsx'

//Provider helps to connect the react---redux thats helps to pass store-data at redux to all component of react by adding app inside it

ReactDOM.createRoot(document.getElementById('root')).render(

 <Provider store={store}>
    <App />
  </Provider>
)
