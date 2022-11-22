// @ts-nocheck

// Redux Toolkit import
import { configureStore, createSlice } from "@reduxjs/toolkit";

/* Creating a slice of the store. */
const userStore = createSlice({
    name: 'user',
    initialState: {
        isLoggedIn : false,
        userToken : null,
        firstName : "",
        lastName : ""
    },
   
    reducers: {
        connectUser: (state, data) => {
            state.isLoggedIn = true;
            state.userToken = "Bearer " + data.payload.token;
        },

        disconnectUser: (state) => {
            state.isLoggedIn = false;
            state.userToken = null;
            state.firstName = "";
            state.lastName = "";
        },

        setUser: (state, data) => {
            state.firstName = data.payload.firstName;
            state.lastName = data.payload.lastName;
        },
    },
}) 

export const {connectUser, disconnectUser, setUser } = userStore.actions;

// Enabling redux devtools for the redux browser extension
const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

/* Creating a store with the reducer. */
export const store = configureStore({
    reducer: {
        userStore: userStore.reducer,
    },
    reduxDevtools
})