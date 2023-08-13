//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application

let segundo= 0;
setInterval( ()=> {
    const digitosix= Math.floor ( (segundo/100000 )%10); 
    const digitofive= Math.floor ( (segundo/10000 )%10); 
    const digitofour= Math.floor ( (segundo/1000 )%10); 
    const digitothree= Math.floor ( (segundo/100 )%10); 
    const digitotwo= Math.floor ( (segundo/10 )%10); 
const digitoone= Math.floor ( (segundo/1 )%10);
segundo +=1;

//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));
ReactDOM.render(<Home digito1={digitoone} digito2={digitotwo} digito3={digitothree} digito4={digitofour} digito5={digitofive} digito6={digitosix}/>, document.querySelector("#app"));
}, 1000)
