import { createSlice } from "@reduxjs/toolkit";
import { setItem } from "../helpers/persistance-data";

const initialState = {
    isLoading: false,
    isLoggedIn: false,
    error: null,
    user: null,
}

export const authSlcie = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        authStart: state => {
            state.isLoading = true
        },
        authSuccess: (state, actions) => {
            state.isLoading = false
            state.isLoggedIn = true
            state.user = actions.payload
            setItem('token', actions.payload.uid)
        },
        authFailure: (state, actions) => {
            state.isLoading = false
            state.error = actions.payload
        },
    }
})


export const {
    authStart,
    authSuccess,
    authFailure
} = authSlcie.actions
export default authSlcie.reducer