import { useDispatch, useSelector } from "react-redux";
import Itemlist from "./Itemlist";
import { clearCart } from "../utils/cartSlice";

const Cart=()=>{

    const cartItems=useSelector((store)=>store.cart.items);

    const dispatch1 =useDispatch();

    const handleClear=()=>{

            dispatch1(clearCart());

    }
    
    return <div className="text-center m-5 p-5">
        <div className="w-6/12 m-auto">  

            <button className="p-2 m-2 bg-black text-white rounded-lg" onClick={handleClear}>
                clear Cart
            </button>

            {cartItems.length ===0 && <h1>Cart is empty... Add items to the cart!</h1>}

             <Itemlist items={cartItems}/>
             </div>

    </div>;
};

export default Cart;