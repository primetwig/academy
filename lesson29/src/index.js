import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';

import store from './store';

import App from 'components/App';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);




//import { Router, Route, browserHistory } from 'react-router';
//
//const history = browserHistory;
//
////import { syncHistoryWithStore } from 'react-router-redux';
////const history = syncHistoryWithStore(browserHistory, store);
//
//
//import Contacts from 'components/Contacts';
//import News from 'components/News';
//
//const routes = (
//    <Route path="/" component={App}>
//        <Route path="contacts" component={Contacts} />
//        <Route path="news" component={News} />
//    </Route>
//);
//
//
//ReactDOM.render(
//    <Provider store={store}>
//        <Router history={history}>
//            {routes}
//        </Router>
//    </Provider>,
//    document.getElementById('root')
//);



//<Route path="news" component={News}>
//    <IndexRoute component={NewsList}/>
//    <Route path=":id" component={NewsPage} />
//</Route>

//<Route path="settings" component={Settings}>
//    <IndexRedirect to="account"/>
//    <Route path="account" component={AccountPage} />
//    <Route path="tariff-plan" component={TariffPlanPage} />
//</Route>




