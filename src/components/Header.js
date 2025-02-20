import { LOGO_URL } from "../utils/constants";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlinestatus";
const Header=()=>{
    const [btnNameReact, setBtnName]=useState("login");
    const onlinestatus=useOnlinestatus();

    useEffect(()=>{
        console.log("useEffect called");
      },[]);

    return(
       
        <div className="flex justify-between bg-pink-200 shadow-lg">
            <div className="logo-container">
            <img className="w-30 rounded-lg" src={LOGO_URL}/>
            </div>
            <div className="flex items-center">
                <ul className="flex p-5 m-5 font-bold">
                    <li className="px-2 hover:bg-pink-400 rounded-lg">Online Status:{onlinestatus ?"✅": "🚫" }</li>
                    <li className="px-2  hover:bg-pink-400 rounded-lg"><Link to="/">Home</Link></li>
                    <li className="px-2  hover:bg-pink-400 rounded-lg"><Link to="/about">Aboutus</Link></li>
                    <li className="px-2  hover:bg-pink-400 rounded-lg"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-2  hover:bg-pink-400 rounded-lg"><Link to="/contact">Contactus</Link></li>
                    <li className="px-2  hover:bg-pink-400 rounded-lg">Cart</li>
                    <button 
                    className="login  hover:bg-pink-400 rounded-lg"
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