import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './pages/app/App.tsx';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/store';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
        <ToastContainer style={{ zIndex: 9999 }} />
      </PersistGate>
    </Provider>
  </StrictMode>,
);
