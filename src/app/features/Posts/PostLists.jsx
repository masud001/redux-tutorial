import React from "react";
import { useSelector } from "react-redux"
import AddPostForm from "./AddPostForm";
import {selectAllPosts} from './postSlice'
const PostLists = () => {
    const posts = useSelector(selectAllPosts);
    const renderPosts = posts.map((post,index)=>(
        <div key={post.id+index} className="col-md-3 mb-md-4">
            <article className='card'>
                <div className="card-body">
                    <h3 className='card-title text-capitalize'>{post.title}</h3>
                    <p className='card-text'>{post.content.substring(0,100)}</p>
                </div>
            </article>
        </div>
    ))
  return (
    <React.Fragment>
        <AddPostForm/>
        <section className='row pt-3'>
            {renderPosts}
        </section>

    </React.Fragment>
  )
}
export default PostLists