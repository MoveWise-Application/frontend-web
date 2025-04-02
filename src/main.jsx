import AuthProvider from "react-auth-kit";
import createStore from "react-auth-kit/createStore";
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx';
import { LoadingProvider } from "./contexts/LoadingContext.jsx";
import './index.css';

const store = createStore({
  authName: "_auth",
  authType: "cookie",
  cookieDomain: window.location.hostname,
  cookieSecure: false,
});

createRoot(document.getElementById('root')).render(
  <AuthProvider store={store}>
    <BrowserRouter>
      <LoadingProvider>
        <App />
      </LoadingProvider>
    </BrowserRouter>
  </AuthProvider>
)
