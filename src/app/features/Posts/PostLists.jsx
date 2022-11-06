import { useSelector } from "react-redux"

const PostLists = () => {
    const posts = useSelector(state => state.posts);
    const renderPosts = posts.map((post)=>(
        <article key={post.id} className='card mb-3'>
            <div className="card-body">
                <h3 className='card-title text-capitalize'>{post.title}</h3>
                <p className='card-text'>{post.content}</p>
            </div>
        </article>
    ))
  return (
    <section>
        <div>Postlists</div>
        {renderPosts}
    </section>
  )
}
export default PostLists