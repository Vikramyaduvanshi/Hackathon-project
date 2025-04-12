import { useContext, useState } from "react"
import { Authcontex } from "../context/Authcontext"
import "../App.css"

export function CreateProblem(){
    let [problemcontent,setproblem]=useState("")
let {user}=useContext(Authcontex)
let [id,{}]=user
async function handlesubmit(e){
e.preventDefault();
let obj={
    method:"PATCH",
    body:JSON.stringify({problem:true,problemcontent})
}

let res= await fetch(`https://userauth-bbbb0-default-rtdb.firebaseio.com/users/${id}.json`,obj)
let res1= await res.json();
console.log(res1)

}
function handlechange(e){
    setproblem(e.target.value)
}
    return (
        <>
       
        <div>
        <h1>Write Your Problem</h1>
            <form onSubmit={handlesubmit}>
                <textarea onChange={handlechange} name="textarea" id="textarea" cols="30" rows="10" value={problemcontent}></textarea>
                <input type="submit" value="Submit" />

            </form>
        </div>


        </>
    )
}

