import { useEffect, useState } from "react";
import axios from 'axios'
// import Galary from "../Galary/Galary";
import Images from "../Images/Images";
import './ImageList.css'

function ImagesList(){

    const [images,setImages] =useState([])
 const getImage=()=>{
    axios.get("https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20")
    .then((response)=>{
         console.log(response)
        setImages(response.data.photos)
    })
   
   
 }
 useEffect(()=>{
    getImage()
},[])

    return (
       

        <div className="containor">
            <div className="row">
                
               {
                images.map((value,index)=>
                    <Images  Description={value.description}
                 title={value.title} image={value.url}
                
                 
                 key={value.id} 
                 id={value.id}/>
               
            )
               }
            </div>
        </div>
       

            )
}






export default ImagesList;