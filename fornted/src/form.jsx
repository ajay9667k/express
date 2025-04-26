import { useEffect, useState } from "react";

const Form=()=>{
    const[usrname,setusrname]=useState("")
    const [Udata,setUdata]=useState([])
  
    function Handle(e){
        e.preventDefault()
        const usrdata={Username:usrname}
        
            fetch("/api/userdata",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(usrdata)
            })
         
    }
  
    useEffect(()=>{
        fetch("/api/data").then((res)=>{
            return res.json()
       }).then((result)=>{
            setUdata(result)
       })
    },[]);
    function Handleform(e)
    {
       setusrname(e.target.value)
    }

    
    return(
        <div>
         <form onSubmit={Handle}  action="">
          <input type="text" onChange={Handleform}  value={usrname} name="" id="" />
          <input type="submit" value="Login" />

         </form>
         {
            Udata.map((value)=>{
            <p>{value.Username}</p>
            })
         }
        </div>
    )
}
export default Form;