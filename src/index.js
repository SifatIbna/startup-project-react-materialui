import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Provider} from "overmind-react";
import {overmind} from './components/others/OvermindHelper';

ReactDOM.render(
  <React.StrictMode>
    <Provider value={overmind}>
      <App />
    </Provider>

    
  </React.StrictMode>,
  document.getElementById('root')
);