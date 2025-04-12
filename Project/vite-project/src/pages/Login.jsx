import { useContext, useState } from "react"
import { Authcontex } from "../context/Authcontext"
import { useNavigate } from "react-router"
import "../App.css"
 export function Login(){
   
    let navigate=useNavigate()
let [data,setdata]=useState({email:"",password:""})
let {login}=useContext(Authcontex)

function handlechange(e){
let {value,name}=e.target
setdata({...data,[name]:value})
 }

async function handlesubmit(e){
e.preventDefault();

let res= await login(data)
console.log(res)
if(res.succssess==true){
navigate("/")
}else{
    alert(res.message)
}
}

return (
    <>
    <div  className="login">
    <h1 style={{margin:"2rem"}}>Login</h1>
<form onSubmit={handlesubmit} >

<input onChange={handlechange} type="email" name="email" id="email" value={data.email}  placeholder="Enter Your Email"/>
<input onChange={handlechange} type="password" name="password" id="password" value={data.password} placeholder="Enter Your Password"/>
<input type="submit" value="Submit" />
</form>


<button className="register" onClick={()=>navigate("/register")}>Register</button>
    </div>
    </>
)

}