import { useState } from "react"
import axios from "axios"
export function Problemstatus({id,problemid,setproblemid, problemcontent}){
let [text,setext]=useState('')

async function completed(){
    problemcontent=text
let res=await axios.patch(`https://userauth-bbbb0-default-rtdb.firebaseio.com/users/${id}.json`,{problemcontent,problem:false})
setproblemid(null)
}


    return (
        <>
        <input  onChange={(e)=>setext(e.target.value)} type="text" name="problemtext" id="problemtext"  value={text} placeholder="Text in response for user"/>
        <button onClick={completed} >Competed</button>
        
        </>
    )
}