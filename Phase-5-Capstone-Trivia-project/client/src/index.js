import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { UserProvider } from './context/UserContext'

ReactDOM.render(
      <BrowserRouter>
        <UserProvider>
          {/* <React.StrictMode> */}
            <App className='main' />
          {/* </React.StrictMode> */}
        </UserProvider>
      </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
