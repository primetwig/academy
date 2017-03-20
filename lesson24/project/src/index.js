import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
    <App />,
    document.getElementById('root')
);


//// lib.js
//export const author = "Andy Davidson";
//
//function add(a, b) { return a + b; }
//const sum = (a, b) => a + b;
//export { add, sum as total };
//
//// index.js
//import { author, add, total } from './lib.js';



//// greet.js
//export default "Hello";
//// accumulator.js
//export default function add(a, b) { return a + b; }
//// User.js
//export default class User {}
//
//// index.js
//import greet from 'greet.js';
//import add from 'accumulator.js';
//import User from 'User.js';


