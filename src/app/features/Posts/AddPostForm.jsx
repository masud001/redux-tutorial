import React, { useState } from 'react'
import { useDispatch } from "react-redux"
import { postAdded } from './postSlice'
const AddPostForm = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const dispatch = useDispatch()
    const onTitleChange = e =>setTitle(e.target.value)
    const onContentChange = e =>setContent(e.target.value)
    const onSavePostClicked = e =>{
        e.preventDefault();
        if (title &&content) {
            dispatch(
                postAdded(title,content)
            )
            setTitle('')
            setContent('')
        }
    }
  return (
    <section className='row'>
        <h1>add a new post</h1>
        <form>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Enter Title</label>
                <input 
                    value={title}
                    onChange={onTitleChange}
                    type="text" 
                    className="form-control" 
                    id="title" 
                    placeholder="Enter Title"/>
            </div>
            <div className="mb-3">
                <label htmlFor="content" className="form-label">Enter Content</label>
                <textarea 
                    value={content}
                    onChange={onContentChange}
                    className="form-control" 
                    id="content" 
                    placeholder='Enter Content'
                    rows="3"/>
            </div>
            <button onClick={onSavePostClicked} className='btn btn-outline-secondary'>Submit Post </button>
        </form>
    </section>
  )
}
export default AddPostForm