

//import React, { Component, PropTypes } from 'react';
//
//class App extends Component {
//    constructor(props) {
//        super(props);
//        this.state = {
//            text:     'Some text',
//            checked:  false,
//            selected: 'lime',
//            picked:   'dog'
//        };
//    }
//
//    onChange = (e) => {
//        this.setState({
//            text: e.target.value
//        });
//    };
//
//    render() {
//        const { text, checked, selected, picked } = this.state;
//
//        return (
//            <div>
//                <form>
//                    <input type="text" onChange={this.onChange} value={text} />
//
//                    <textarea onChange={this.onChange} value={text} />
//
//                    <input type="checkbox" onChange={this.onChange} checked={checked} />
//
//                    <select value={selected} onChange={this.onChange}>
//                        <option value="grapefruit">Grapefruit</option>
//                        <option value="lime">Lime</option>
//                        <option value="coconut">Coconut</option>
//                        <option value="mango">Mango</option>
//                    </select>
//
//                    <input type="radio" onChange={this.onChange} value="cat" checked={picked === "cat"} />
//                    <input type="radio" onChange={this.onChange} value="dog" checked={picked === "dog"} />
//                </form>
//
//                {/*<form>
//                    <input type="text" defaultValue="text..." />
//                    <input type="checkbox" defaultChecked={false} />
//
//                    <input type="text" value="text..." readOnly />
//                </form>*/}
//            </div>
//        );
//    }
//}
//
//export default App;




//e.target.type === "checkbox" ? e.target.checked : e.target.value

//name based variables

//defaultValue="text..."
//defaultChecked={false}
//readOnly






// ---------------------------------------------------









//import React, { Component, PropTypes } from 'react';
//import update from 'react-addons-update';
//
//class App extends Component {
//    constructor(props) {
//        super(props);
//        this.state = {
//            user: {
//                name: "Andy",
//                social: {
//                    friends: [/* data */],
//                    likesTotal: 273
//                }
//            }
//        };
//    }
//
//    updateLikes = () => {
//        const { user } = this.state;
//
//        this.setState({
//            user: {
//                ...user,
//                social: {
//                    ...user.social,
//                    likesTotal: user.social.likesTotal + 1
//                }
//            }
//        });
//
//        //let newState = update(this.state, {
//        //    user: {
//        //        social: {
//        //            likesTotal: { $set: user.social.likesTotal + 1 }
//        //        }
//        //    }
//        //});
//        //this.setState(newState);
//    };
//
//    render() {
//        const { user } = this.state;
//        return (
//            <div>
//                <button onClick={this.updateLikes}>
//                    {user.social.likesTotal}
//                </button>
//            </div>
//        );
//    }
//}
//
//export default App;




















