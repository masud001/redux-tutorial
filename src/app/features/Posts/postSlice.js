import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id:1,title:'this is title-1',content:'this is content paragraph-1'},
    {id:2,title:'this is title-2',content:'this is content paragraph-2'},
]

const postSlices = createSlice({
    name:'posts',
    initialState,
    reducers:{}

})

export default postSlices.reducer