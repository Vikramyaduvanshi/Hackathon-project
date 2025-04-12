import { useContext, useState } from "react"
import { Authcontex } from "../context/Authcontext";
import { useNavigate } from "react-router"
import "../index.css"
export function Logout(){
    let navigate=useNavigate()
let {register}=useContext(Authcontex)
let [data,setdata]=useState({})

function handlchange(e){
let {value,name}=e.target;
setdata({...data,[name]:value})
}

async function handlesubmit(e){
e.preventDefault()
let res= await register(data)

if(res.success===true){
navigate("/login")
}
}


    return (
        <>
        <div className="registir">
<form  onSubmit={handlesubmit}>
<input onChange={handlchange} type="text" name="name" id="name" placeholder="Enter your name" />
<input onChange={handlchange} type="email" name="email" id="email" placeholder="enter Your email" />
<input onChange={handlchange} type="tel" name="number" id="number" placeholder="Enter Your Number"/>
<input onChange={handlchange} type="text" name="password" id="password" placeholder="enter you password" />
<input type="submit" value="Register" />
</form>
        </div>
        
        </>
    )
}