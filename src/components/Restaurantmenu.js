import { useEffect,useState } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
const Restromenu=()=>{

    const[resmenuinfo,setmenuinfo]=useState(null);

    const {resId}= useParams();

    
useEffect(()=>{
    fetchMenu();
    // console.log("function");
},[]);
const fetchMenu=async()=>{
    const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.68282&lng=83.24323&restaurantId="+
    resId+
    "&catalog_qa=undefined&submitAction=ENTER"
);   
    const json=await data.json();
    // console.log("menu1");
    console.log("menu",json);
    setmenuinfo(json.data);
}


if(resmenuinfo===null)
    return<Shimmer/>;
const { name,costForTwoMessage,cuisines
        
}= resmenuinfo?.cards[2].card?.card?.info;

const {itemCards}=resmenuinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
console.log(itemCards);

return(<div className="menu">
         <h1>{name}</h1>
         <h3>{cuisines.join(", ")} - {costForTwoMessage}</h3>
         {/* <h3></h3>
         <h3>{areaName}, {city}</h3>
         <h3></h3> */}
         
         {/* <h3>{resmenuinfo?.cards[2].card?.card?.info?.areaName}</h3>
         <h3>{resmenuinfo?.cards[2].card?.card?.info?.city}</h3>
         <h3>{resmenuinfo?.cards[2].card?.card?.info?.costForTwoMessage}</h3> 
         <h3>{resmenuinfo?.cards[2].card?.card?.info?.cuisines}</h3> */}
         <h2>Menu</h2>
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