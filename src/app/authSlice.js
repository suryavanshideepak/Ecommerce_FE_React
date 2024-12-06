import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    user:null,
    token:""
}

export const login = createAsyncThunk(
    'user/login',async(payload) => {
        try{
            const response = await axios.post('http://localhost:4500/user/login',payload)
            return response.data
        }catch (error){
            return error
        }
       
    }
)

export const authSlice = createSlice({
    name:'auth',
    initialState:initialState,
    reducers: {
        setUser: (state, action) => {
            return {
                ...state,
                user:action.payload
            }
        },
        setToken: (state, action) => {
            return {
                ...state,
                token:action.payload
            }
        }
    },
    extraReducers:(builder) => {
        builder.addCase(login.fulfilled, (state,action) => {
            state.token = action.payload.accessToken || ""
            state.user = action.payload.userResponse
        })
    }
})

export const { setToken, setUser } = authSlice.actions
export default authSlice.reducer