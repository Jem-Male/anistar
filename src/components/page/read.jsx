import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ReadManhva() {

    const {id}=useParams();
    const[post,setPost]= useState({});
     
    useEffect(()=>{
        async function fetchPost() {
            try{
                const response= await axios.get(`https://5cd98c2db8b39274.mokky.dev/home/${id}`);
                setPost(response.data);
            }catch(error){
                console.log(error);
            }
        }
        fetchPost();
    },[id]);

    return (
        <>
            <div>
                <img className="dd" src={post.page} alt=""/>
            </div>
        </>
    );
}

export default ReadManhva;
