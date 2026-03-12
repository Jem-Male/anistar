import { useEffect, useState } from "react";
import Post_card from "./PostCard";
import axios from "axios";
import LoadingPost from "./loadingPost";
import Error from "./error";

function PostList(){

    const[posts, setPost]= useState([]);
    const[isLoading, setIsLoading]=useState(false);
    const[isError, setIserror]=useState(false);

    useEffect(() =>{
        async function FetchPost(params) {
            try{
                setIsLoading(true);
                const response=await axios.get('https://5cd98c2db8b39274.mokky.dev/home');
                setPost(response.data);
            }catch(error){
                setIserror(true);
                console.log(error);
            } finally{
                setIsLoading(false);
            }
        }
        FetchPost();
    },[]);

    if(isError){
        return <Error/>;
    }

    return(
        <div class="category-row">
            {isLoading ? (<LoadingPost/>) :(
                <>
                    {posts.map((post)=>(
                        <Post_card key={post.id} img={post.img} post={post}/>
                    ))}
                </>
            )}
            
        </div>
    );
}

export default PostList;