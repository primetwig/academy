import React, { Component, PropTypes, Children, cloneElement } from 'react';
import './App.css';



class App extends Component {
    click = () => {
        alert(this.input.value);
    };

    render() {
        return (
            <div>
                <input type="text" ref={el => this.input = el} />
                <button onClick={this.click}>ok</button>
            </div>
        );
    }
}






// ------------------------------------







//class Input extends Component {
//    method() {
//        alert('hello');
//    }
//    render() {
//        return (
//            <div>
//                <input type="text" placeholder="" />
//            </div>
//        );
//    }
//}
//class App extends Component {
//    click = () => {
//        this.input.method();
//    };
//
//    render() {
//        return (
//            <div>
//                <Input ref={el => this.input = el} />
//                <button onClick={this.click}>ok</button>
//            </div>
//        );
//    }
//}









// ------------------------------------









//class App extends Component {
//    constructor(props) {
//        super(props);
//        this.state = {
//            value: 0
//        };
//        console.log('constructor');
//    }
//
//    click = () => {
//        this.setState({
//            value: this.state.value + 1
//        });
//    };
//
//    //componentWillMount() {
//    //    console.log('componentWillMount');
//    //    //console.log(this.state);
//    //}
//
//    //componentDidMount() {
//    //    console.log('componentDidMount');
//    //}
//
//    //componentWillUnmount() {
//    //    console.log('componentWillUnmount');
//    //}
//
//    render() {
//        console.log('render');
//        return (
//            <button onClick={this.click}>
//                {this.state.value}
//            </button>
//        );
//    }
//}

//class Wrapper extends Component {
//    constructor(props) {
//        super(props);
//        this.state = {
//            mount: false
//        };
//    }
//    mount(value) {
//        this.setState({
//            mount: value
//        });
//    }
//    render() {
//        return (
//            <div>
//                <button onClick={e => this.mount(true)}>mount</button>
//                <button onClick={e => this.mount(false)}>unmount</button>
//                <hr/>
//                {this.state.mount && <App />}
//            </div>
//        );
//    }
//}
//export default Wrapper;

//this.iv = setInterval(this.click, 1000);
//this.iv && clearInterval(this.iv);

//componentWillReceiveProps(nextProps) {
//    console.log('componentWillReceiveProps', nextProps);
//}
//shouldComponentUpdate(nextProps, nextState) {
//    return nextProps.value % 5 === 0;
//}
//componentDidUpdate(prevProps, prevState) {
//    console.log('componentDidUpdate', prevProps);
//}








// ------------------------------------








//class App extends Component {
//    constructor(props) {
//        super(props);
//        this.state = {
//            items: ['Andy', 'Harry', 'Tom']
//        };
//    }
//
//    render() {
//        const { items } = this.state;
//
//        return (
//            <div>
//                {items.map(item => {
//                    return <h4>{item}</h4>;
//                })}
//            </div>
//        );
//    }
//}

//const Person = (props) => {
//    return <h4>{props.name}</h4>;
//};

//.filter(item => item.length > 3)

//style={{ height: 10, color: 'red' }}

//empty string !{''}!<br/>
//zero !{0}!<br/>
//null !{null}!<br/>
//true !{true}!<br/>
//false !{false}!<br/>
//undefined !{void(0)}!<br/>










// ------------------------------------









//const Text = (props) => {
//    return <p className="text">{props.color}</p>;
//};
//
//class ColorProvider extends Component {
//    render() {
//        return this.props.children;
//    }
//}
//
//class App extends Component {
//    render() {
//        return (
//            <div>
//                <ColorProvider>
//                    <Text />
//                </ColorProvider>
//            </div>
//        );
//    }
//}

//const children = Children.map(this.props.children, child => child);

//const children = Children.toArray(this.props.children);

//const children = Children.forEach(this.props.children, child => console.log(child.props.className));

//const children = Children.map(this.props.children, child => {
//    //return child.props.color = 'green';
//    return cloneElement(child, { color: 'green' });
//});



export default App;
