import { Link } from "react-router-dom";


function Images({title,image,id,description}){
 return(
    
     <div>
         <div className="containor">
        <Link to={`/photo/${id}`}>
           
        <div className="title">{title}</div>
        <div className="image"><img src={image} /></div>
        <div className="description">{description}</div>
        </Link>
        </div>
     </div>
 )
}
export default Images;