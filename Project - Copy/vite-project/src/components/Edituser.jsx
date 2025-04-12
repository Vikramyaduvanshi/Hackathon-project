import { useEffect, useState } from "react";
import "../App.css"
export function Edituser({name,email,password,number,setedit,edit,id}){
let [data,setdata]=useState({name:"",email:"",password:"",number:""})

useEffect(()=>{
    setdata({...data, email,name,password,number})
},[])
function handlechange(e){
let {name,value}=e.target;
setdata({...data,[name]:value})
}

async function handlesubmit(e){
    e.preventDefault()
    let obj={
        method:"PATCH",
        body:JSON.stringify(data)
    }
    try {
        let res = await fetch(`https://userauth-bbbb0-default-rtdb.firebaseio.com/users/${id}.json`, obj);
        let responseData = await res.json();
        console.log(responseData); 

        setedit(!edit);
    } catch (error) {
        console.error("Error while updating:", error);
    }
}
return (
    <>


    <div className="profileeditform">

        <form onSubmit={handlesubmit} >

<input onChange={handlechange} type="text" name="name" id="name" value={data.name} />
<input onChange={handlechange} type="email" name="email" id="email" value={data.email} />
<input onChange={handlechange} type="password" name="password" id="password" value={data.password} />
<input onChange={handlechange} type="tel" name="number" id="number" value={data.number} />
<input type="submit" value="Save" />
        </form>
    </div>
    
    
    </>
)


}