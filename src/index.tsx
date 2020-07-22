import React from 'react';
import ReactDOM from 'react-dom';
import 'fontsource-roboto';
import './index.css';
import './popup/styles/sb-admin/sb-admin.scss';
import App from './popup/App';
import * as serviceWorker from './serviceWorker';
import AccountManager from './popup/container/AccountManager';
import { HomeContainer } from './popup/container/HomeContainer';
import { HashRouter } from 'react-router-dom';
import { BackgroundManager } from './popup/BackgroundManager';
import ErrorContainer from './popup/container/ErrorContainer';
import './popup/styles/custom.scss';
import { AppState } from './lib/MemStore';
import SignMessageContainer from './popup/container/SignMessageContainer';

const appState = new AppState();
const errorsContainer = new ErrorContainer();
const backgroundManager = new BackgroundManager(appState, errorsContainer);
const authContainer = new AccountManager(
  errorsContainer,
  backgroundManager,
  appState
);
const signMessageContainer = new SignMessageContainer(
  errorsContainer,
  backgroundManager,
  appState
);
const homeContainer = new HomeContainer();

ReactDOM.render(
  <HashRouter>
    <App
      errors={errorsContainer}
      authContainer={authContainer}
      homeContainer={homeContainer}
      signMessageContainer={signMessageContainer}
    />
  </HashRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
