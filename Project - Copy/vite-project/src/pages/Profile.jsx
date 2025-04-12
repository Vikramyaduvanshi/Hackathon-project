import { useContext, useState } from "react"
import { Authcontex } from "../context/Authcontext"
import { Edituser } from "../components/Edituser"

export function Profile(){
let {user,logout}=useContext(Authcontex)
let [edit,setedit]=useState(false)
let [id,{name,email,password,number}]=user

   return  (

<>


<div className="profile"  >

<div>

<div className="insidep" >
<h3>Name:{name}</h3>
<p>Email:{email}</p>
<p>Password:{password}</p>
<p>Number:{number}</p>
</div>
{edit && <Edituser name={name} email={email} password={password} number={number} setedit={setedit} edit={edit} id={id}/>}
<button onClick={()=>setedit(!edit)}>{edit ? "Cancel" :"Edit"}</button>

</div>

</div>

<div className="logout"><button  onClick={()=>logout()}>Logout</button></div>

</>



    )
}