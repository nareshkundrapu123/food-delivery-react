
const Contact=()=>{
    return(
   <div>
    <h1 className="font-bold text-3xl p-4 m-4">
        Contact us
    </h1>
    <form>
        <input type="text" className="border border-black p-2 m-2" placeholder="username"/>
        <input type="text" className="border border-black p-2 m-2" placeholder="password"/>
        <button className="border border-black p-2 m-2 rounded-lg">submit</button>
    </form>
   </div> 
    )
};

export default Contact;
  