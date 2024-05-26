 import { Routes ,Route } from "react-router-dom";
import ImageDetails from "../Componants/ImagesDetails/ImageDetails";
import Galary from "../Componants/Galary/Galary"
 function CustomRoutes(){
 return (
   <Routes>
    <Route path="/" element={ <Galary />}/>
    <Route  path="/photo/:id" element={<ImageDetails />}/>
   </Routes>
 )
}
export default CustomRoutes;