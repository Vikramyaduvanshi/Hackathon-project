import { useContext } from "react"
import { Feedbackcontext } from "../context/Authcontext"
import "../index.css"
export function Feedbacktracing (){
let feedback=useContext(Feedbackcontext)
console.log("feedback page",feedback)
    return (
        <>
        
        <h1 style={{textAlign:"center",margin:"2rem"}}>Public Fedback</h1>

        <div className="feedbacks">
            {feedback.map((u)=>{

                let [id,{feedbackcontent,name}]=u
                return (
                    <div className="feedback" key={id}>
                        <h4>Name: {name}</h4>
                        <p>{feedbackcontent}</p>
                    </div>
                )
            })}
        </div>




        </>
    )
}