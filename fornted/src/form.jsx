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
    },);
    function Handleform(e)
    {
       setusrname(e.target.value)
       
    }

    function Datadle(id)
    {
      const deleteid= id
     fetch(`/api/delete/${deleteid}`,
        {method:"DELETE"})
    }
    
    function Editdata(id)
    {
        const uname="ajaua"
       const fdata={Name:uname}
       const Eid=id 
       fetch(`/api/EditUser/${Eid}`,{
        method:"PUT",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(fdata)
       })
    }

    
    return(
        <div>
         <form onSubmit={Handle}  action="">
          <input type="text" onChange={Handleform}  value={usrname} name="" id="" />
          <input type="submit" value="Login" />

         </form>
         {
            Udata.map((value,index)=>(
                <p>{value.Username} <button onClick={()=>{Datadle(index)}}>Delete</button> <button onClick={()=>{Editdata(index)}}>Edit</button> </p>
            ))
         }
        </div>
    )
}
export default Form;