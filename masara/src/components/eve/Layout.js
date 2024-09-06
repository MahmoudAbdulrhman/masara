import React from "react";
import { Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';



const Events = ()=>{
    return(
        <div>
        <Outlet/>
        </div>
    )
}

export default Events;