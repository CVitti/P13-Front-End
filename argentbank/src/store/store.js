// @ts-nocheck

// Redux Toolkit import
import { configureStore, createSlice } from "@reduxjs/toolkit";

const userStore = createSlice({
    name: 'user',
    initialState: {
        isLoggedIn : false,
        userToken : null,
        firstName : "",
        lastName : "",
        userEmail : "",
    },
   
    reducers: {
        connectUser: (state, data) => {
            state.isLoggedIn = true;
            state.userToken = "Bearer " + data.payload.token;
            state.userEmail = "";
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

        setUserEmail: (state, data) => {
            state.userEmail = data.payload;
        },

    },
}) 

export const {connectUser, disconnectUser, setUser, setUserEmail } = userStore.actions;

// Enabling redux devtools for the redux browser extension
const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = configureStore({
    reducer: {
        userStore: userStore.reducer,
    },
    reduxDevtools
})