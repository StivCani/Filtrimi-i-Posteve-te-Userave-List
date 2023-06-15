import React, { useEffect, useState } from "react";
import axios from 'axios'
function Posts({userId, onGoBack}) {
    const[ posts, setPosts] = useState([])
    const[ loading, setLoading] = useState(true)

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then((result) => {
            setPosts(result.data)
            setLoading(false)
        })
    },[])
    return (
        <>
            <div>
                <button onClick={()=>onGoBack()}>Go Back</button>
            <ul>
                {loading ? "loading ...":posts.map(post =>
                    <li key={post.id}>{post.title}</li>)}
            </ul>
            
            </div>
        </>
    )
}

export default Posts