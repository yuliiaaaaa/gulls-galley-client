import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './pages/app/App.tsx';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/store';
import { Provider } from 'react-redux';
import ScrollToTop from './libs/helpers/scrollTop.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </StrictMode>,
);
