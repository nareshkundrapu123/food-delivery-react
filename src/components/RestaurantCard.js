import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import userContext from "../utils/userContext";

const styleCard={
    backgroundColor:"lightgrey"
      
  }; 

const RestaurantCard =(props)=>{
  const {loggedInUser}=useContext(userContext);
    const{resData}=props;

    console.log("mockdata",resData);
    const{cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      costForTwo,
      sla
      //resData?.data?.cards?.card.card.info
    }=resData?.info;
 console.log("restaurants data",props);
    return(
      <div data-testid="resCard" className="m-4 p-4 w-[200px] rounded-lg bg-gray-300 hover:bg-gray-500" >
        <img
        className="rounded-lg"
        alt="res-logo" 
        src={CDN_URL
        +cloudinaryImageId}/>
        
        {/* <img 
        className="res-logo" 
        alt="res-logo" 
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/jsv4qlq9g4ktvvbjebd7"/> */}
        <h3 className="font-bold py-2">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla?.slaString}</h4>
        <h4>user:{loggedInUser}</h4>
      </div>  
    ); 

};

//Higher order components

//input -RestaurantCard => RestaurantCardpromoted

export const withfreedelivery=(RestaurantCard)=>{
  return(props)=>{
    return(
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Nearest Restaurants</label>
        <RestaurantCard {...props}/>
      </div>
    );
  };
};


export default RestaurantCard;