import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    {id:1,title:'this is title-1',content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni aperiam tempore ad nesciunt alias dicta iusto nihil cum, libero eaque sit minima fugiat.'},
    {id:2,title:'this is title-2',content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni aperiam tempore ad nesciunt alias dicta iusto nihil cum, libero eaque sit minima fugiat.'},
    {id:3,title:'this is title-2',content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni aperiam tempore ad nesciunt alias dicta iusto nihil cum, libero eaque sit minima fugiat.'},
]

const postSlices = createSlice({
    name:'posts',
    initialState,
    reducers:{
        postAdded:{
            reducer(state,action){
                state.push(action.payload)
            },
            prepare(title,content){
                return{
                    payload:{
                        id:nanoid(),
                        title,
                        content
                    }
                }
            }
        }
    }

})


export const selectAllPosts = (state)=>state.posts;

export const { postAdded } = postSlices.actions
export default postSlices.reducer