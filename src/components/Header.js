import { LOGO_URL } from "../utils/constants";
import { useState,useEffect } from "react";
const Header=()=>{
    const [btnNameReact, setBtnName]=useState("login");

    useEffect(()=>{
        console.log("useEffect called");
      },[]);

    return(
       
        <div className="header">
            <div className="logo-container">
            <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Name</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                    <button 
                    className="login"
                    onClick={()=>{
                        btnNameReact==="login" ?setBtnName("logout"):setBtnName("login");
                    }}
                    >
                        {btnNameReact}

                    </button>
                </ul>
            </div>
        </div>
    );
  };

  export default Header;