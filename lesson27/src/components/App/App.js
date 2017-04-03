import React, { Component, PropTypes } from 'react';
import './App.css';








// ----------------------------------------








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












// ------------------------------------















// ------------------------------------


















// ------------------------------------
















export default App;





















