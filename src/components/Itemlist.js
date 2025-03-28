import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItems } from "../utils/cartSlice";
const Itemlist=({items})=>{
    console.log(items);

    const dispatch=useDispatch();

    const handleAdditem=(item)=>{
        //dispatch action
        dispatch(addItems(item)); 
    }

        return<div>
            {items.map((item)=>(
                <div 
                data-testid="fooditems"
                key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
                 
                  <div className="w-9/12">
                    <div className="p-2">
                        <span>{item.card.info.name}</span>
                        <span> - ₹{item.card.info.price/100}</span>
                    </div>  
                    <p>
                        {item.card.info.description}
                    </p>
                </div>
                <div className="w-3/12 p-4">
                <div className="absolute">   
                <button className="p-1 mx-15 rounded-lg bg-black text-white shadow-lg"
                onClick={()=>handleAdditem(item)}>Add +</button>
                </div>
                <img src={CDN_URL+item.card.info.imageId} />
                </div>
                </div>
            ))}
        </div>
};
export default Itemlist;