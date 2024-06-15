import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "./assets/Fonts/2 Bardiya Bold.ttf"
import { Provider } from 'react-redux'

import store from './Redux/Store/store.js'

import './i18n.js';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>


<Provider store={store}>
    <App />
</Provider>


  </React.StrictMode>,
)
