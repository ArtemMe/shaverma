import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import registerServiceWorker from './registerServiceWorker';
import MainRouter from "./router/MainRouter";

ReactDOM.render(<MainRouter/>, document.getElementById('root'));
registerServiceWorker();
