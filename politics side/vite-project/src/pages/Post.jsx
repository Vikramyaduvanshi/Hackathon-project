import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router";
import "../index.css"
export function Post(){
let [data,setdata]=useState({title:"",description:""})
let navigate=useNavigate()
function handlechange(e){
    let {name,value}=e.target
setdata({...data,[name]:value})
}

async function handlesubmit(e){
e.preventDefault();
let res=  await axios.post("https://myfirstproject-f8855-default-rtdb.firebaseio.com/post.json",data)
navigate("/")
}
    return (

        <>
        <div className="post">

<form onSubmit={handlesubmit}>
    <input onChange={handlechange} type="text" name="title" id="title"  value={data.title} placeholder="Title"/>
    <textarea onChange={handlechange} name="description" id="" cols="50" rows="10" value={data.description} placeholder="Enter Descriptionn"></textarea >
    <input type="submit" value="Create " />
</form>

        </div>
        
        </>
    )
}