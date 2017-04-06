import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { UserActions } from 'actions';

class App extends Component {
    onLogin = () => {
        const { dispatch } = this.props;
        dispatch(UserActions.userLoggedIn());
    };
    onLogout = () => {
        const { dispatch } = this.props;
        dispatch(UserActions.userLoggedOut());
    };

    render() {
        const { user } = this.props;

        return (
            <div>
                {user && user.data ? (
                    <div>
                        <p>Hello there! My name is {user.data.name}</p>
                        <button onClick={this.onLogout}>Log out</button>
                    </div>
                ) : (
                    <button onClick={this.onLogin}>Log in</button>
                )}
            </div>
        );
    }
}

export default App;

//const mapStoreToProps = store => ({
//    user: store.user,
//    news: store.news
//});
//
//export default connect(mapStoreToProps)(App);


//@connect(store => ({ ...store }))





// ---------------------------------------------------




//import { withRouter, Link } from 'react-router';
//
//return (
//    <div>
//        {this.props.children}
//
//        <ul>
//            <li>
//                <Link to="/contacts">Contacts</Link>
//            </li>
//            <li>
//                <Link to="/news">News</Link>
//            </li>
//        </ul>
//    </div>
//);















