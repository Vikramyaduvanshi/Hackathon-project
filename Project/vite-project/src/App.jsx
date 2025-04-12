
import './App.css'
import { Route,Routes } from 'react-router'
import { Login } from './pages/Login'
import { Logout } from './pages/Register'
import { Privateroutes } from './routes/Privateroutes'
import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
import { Userproblem } from './pages/userproblem'

import { Communityvoting } from './pages/Communityvoting'
import { Notifications } from './pages/Notification'
import { Userfeedback } from './pages/Userfeedback'
import { Profile } from './pages/Profile'

function App() {


  return (
    <>
  <Routes>
<Route path='/login' element={<Login/>}/>
<Route path='/register' element={<Logout/>}/>


<Route path='/*' element={<Privateroutes>
<Navbar/>
<Routes>

  <Route path='/' element={<Home/>}/>
  <Route path='/userproblems' element={<Userproblem/>}/>
  <Route path='/notification' element={<Notifications/>}/>
  <Route path="/userfeedback" element={<Userfeedback/>}/> 
  <Route path='/community' element={<Communityvoting/>}/>
 <Route path="/profile" element={<Profile/>}/>

</Routes>


</Privateroutes>}/>

  </Routes>


    </>
  )
}

export default App
