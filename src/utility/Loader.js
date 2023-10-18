import React from "react";
import { BallTriangle } from "react-loader-spinner";

const Loader = () =>{
 return(
   <div className="h-100 d-flex align-items-center justify-content-center">
    <BallTriangle height={100} width={100} color='pink' ariaLabel="Loading"/>
   </div>
 )
}
export default Loader
