import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';


class App extends Component {
    render() {
        return (
            <div>
                <p>Some text goes here</p>
                <button>Ok</button>
            </div>
        );
    }
}

//const App = () => {
//    return <p title="text">Some text here</p>;
//};
//
//const App = () => {
//    return React.createElement('p', { title: 'text' }, 'Some text here');
//};
//
//const Button = () => {
//    return <button className="btn">Ok</button>;
//};
//
//const App = () => {
//    return (
//        <div>
//            <p>Some text here</p>
//            <button>Ok</button>
//        </div>
//    );
//};


//class App extends Component {
//    render() {
//        return (
//            <div>
//                <p>Some text here</p>
//                <button>Ok</button>
//            </div>
//        );
//    }
//}


//class Text extends Component {
//    render() {
//        return <p>{this.props.text}-{this.props.num}</p>;
//    }
//}
//
//class App extends Component {
//    render() {
//        return (
//            <div>
//                <Text text="some text" num={5} />
//                <button>Ok</button>
//            </div>
//        );
//    }
//}


export default App;
