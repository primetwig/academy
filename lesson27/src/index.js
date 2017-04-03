import { createStore } from 'redux';

const reducer = function (state = 0, action) {
    const { type, payload } = action;

    switch (type) {
        case 'INC':
            return state + payload;
        case 'DEC':
            return state + payload;
        default:
            return state;
    }
};

const store = createStore(reducer);

store.subscribe(() => {
    console.log('Store:', store.getState());
});


store.dispatch({ type: "INC", payload: 1 });




//combineReducers
//userReducer
//newsReducer
//CHANGE_NAME
//CHANGE_AGE

//do not mutate state...

//applyMiddleware
//const logger = (store) => (next) => (action) => {
//    console.log(action);
//    next(action);
//};
//const middlewares = applyMiddleware(logger);


//const add = (x) => (y) => x + y;
//console.log(add(5)(6));
//
//const add5 = add(5);
//console.log(add5(12));


//import logger from 'redux-logger';
//import thunk from 'redux-thunk';
//
//store.dispatch(dispatch => {
//    dispatch({ type: "INC", payload: 1 });
//
//    setTimeout(() => {
//        dispatch({ type: "INC", payload: 1 });
//    }, 1000);
//});

import promise from 'redux-promise-middleware';
new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() > 0.5) {
            const news = [
                { title: "Some title", text: "text text text..." },
                { title: "Another title", text: "text?" }
            ];
            resolve(news);
        } else {
            reject({ code: 401, message: "Not allowed" });
        }
    }, 2000);
});



// ----------------------------------------



//let a = { name: "Andy" };
//let b = a;
//
//b.name = "Harry";
//
//console.log({ a, b });
//// a: { name: "Harry" }
//// b: { name: "Harry" }



//let a = { name: "Andy" };
//let b = Object.assign({}, a, { name: "Harry" });
//
//console.log({ a, b });
//// a: { name: "Andy" }
//// b: { name: "Harry" }
//
////b = {
////    ...a,
////    name: "Harry"
////};


// ----------------------------------------


//let a = { name: "Andy", things: [1, 2, 3] };
//let b = Object.assign({}, a, { name: "Harry" });
//
//b.things.push(4);
//
//console.log({ a, b });
//// a: { name: "Andy", things: [1, 2, 3, 4] }
//// b: { name: "Harry", things: [1, 2, 3, 4] }



//let a = { name: "Andy", things: [1, 2, 3] };
//let b = Object.assign({}, a, { name: "Harry" });
//
//b.things = b.things.concat(4);
////b.things = b.things.filter(v => v !== 2);
//
//console.log({ a, b });
//// a: { name: "Andy", things: [1, 2, 3] }
//// b: { name: "Harry", things: [1, 2, 3, 4] }
//
////b = {
////    ...b,
////    things: b.things.concat(4)
////};












// ----------------------------------------







//import React from 'react';
//import ReactDOM from 'react-dom';
//import { createStore } from 'redux';
//
//import './index.css';
//
//import App from './components/App';
//
//ReactDOM.render(
//    <App />,
//    document.getElementById('root')
//);






