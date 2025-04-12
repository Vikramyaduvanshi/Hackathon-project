import { useContext } from "react"
import { Problemcontext } from "../context/Authcontext"
import { useState } from "react"
import { Problemstatus } from "../components/Problemstatus"

export function Problemstracking(){
let problem=useContext(Problemcontext)
let [problemid,setproblemid]=useState(null)
console.log("problem pag")

return (
    <>
    
    <h1 style={{textAlign:"center",margin:"2rem"}}>Public Problems</h1>

    <div className="feedbacks">
        {problem.map((u)=>{

            let [id,{email,name,problem,problemcontent}]=u
            return (
                <div className="feedback" key={id}>
                    <h4>Name: {name}</h4>
                    <p>{email}</p>
                    <p>{problemcontent}</p>
                    {problemid==id && <Problemstatus id={id} setproblemid={setproblemid} problemcontent={problemcontent}/>}
                    <button onClick={()=>setproblemid(problemid===id? null :id)}>{problemid===id ? "Undo" : "Update status"}</button>
                </div>
            )
        })}
    </div>




    </>
)
}