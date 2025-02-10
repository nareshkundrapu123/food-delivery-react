import RestaurantCard from "./RestaurantCard";

import resObj from "../utils/mockData";
import { useEffect, useState } from "react";
import resObj from "../utils/mockData";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";

const Body =()=>{

  //State Variable - Super powerful variable

  //Normal JS Variable
  const [listofresto,Setlistofresto]=useState([]);
  const [filterresto,Setfilterresto]=useState([]);
  const [searchText,SetSearchtext]=useState("");
  
  

  useEffect(()=>{
    //console.log("useEffect called");
    fetchData();
  }, []);

  const fetchData=async()=>{
  const data=await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.68282&lng=83.24323&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  );
  const son=await data.json();
  //console.log(son.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  
 Setlistofresto(son.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
 Setfilterresto(son.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

  };
  //console.log("body rendered");
  //console.log(listofresto.length);
  if(listofresto.length === 0){
   // console.log(listofresto.length);
    return <Shimmer />;
  }
  


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
    return(
        <div className="body">
        <div className="filter">
        <div className="searching">
            <input type="test" 
            className="search-box"
            value={searchText}
            onChange={(e)=>{
            SetSearchtext(e.target.value);
          }}/>

          <button onClick={()=>{
           // console.log(searchText);

           const filterRest1= listofresto.filter(
            (res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase())

             );
             Setfilterresto(filterRest1);
          }}>
            Search
          </button>
        </div>
          
          <button className="filter-btn" onClick={()=>{
         const filterresto= listofresto.filter((res)=>
              res.info.avgRating >=4
            );
            Setlistofresto(filterresto); 
          }}>Top Rated restuarant</button>
        </div>
        {/* <div className="refresh">
          <button className="refresh-btn" onClick={()=>{
            refrestlist=listofresto;
            refrestolist(refrestlist);

          }}>Refresh

          </button>
        </div> */}
        <div className="res-container"> 
    
            {
                filterresto.map((naresh)=>(
           <Link key={naresh.info.id} to={"/restaurants/"+naresh.info.id} > <RestaurantCard 
              
              resData={naresh}/></Link>
            
            )
                )
            }
          
                
                 
    
        </div>
        </div>
    
    );
    
    };
    
    export default Body;