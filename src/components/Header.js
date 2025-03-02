import { LOGO_URL } from "../utils/constants";
import { useState,useEffect,useContext } from "react";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlinestatus";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header=()=>{
    const [btnNameReact, setBtnName]=useState("login");
    const onlinestatus=useOnlinestatus();

    const {loggedInUser}=useContext(userContext);

    const cart=useSelector((stor)=>stor.cart.items);

    console.log(cart);



    useEffect(()=>{
        console.log("useEffect called");
      },[]);

    return(
       
        <div className="flex flex-col md:flex-row justify-between bg-orange-200 shadow-lg">
            <div className="logo-container">
            <img className="w-30 rounded-lg" src={LOGO_URL}/>
            </div>
            <div className="flex items-center">
                <ul className="flex p-5 m-5 font-bold">
                    <li className="px-2 hover:font-black rounded-lg">Online Status:{onlinestatus ?"✅": "🚫" }</li>
                    <li className="px-2  hover:font-black rounded-lg"><Link to="/">Home</Link></li>
                    <li className="px-2 hover:font-black rounded-lg"><Link to="/about">Aboutus</Link></li>
                    <li className="px-2 hover:font-black rounded-lg"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-2 hover:font-black rounded-lg"><Link to="/contact">Contactus</Link></li>
                    <li className="px-2 hover:font-black font-bold rounded-lg"><Link to="/cart">Cart -items{cart.length}</Link></li>
                    
 
                    <button 
                    className="login hover:font-black rounded-lg"
                    onClick={()=>{
                        btnNameReact==="login" ?setBtnName("logout"):setBtnName("login");
                    }}
                    >
                        {btnNameReact}

                    </button>

                    <li className="px-2 hover:font-black rounded-lg">{loggedInUser}</li>

                </ul>
            </div>
        </div>
    );
  };

  export default Header;