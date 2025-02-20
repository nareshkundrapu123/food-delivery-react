import { useState } from "react";

const User=(props)=>{
    const [count]=useState(1);
    return(
        <div className="user-card">
           <h2>name: {props.name}</h2>
            <h3>count:{count}</h3>
           <h3>Location: Vizag</h3>
           <h4>contact: nareshlesnar11288@gmail.com</h4> 
        </div>
    );
};

export default User;