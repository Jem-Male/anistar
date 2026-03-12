import { useEffect, useState } from "react";
import {Link, useParams } from "react-router-dom";
import axios from "axios";

function ReadManhva1() {

    const {id}=useParams();
    const[post1,setPost]= useState({});
     
    useEffect(()=>{
        async function fetchPost() {
            try{
                const response= await axios.get(`https://5cd98c2db8b39274.mokky.dev/rec/${id}`);
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
                <img className="dd" src={post1.page} alt=""/>
            </div>
        </>
    );
}

export default ReadManhva1;
