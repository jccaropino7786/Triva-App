import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ErrorContextProvider } from './context/ErrorContext';

ReactDOM.render(
    <ErrorContextProvider>
      <BrowserRouter>
        {/* <React.StrictMode> */}
          <App className='main' />
        {/* </React.StrictMode> */}
      </BrowserRouter>
    </ErrorContextProvider>,
  document.getElementById('root')
);

reportWebVitals();
