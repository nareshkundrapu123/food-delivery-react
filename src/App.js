import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import About from "./components/About.js";
import Restromenu from "./components/Restaurantmenu.js";
import Contact from "./components/Contactus.js";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";


const styleCard={
  backgroundColor:"lightgrey"
    
};

const AppLayout= ()=>{
    return (
        <div className="app">
            <Header />
            <Outlet/>
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

        ]

    },
   
]);



const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
