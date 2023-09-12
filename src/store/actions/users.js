import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../apiUrl";

const signin = createAsyncThunk(
    'signin',
    async (obj) => {
        try {
            let data = await axios.post(apiUrl + 'auth/signin', obj.data)
            localStorage.setItem('token', data.data.response.token)
            return {
                user: data.data.response.user,
                token: data.data.response.token,
                messages: []
            }
        } catch (error) {
            console.log(error);
            return {
                user: {},
                token: '',
                messages: error.response.data.messages || [error.response.data.message]
            }
        }
    }
)




const signup = createAsyncThunk(
    'signup',
    async (obj) => {
        try {
            let data = await axios.post(apiUrl + 'auth/signup', obj.data)
            return {
                success: data.data.success,
                messages: []
            }
        } catch (error) {
            console.log(error);
            return {

                messages: error.response.data.messages || [error.response.data.message]
            }
        }
    }
)





const signin_token = createAsyncThunk(
    'signin_token',
    async () => {
        try {
            let token = localStorage.getItem('token')
            let authorization = { headers: { 'Authorization': `Bearer ${token}` } }
            let data = await axios.post(apiUrl + 'auth/token', null, authorization)
            localStorage.setItem('token', data.data.response.token)
            return {
                user: data.data.response.user,
                token: data.data.response.token
            }
        } catch (error) {
            console.log(error);
            return {
                user: {},
                token: ''
            }
        }
    }


)



const signOut = createAsyncThunk(
    'signOut',
    async () => {
        try {
            let token = localStorage.getItem('token')
            let authorization = { headers: { 'Authorization': `Bearer ${token}` } }
            let data = await axios.post(apiUrl + 'auth/signout', null, authorization)
            localStorage.removeItem('token')
            return {
                user: {},
                token: ''
            }
        } catch (error) {
            console.log(error);
            return {
                user: {},
                token: ''
            }
        }
    }


)


const signin_actions = { signin, signin_token, signOut, signup }
export default signin_actions