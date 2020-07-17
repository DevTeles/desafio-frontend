import React from 'react';
import { Router } from 'react-router-dom';
import history from './services/history';
import Routes from './routes';
import GlobalStyle from './styles/global'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import './config/ReactotronConfig';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { store, persistor } from './store';

import { ApolloProvider } from '@apollo/react-hooks';

import apolloClient from './services/apollo';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ApolloProvider client={apolloClient}>
          <Router history={history}>
            <GlobalStyle />
            <Routes />
            <ToastContainer autoClose={10000} />
          </Router>
        </ApolloProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
