import React, { lazy,Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import About from "./components/About.js";
import Restromenu from "./components/Restaurantmenu.js";
import Contact from "./components/Contactus.js";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import userContext from "./utils/userContext.js";


//chunking
//code splitting
//dynamic bundling
//lazy loading


const styleCard={
  backgroundColor:"lightgrey"
    
};

const Grocery=lazy(()=>import("./components/Grocery.js"));

const AppLayout= ()=>{

    const[userInfo,setUserInfo]=useState();

    useEffect(()=>{

        const data={
            name:"kundrapu naresh",
        };

        setUserInfo(data.name);  

    },[]);


    return (
        
        <div className="app">
            <userContext.Provider value={{loggedInUser:userInfo,setUserInfo}}>
            <Header />
            
            <Outlet/>
            </userContext.Provider>
        </div>
    
    )
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element:<AppLayout />,
        children:[
            {
                path:"/",
                element:<Body/>,
            },
            {
                path: "/about",
                element:<About />,
            },
            {
                path:"/contact",
                element:<Contact/>,
            },
            {
                path:"/restaurants/:resId",
                element:<Restromenu/>,
            },
            {
                path:"grocery",
                element:<Suspense fallback={<h1>Loading....</h1>}><Grocery/></Suspense>,
            },

        ]

    },
   
]);



const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
