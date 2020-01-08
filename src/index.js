import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as Sentry from '@sentry/browser';

if (process.env.REACT_APP_SENTRY_DSN !== undefined) {
    Sentry.init({dsn: process.env.REACT_APP_SENTRY_DSN});
} 

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
