import { combineReducers } from "redux";
import { createStore } from "redux";

const initialUsers = [];


function userReducers(state = initialUsers, action) {
    if (action.type === 'ADD_ITEM') {
        const newlist = [...state, {
            username: action.name,
            userid: action.id
        }];
        return newlist;
    }
    return state; // Return the current state by default
}

const combinedRed = combineReducers({ users: userReducers });

const store = createStore(combinedRed);


store.dispatch({type:'ADD_ITEM',name: 'apple',id:'1'});
console.log(store.getState());
