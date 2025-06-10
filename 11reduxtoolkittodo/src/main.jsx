import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import {store} from './App/Store.js'

// to use the wrap in the redux we will use provider and store.
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)

//only one thing is different which is in context-api we have used the value in provider but in this we will use store as value.
