import BigContainer from "./BigContainer";
import { useState, useEffect } from "react";
import axios from "axios";
import Error from "./error";

function RecManga() {

    const[recs, setPost]= useState([]);
    const[isLoading, setIsLoading]=useState(false);
    const[isError, setIserror]=useState(false);

    useEffect(() =>{
        async function FetchPost(params) {
            try{
                setIsLoading(true);
                const response=await axios.get('https://5cd98c2db8b39274.mokky.dev/rec');
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


    // сюды monki devv
    return (
    <div class="big_container">
        <div class="recommend_manhva"> 
        <span class="big_container_text">Топ-3 манхвы</span>
        <div class="manhva">
            {recs.map((rec, index)=>(
            <BigContainer
                key={rec.id}
                img={rec.img}
                name={rec.name}
                rec={rec}
            />
        ))}
        </div>
        </div>
        </div>
    );

}

export default RecManga;