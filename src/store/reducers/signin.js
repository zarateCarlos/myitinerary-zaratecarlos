import { createReducer } from "@reduxjs/toolkit";
import signin_actions from "../actions/users";
const { signin, signin_token, signOut, signup } = signin_actions

const initial_state = {
    user: {},
    token: '',
    messages: [],
    success: false
}

const signin_reducer = createReducer(
    initial_state,
    builder=> builder.addCase(
        signin.fulfilled,
        (state,action)=> {
            let new_state = {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                messages: action.payload.messages
            }
            return new_state
        }
    ).addCase(
        signup.fulfilled,
        (state,action)=> {
            let new_state = {
                ...state,
                user: action.payload.user,
                messages: action.payload.messages
            }
            return new_state
        }
    ).addCase(
        signin_token.fulfilled,
        (state,action)=> {
            let new_state = {
                ...state,
                user: action.payload.user,
                token: action.payload.token
            }
            return new_state
        }
    ).addCase(
        signOut.fulfilled,
        (state,action)=> {
            let new_state = {
                ...state,
                user: action.payload.user,
                token: action.payload.token
            }
            return new_state
        }
    )
)
export default signin_reducer