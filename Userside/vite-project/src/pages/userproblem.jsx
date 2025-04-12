import { useContext, useState } from "react"
import { Authcontex } from "../context/Authcontext"
import "../App.css"
import { CreateProblem } from "../components/Createproblem"

export function Userproblem(){
let [p,setp]=useState(false)
   let {user}=useContext(Authcontex)
   let [id,{problem,problemcontent}]=user
    return (
        <>
       
        
<div className="userproblem">
{p && <CreateProblem setp={setp} p={p} />}

<button onClick={()=>setp(!p)}>{p ? "Cancel":"Create Problem"}</button>


    <p>Problem Content: {problemcontent}</p>
    <p>Proble Status: <b style={{color:problem ? "red" :"green"}}>{problem ? "Pending":"completed"}</b></p>
   
       



</div>

        </>
    )
}

