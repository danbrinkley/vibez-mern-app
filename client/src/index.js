import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import store from './store'
import Nav from './components/Nav';

ReactDOM.render(
<Provider store={store}>
    <Router>
        <Nav />
    </Router>
</Provider>,

 document.getElementById('root'));


