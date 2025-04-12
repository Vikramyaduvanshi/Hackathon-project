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
            <NavLink to="/userproblems">Problems</NavLink>
            <NavLink to="/notification">Notification</NavLink>
            <NavLink to="/userfeedback">FeedBack form</NavLink>
            
            {community && <NavLink to="/community">Community Voting</NavLink>}
        </ul>
<input type="text" name="serach" id="search" />
<NavLink to="/profile">Profile</NavLink>
        </nav>
        
        </>
    )
}