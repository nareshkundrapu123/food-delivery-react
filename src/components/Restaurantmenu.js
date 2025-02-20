import { useEffect,useState } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import useRestaurant from "../utils/useRestaurant"
const Restromenu=()=>{

   // const[resmenuinfo,setmenuinfo]=useState(null);

    const {resId}= useParams();

const resmenuinfo=useRestaurant(resId);


if(resmenuinfo===null)
    return<Shimmer/>;
const { name,costForTwoMessage,cuisines
        
}= resmenuinfo?.cards[2].card?.card?.info;

const {itemCards}=resmenuinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
console.log(itemCards);

return(<div className="menu">
         <h1 className="font-bold">{name}</h1>
         <h3>{cuisines.join(", ")} - {costForTwoMessage}</h3>
         <h2 className="font-bold">Menu</h2>
         <ul>
            {itemCards.map(items=>(
                <li key={items.card.info.id}>{items.card.info.name} - {" Rs."}{items.card.info.price/100}</li>
            ))}
            {/* <li>{itemCards[0].card.info.name}</li>
            <li>{itemCards[1].card.info.name}</li>
            <li>{itemCards[2].card.info.name}</li> */}
           
         </ul>
    </div>
    );
};
export default Restromenu;