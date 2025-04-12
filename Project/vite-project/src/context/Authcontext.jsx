import { createContext, useCallback, useEffect, useState } from "react";

export let Authcontex=createContext();

export function Authprovider({children}){
let [user,setuser]=useState(null)
let [community,setcommunity]=useState(null)
let login= useCallback(async ({email,password})=>{

try{
    let data= await fetch("https://userauth-bbbb0-default-rtdb.firebaseio.com/users.json")

let res = Object.entries(await data.json())

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
<Authcontex.Provider value={{login,user,community,logout,register}}>
    {children}
</Authcontex.Provider>

)

}

