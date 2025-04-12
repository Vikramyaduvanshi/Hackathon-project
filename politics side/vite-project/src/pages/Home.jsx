import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchpost } from "../redux/Postreducer"
import "../index.css"

export function Home(){
    let dispatch=useDispatch()
    let data=useSelector((state)=>state.posts.post)
   
useEffect(()=>{
    dispatch(fetchpost())
},[])

    return (
        <>
      <div>

      <h1></h1>
{data.map((u)=>{
return (
    <div className="box">
<h1>Title:{u[1].title}</h1>
<p>Description:{u[1].description
}</p>
    </div>
)
})}


      </div>
        </>
    )
}