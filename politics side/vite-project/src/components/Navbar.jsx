import {NavLink} from "react-router"
import { Authcontex } from "../context/Authcontext"
import { useContext } from "react"

import "../App.css"

export function Navbar(){
   let {community}=useContext(Authcontex)
   
    return (
        <>
        <nav className="navbar">
        <ul>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/Problemstracking">User_Problems</NavLink>
            <NavLink to="/feedback">public_Feedback</NavLink>
            <NavLink to="/post">Anouncement</NavLink>
            <NavLink to="/notification">Notification</NavLink>
        
        </ul>
<input type="text" name="serach" id="search" />
<NavLink to="/profile">Profile</NavLink>
        </nav>
        
        </>
    )
}