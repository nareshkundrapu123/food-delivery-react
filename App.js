import React from "react";
import ReactDOM from "react-dom/client";
/**
 * Header
 * -logo
 * -nav items
 * Body
 * -Search 
 * -RestaurantContainer
 *  -RestaurantCard
 *      -Image
 *      -Name of res,Star rating,cusines, 
 * Footer
 * -copyright
 * -Links
 * -Address
 * -Contact
 * 
 */

const Header=()=>{
    return(
        <div className="header">
            <div className="logo-container">
            <img className="logo" src= "https://images.all-free-download.com/images/graphiclarge/food_delivery_banner_man_riding_scooter_sketch_6854661.jpg"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Name</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

const styleCard={
  backgroundColor:"lightgrey"
    
};

const RestaurantCard =()=>{

    return(
      <div className="res-card" style={styleCard}>
        <img
        className="res-logo"
        alt="res-logo" 
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/5/9/e882bf86-5a9d-4515-b139-d19a155778e7_647286.JPG"/>
        <h3>Meghana Foods</h3>
        <h4>Biryani, North Indian, Asian</h4>
        <h4>4.3 starts</h4>
        <h4>38 minutes</h4>
      </div>  
    ); 

};


const Body =()=>{

return(
    <div className="body">
    <div className="search">Search</div>
    <div className="res-container"> 
            <RestaurantCard/>  
            <RestaurantCard/>  
            <RestaurantCard/>  
            <RestaurantCard/>  
            <RestaurantCard/> 
            <RestaurantCard/>  
            <RestaurantCard/>  
            <RestaurantCard/>  
            <RestaurantCard/>  
            <RestaurantCard/> 
            <RestaurantCard/>  
            <RestaurantCard/>  
            <RestaurantCard/>  
            <RestaurantCard/>  
            <RestaurantCard/>    

    </div>
    </div>

);

};

const AppLayout= ()=>{
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
};




const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);