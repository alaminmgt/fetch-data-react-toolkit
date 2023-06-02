import React,{useEffect}  from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPost } from './postSlice';


const PostView = () => {
    const {isLoading,posts,error} = useSelector((state) =>state.posts);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchPost());
    }, [])
    
  return (
    <>
        <div className='post_view'>
            <h2>Fetch data by redux toolkit</h2>
            {isLoading && <h3>Loading....</h3> }
            {error && <h3>{error}</h3>}
            {posts && posts.map((post) =>{
                return <section>
                    <article>
                        <h5>{post.title}</h5>
                        <p>{post.body}</p>
                    </article>
                </section>
            })}
        </div>
    </>
  )
}

export default PostView
