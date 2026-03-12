import StarIcon from"../assets/style/image/free-icon-star-1828884.png"
import Bookmarc from "../assets/style/image/m4dj4p8fpc4f75l2u4ivft17o0.png"
import Like from "../assets/style/image/free-icon-heart-16821598.png"
import Download from "../assets/style/image/downloading-updates-48.png"
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ManhvaRecInfo(){

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
        <div className="category-row-dww">
        <div className="po">
            <div className="cardd">
                <p className="p">p</p>
                <img style={{ textAlign: 'center' }} className="img_m" src={post1.img} alt=""/>
                <p className="p">p</p>
            </div>
            <h2 className="name-go">{post1.name}</h2>
            <p className="name-go">2024</p>
            <div className="cards">
                <div>
                    <span className="name-go">рейтинг</span>
                    <br></br>
                    <img className="icon_img" src={StarIcon} alt=""/>
                    <span className="name-go">9/10</span>
                </div>
                <div>
                    <span className="name-go">глав</span>
                    <br></br>
                    <span className="name-go">1</span>
                </div>
                <div>
                    <span className="name-go">лайков</span>
                    <br></br>
                    <img className="icon_img" src={Like} alt=""/>
                    <span className="name-go">9</span>
                </div>
                <div>
                    <span className="name-go">в закладках</span>
                    <br></br>
                    <img className="icon_img" src={Bookmarc} alt=""/>
                    <span className="name-go">2</span>
                </div>
            </div>
            <h3 className="name-g">описание</h3>
            <div className="paddig">
                <span className="name-g2">
                    {post1.description}
                </span>
            </div>
        </div>        
        <div className="manhva_run">
            <Link to={`/rec.read/${post1.id}`} className="run" >
                <p className="s">p</p>
                <h3 className="name-go">Читать</h3>
            </Link>
            <a className="run" href="">
                <p className="s">p</p>
                <img className="download" src={Download} alt=""/>
            </a>
        </div>
    </div>
    );
}

export default ManhvaRecInfo;
