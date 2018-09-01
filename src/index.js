import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import ClackPhat from './ClackPhat';

import './index.css';

ReactDOM.render(<ClackPhat />, document.getElementById('root'));
registerServiceWorker();
