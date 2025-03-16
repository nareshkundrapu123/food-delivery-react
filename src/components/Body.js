import RestaurantCard,{withfreedelivery} from "./RestaurantCard";

import { useContext, useEffect, useState } from "react";
import resObj from "../utils/mockData";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlinestatus";
import { restaurant1} from "../utils/constants";
import userContext from "../utils/userContext";
const Body =()=>{

  //State Variable - Super powerful variable

  //Normal JS Variable
  const [listofresto,Setlistofresto]=useState([]);
  const [filterresto,Setfilterresto]=useState([]);
  const [searchText,SetSearchtext]=useState("");
  
  const{loggedInUser,setUserInfo}=useContext(userContext);
  console.log("bodyrender",listofresto); 

  const Nearest=withfreedelivery(RestaurantCard);
  useEffect(()=>{
   fetchData();
  }, []);

  const fetchData=async()=>{
  const data=await fetch(restaurant1);
  //const data1=await fetch(restaurant1);
  const son=await data.json();
  //const son1=await data1.json();
  //console.log(son.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
 
 const fecteddata=son.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
 console.log(fecteddata);
  //console.log("list1",son1);
 // const {menulist}=son1.data;
   //{menulist.map(item=><li>{item.card.card.info}</li>)}
 //  Setlistofresto(son1.data?.cards[4].card.card.info);
 //  console.log(son1.data?.cards[4].card.card.info);
     Setlistofresto(son.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
     Setfilterresto(son.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

  };
  //console.log("body rendered");
  //console.log(listofresto.length);

  const onlinestatus=useOnlinestatus();
  if(onlinestatus=== false)
  return(
          <h1>
            Check your internet connection
          </h1>);

  return listofresto.length === 0 ?
   // console.log(listofresto.length);
    (
      <Shimmer/>
    )
  


//   let listofresto=[

//     {
//       "info":{
//       "id": "155268",
//       "name": "Pizza Hut",
//       "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/0b7ba7a1-f341-44f3-b54c-e221f5fdcf5f_155268.jpg",
//       "locality": "Kondapur",
//       "areaName": "Kondapur",
//       "costForTwo": "₹350 for two",
//       "cuisines": [
//         "Pizzas"
//       ],
//       "avgRating": 4.0,

//     },
//   },
//   {
//     "info":{
//     "id": "155269",
//     "name": "Domino's",
//     "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/0b7ba7a1-f341-44f3-b54c-e221f5fdcf5f_155268.jpg",
//     "locality": "Kondapur",
//     "areaName": "Kondapur",
//     "costForTwo": "₹350 for two",
//     "cuisines": [
//       "Pizzas"
//     ],
//     "avgRating": 3.5,

//   },
// },
// {
//   "info":{
//   "id": "155270",
//   "name": "MCD",
//   "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/0b7ba7a1-f341-44f3-b54c-e221f5fdcf5f_155268.jpg",
//   "locality": "Kondapur",
//   "areaName": "Kondapur",
//   "costForTwo": "₹350 for two",
//   "cuisines": [
//     "Pizzas"
//   ],
//   "avgRating": 4.1,

// },
// }
// ];
    :(
        <div className="body" >
        <div className="filter flex">
        <div className="searching m-2 p-2">
            <input type="test" 
            data-testId="searchInput"
            className="border border-solid border-black rounded-lg"
            value={searchText}
            onChange={(e)=>{
            SetSearchtext(e.target.value);
          }}/>

          <button className="px-2 py-1 m-1 bg-sky-200 rounded-lg hover:bg-sky-300" onClick={()=>{
           // console.log(searchText);

           const filterRest1= listofresto.filter(
            (res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase())

             );
             Setfilterresto(filterRest1);
          }}>
            Search
          </button>
        </div>
          
          <button className="filter-btn px-2 py-1 m-5 bg-gray-300 rounded-lg hover:bg-gray-400" onClick={()=>{
         const filterresto= listofresto.filter((res)=>
              res.info.avgRating >=4
            );
            Setlistofresto(filterresto); 
          }}>Top Rated restuarant</button>




<label className="flex m-5">username :</label><input type="text" className="border border-solid m-2 p-0 border-black rounded-lg" 
value={loggedInUser} onChange={(e)=>setUserInfo(e.target.value)}
/>

        </div>

       
        {/* <div className="refresh">
          <button className="refresh-btn" onClick={()=>{
            refrestlist=listofresto;
            refrestolist(refrestlist);

          }}>Refresh

          </button>
        </div> */}
        <div className="flex flex-wrap"> 
    
            {
                filterresto.map((naresh)=>(
           <Link 
           key={naresh.info.id} 
           to={"/restaurants/"+naresh.info.id} >
             <RestaurantCard resData={naresh}/>
             {naresh.info.locality==="Gajuwaka" ?(<Nearest resData={naresh}/>):(
              <RestaurantCard resData={naresh}/>
             )}
             
             </Link>
            
            )
                )
            }
          
                
                 
    
        </div>
        </div>
    
    );
    
    };
    
    export default Body;