import React from "react";
import "./PageOne.css"

const PageOne =  ({imageSrc}) => {
return(
    // Este es el div de la primera vista 
    <div className="page">
<img src={imageSrc} alt="principlaimage" className="tatoo_Wp"/>
<h1 className="tatoo_title">Make ink on your body</h1>
 </div>
);

};

export default PageOne;