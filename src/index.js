import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import M from 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import AuthProvider from './store/Context/AuthProvider';
import GlobalStyle from './components/GlobalStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle>
      <AuthProvider>
        <App />
      </AuthProvider>
    </GlobalStyle>
  </React.StrictMode>
);

reportWebVitals();
