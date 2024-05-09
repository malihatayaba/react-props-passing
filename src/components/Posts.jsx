import { useEffect, useState } from "react";
import Post from "./Post";


const Posts = () => {
    const[posts,setposts]=useState([])

   useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setposts(data))

    },[])
    return (
        <div className="cards-container">
            {
                posts.map(post=>(
                    <Post key={post.id} post={post}></Post> 
                ))
            }
        </div>
    );
};

export default Posts;