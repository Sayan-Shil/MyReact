import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Routing from './Routing.jsx'
import './App.css';
import Redux from './redux.jsx';
import { Provider } from 'react-redux';
import store from './store/store.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Provider store={store}> 
    <Redux />
  </Provider>
  </StrictMode>
 
,
)
