import React, { Component, PropTypes } from 'react';
import './App.css';



const Text = (props) => {
    return (
        <p>Some text {props.extra}</p>
    );
};

const App = () => {
    return (
        <div>
            <Text extra="goes here" />
        </div>
    );
};



// -----------------------------




//class App extends Component {
//    render() {
//        return (
//            <div>
//                <p>Some text</p>
//                <button>ok</button>
//            </div>
//        );
//    }
//}








// 1. event
//onClick(e, oe) {
//    console.log(e, oe);
//}






// 2. event in pure component
//const App = () => {
//    const onClick = (e, oe) => {
//        console.log(e, oe);
//    };
//
//    return (
//        <button onClick={onClick}>
//            ok
//        </button>
//    );
//};







// 3. default props
//class Color extends Component {
//    static propTypes = {
//        name: PropTypes.string
//        //name: PropTypes.string.isRequired
//    };
//    static defaultProps = {
//        name: "green"
//    };
//
//    render() {
//        return (
//            <p>Color is: {this.props.name}</p>
//        );
//    }
//}

//Color.propTypes = {
//    name: PropTypes.string
//    //name: PropTypes.string.isRequired
//};
//Color.defaultProps = {
//    name: "green"
//};





// 4. state
//constructor(props) {
//    super(props); // props?
//    this.state = {
//        text: "Some text goes here"
//    };
//}





// 5. update state
//this.state.text = "Hello?";

//setTimeout(() => {
//    this.setState({
//        text: "Some other text"
//    });
//}, 5000);





// 6. bind
//this.onClick = this.onClick.bind(this);

//onClick = () => {
//    this.setState({
//        times: this.state.times + 1
//    });
//};

//<button onClick={this.onClick.bind(this)}>Ok</button>

//<button onClick={e => this.onClick(e)}>Ok</button>




// 7. update state does not replace the whole thing
//class App extends Component {
//    constructor(props) {
//        super(props);
//        this.state = {
//            num1: 1,
//            num2: 2
//        };
//    }
//    onClick = () => {
//        this.setState({
//            num2: this.state.num2 + 1
//        });
//    };
//    render() {
//        const { num1, num2 } = this.state;
//        return (
//            <div>
//                <p>num1: {num1}, num2: {num2}</p>
//                <button onClick={this.onClick}>Ok</button>
//            </div>
//        );
//    }
//}



// 8. input example
//class App extends Component {
//    constructor(props) {
//        super(props);
//        this.state = {
//            text: 'Some text'
//        };
//    }
//    onChange = (e) => {
//        this.setState({
//            text: e.target.value
//        });
//    };
//    render() {
//        const { text } = this.state;
//        return (
//            <div>
//                <input type="text" onChange={this.onChange} defaultValue={text} />
//                <p>{text}</p>
//            </div>
//        );
//    }
//}



// 9. delegate changes to nested component
//const Input = (props) => {
//    // ...props
//    return <input type="text" onChange={props.update}/>;
//};
//
//class App extends Component {
//    constructor(props) {
//        super(props);
//        this.state = {
//            text: 'asdas'
//        };
//    }
//    onChange = (e) => {
//        this.setState({
//            text: e.target.value
//        });
//    };
//    render() {
//        const { text } = this.state;
//        return (
//            <div>
//                <Input update={this.onChange} />
//                <p>{text}</p>
//            </div>
//        );
//    }
//}










export default App;
