import RestaurantCard from "./RestaurantCard";

import resObj from "../utils/mockData";
import { useEffect, useState } from "react";
import resObj from "../utils/mockData";


const Body =()=>{

  //State Variable - Super powerful variable

  //Normal JS Variable
  let[listofresto,Setlistofresto]=useState(resObj);
  
  

  useEffect(()=>{
    console.log("useEffect called");
    fetchData();
  },[]);

  const fetchData=async()=>{
    try{
    const data= await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4543771&lng=78.3815201&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
    const json =await data.json();
    console.log(json);
   // Setlistofresto(json.data.cards.card);
    console.log("fetched perfectly");
    }catch(error){
      console.error("error fetching data :",error);
    }
  };
  console.log("body rendered");
  


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
          <button className="filter-btn" onClick={()=>{
           filterresto= listofresto.filter((res)=>
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
              listofresto.map((naresh)=>(
              <RestaurantCard 
              key={naresh.info.id}
              resData={naresh}/>
            )
                )
            }
          
                
                 
    
        </div>
        </div>
    
    );
    
    };
    
    export default Body;