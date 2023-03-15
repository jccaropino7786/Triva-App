import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ErrorProvider } from './context/ErrorContext';

ReactDOM.render(
    <ErrorProvider>
      <BrowserRouter>
        {/* <React.StrictMode> */}
          <App className='main' />
        {/* </React.StrictMode> */}
      </BrowserRouter>
    </ErrorProvider>,
  document.getElementById('root')
);

reportWebVitals();
