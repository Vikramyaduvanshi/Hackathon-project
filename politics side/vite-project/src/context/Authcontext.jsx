import { createContext, useCallback, useEffect, useState } from "react";

export let Authcontex=createContext();
export let Problemcontext=createContext()
export let Feedbackcontext=createContext()
export function Authprovider({children}){
let [user,setuser]=useState(null)
let [community,setcommunity]=useState(null)
let [problem,setproblem]=useState()
let [feedback,setfeedback]=useState()
let login= useCallback(async ({email,password})=>{

try{
    let data= await fetch("https://userauth-bbbb0-default-rtdb.firebaseio.com/users.json")

let res = Object.entries(await data.json())
let usersproblem=res.filter((u)=>u[1].problem==true)

let publicfeedback=res.filter((u)=>u[1].feedbackcontent)

if(publicfeedback) setfeedback(publicfeedback)
if(usersproblem){
    setproblem(usersproblem)
}
let person=res.find((u)=>u[1].email===email && u[1].password===password)

if(person){

    setuser(person)
    if(person[1].community){
        setcommunity(true)
    }
    return {succssess:true}
}else{
    return {succssess:false,message:"enter currect details"}
}

}catch(e){
return {succssess:false,message:e.message}
}

},[])


let logout=useCallback(()=>{
    setuser(null)
},[])
let register=useCallback( async ({name,email,number,password,problem=false})=>{
let obj={
    METHOD:"POST",
    body:JSON.stringify({name,email,number,password,problem}),
    redirect:"follow"
}


let res= await fetch("https://userauth-bbbb0-default-rtdb.firebaseio.com/users.json",obj)

let data= res.json
console.log(data)

},[])

return (
<Problemcontext.Provider value={problem}>
    <Feedbackcontext.Provider   value={feedback}>
    <Authcontex.Provider value={{login,user,community,logout,register}}>
    {children}
    </Authcontex.Provider>
    </Feedbackcontext.Provider>
</Problemcontext.Provider>

)

}

