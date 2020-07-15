import React from 'react';
import { Router } from 'react-router-dom';
import history from './services/history';
import Routes from './routes';
import GlobalStyle from './styles/global'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { ToastContainer } from 'react-toastify';
import './config/ReactotronConfig';
import { store, persistor } from './store';

import { ApolloProvider } from 'react-apollo';
import apolloClient from './services/apollo';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ApolloProvider client={apolloClient}>
          <Router history={history}>
            <GlobalStyle />
            <Routes />
            <ToastContainer autoClose={3000} />
          </Router>
        </ApolloProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
