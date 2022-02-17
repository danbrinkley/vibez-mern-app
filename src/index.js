import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import store from './store'
import App from './App';
import { Provider } from "react-redux";

ReactDOM.render(
<Provider store={store}>
    <Router>
        <App />
    </Router>
</Provider>,

 document.getElementById('root'));


