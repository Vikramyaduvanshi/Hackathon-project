import { useContext } from "react";
import { Navigate } from "react-router";
import { Authcontex } from "../context/Authcontext";

export function  Privateroutes({children}){
let {user}=useContext(Authcontex)
return user ? children :<Navigate to="/login" />
}
  