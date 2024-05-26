import axios from "axios";
import { useEffect, useState } from "react";
 import { useParams } from "react-router-dom";
 import './ImageDetails.css'
function ImageDetails(){
    const {id} = useParams();
   console.log(id)

      const [photo,setPhoto] = useState({})

   async function downloadImage(){
    const response= await axios.get(`https://api.slingacademy.com/v1/sample-data/photos/${id}`)
     console.log(response.data)
    
    setPhoto({
      description:response.data.photo.description,
      image:response.data.photo.url,
      title:response.data.photo.title,
     
    })
   
    }

   useEffect(()=>{
    downloadImage()
   },[])

    return(
        <div >
       <div className="container">
  
        <div className="image">
          <img src={photo.image} />
          </div>
          <div className="content">
          <div className="heading">
          <h2>
         {photo.title}
         </h2>
        </div>
          <div className="describ">
            <h3> {photo.description}</h3>
          </div>
          </div>
          </div>
        </div>
    )

 }



export default ImageDetails;