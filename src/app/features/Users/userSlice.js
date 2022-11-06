import { createSlice } from "@reduxjs/toolkit";


const initialState=[
    {id:1,name:"Masudur Rahman"},
    {id:2,name:"Tariqu Rahman"},
    {id:3,name:"Zoya Haque"},
]
const userSlice = createSlice({
    name:'users',
    initialState,
    reducers:{ }
})



export const selectAllUsers = state => state.users;
export const {} = userSlice.actions
export default userSlice.reducer