import RestaurantCard from "./RestaurantCard";

import resObj from "../utils/mockData";



const Body =()=>{

    return(
        <div className="body">
        <div className="search">Search 
          <input type="text"/>
        </div>
        <div className="res-container"> 
    
            {
              resObj.map((naresh)=>(
              <RestaurantCard 
              key={naresh.info.id}
              resData={naresh}/>
            )
                )
            }
          
                {/* <RestaurantCard 
                resData={resObj[0]}/>  
                <RestaurantCard 
                resData={resObj[1]}/>  
                <RestaurantCard 
                resData={resObj[2]}/>  
                <RestaurantCard 
                resData={resObj[3]}/>  
                <RestaurantCard 
                resData={resObj[4]}/>  
                <RestaurantCard 
                resData={resObj[5]}/>  
                <RestaurantCard 
                resData={resObj[6]}/>  
                <RestaurantCard 
                resData={resObj[7]}/>  
                <RestaurantCard 
                resData={resObj[8]}/>  
                <RestaurantCard 
                resData={resObj[9]}/>  
                <RestaurantCard 
                resData={resObj[10]}/>  
                <RestaurantCard 
                resData={resObj[11]}/>  
                <RestaurantCard 
                resData={resObj[12]}/>  
                <RestaurantCard 
                resData={resObj[13]}/>  
                <RestaurantCard 
                resData={resObj[14]}/>  
                <RestaurantCard 
                resData={resObj[15]}/>  
                <RestaurantCard 
                resData={resObj[16]}/>   
                <RestaurantCard 
                resData={resObj[17]}/>  
                <RestaurantCard 
                resData={resObj[18]}/>  
                <RestaurantCard 
                resData={resObj[19]}/>  
                 */}
                {/* <RestaurantCard 
                resName="KFC"
                cuisine="Burger, French fries, Pizza"
                />   */}
                 
    
        </div>
        </div>
    
    );
    
    };
    
    export default Body;