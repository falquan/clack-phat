import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import ReactLogState from 'react-log-state';

import App from './App';

import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
