import { useEffect,useState } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import useRestaurant from "../utils/useRestaurant"
import Restaurantcategory from "./Restaurantcategory";
const Restromenu=()=>{

   

    const {resId}= useParams();

const resmenuinfo=useRestaurant(resId);

const [showIndex, setShowindex]=useState(null);
if(resmenuinfo===null)
    return<Shimmer/>;
const { name,costForTwoMessage,cuisines
        
}= resmenuinfo?.cards[2].card?.card?.info;

const {itemCards}=resmenuinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
console.log("menu list", itemCards);
//console.log(resmenuinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
const Categories=resmenuinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
console.log("accordian",Categories);
return(<div className="text-center">
         <h1 className="font-bold my-5 text-2xl">{name}</h1>
         <p className="font-bold text-lg">
            {cuisines.join(", ")} - {costForTwoMessage}
            </p>
            {/* categories accordions*/}
            <div className="">
           {Categories.map((category, index)=><Restaurantcategory 
           key={category?.card?.card?.id}
            data={category?.card?.card}
            Showitems={index===showIndex?true:false}
            setShowindex={()=>setShowindex(index)}
            />)} 
           </div>
    </div>
    );
};
export default Restromenu;