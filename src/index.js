import React from 'react';
import ReactDOM from 'react-dom/client';
import './common/styles/globalStyles.css';
import App from './App';
import useAuth from './hooks/useAuth';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const ConnectedApp = () => {
  const { AuthProvider } = useAuth();
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  )
}
root.render(<ConnectedApp />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
