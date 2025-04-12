import { useContext, useState } from "react"
import { Authcontex } from "../context/Authcontext"
import "../App.css"

export function Userfeedback(){
    let [feedbackcontent,setfeedbackcontent]=useState("")
let {user}=useContext(Authcontex)
let [id,{}]=user
async function handlesubmit(e){
e.preventDefault();
let obj={
    method:"PATCH",
    body:JSON.stringify({feedbackcontent})
}

let res= await fetch(`https://userauth-bbbb0-default-rtdb.firebaseio.com/users/${id}.json`,obj)
let res1= await res.json();
alert("Your Feedback has submited, we will work on it")
setfeedbackcontent("")

}
function handlechange(e){
    setfeedbackcontent(e.target.value)
}
    return (
        <>
       <h1 style={{textAlign:"center"}}>Feedback</h1>
        <div className="feeback form">
        <h4>Give feedback and suggestion , we will definitely improve on it </h4>
            <form className="feedback" onSubmit={handlesubmit}>
                <textarea onChange={handlechange} name="textarea" id="textarea" cols="30" rows="10" value={feedbackcontent}></textarea>
                <input type="submit" value="Submit" />

            </form>
        </div>


        </>
    )
}

