import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { store } from './store/store.js'
import { Provider } from 'react-redux'
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')).render(

  <Auth0Provider
    domain="dev-vvw1hfc1rqaiw3ks.us.auth0.com"
    clientId="zwmYao9FwHSmhSF1tfmWtqKO3fDAspq5"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  <Provider store={store}>
    <App />
  </Provider>
  </Auth0Provider>
 
)
