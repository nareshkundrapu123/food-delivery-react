import { CDN_URL } from "../utils/constants";

const styleCard={
    backgroundColor:"lightgrey"
      
  }; 

const RestaurantCard =(props)=>{
    const{resData}=props;
    const{cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      costForTwo,
      sla
      //resData?.data?.cards?.card.card.info
    }=resData?.info;
 //  console.log(props);
    return(
      <div className="m-4 p-4 w-[200px] rounded-lg bg-gray-300 hover:bg-gray-500" >
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
        
      </div>  
    ); 

};

//Higher order components

//input -RestaurantCard => RestaurantCardpromoted

export const withfreedelivery=(RestaurantCard)=>{
  return()=>{
    return(
      <div>
        <label>Free delivery</label>
        <RestaurantCard/>
      </div>
    );
  };
};


export default RestaurantCard;