import React from "react";
import { Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';



const RegTab = ()=>{
    return(
        <div>
        <Outlet/>
        </div>
    )
}

export default RegTab;