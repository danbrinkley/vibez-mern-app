import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import store from './store'
import VibezApp from './components/VibezApp';

ReactDOM.render(
<Provider store={store}>
    <Router>
        <VibezApp />
    </Router>
</Provider>,

 document.getElementById('root'));


