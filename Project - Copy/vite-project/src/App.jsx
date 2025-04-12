
import './App.css'
import { Route,Routes } from 'react-router'
import { Login } from './pages/Login'
import { Logout } from './pages/Register'
import { Privateroutes } from './routes/Privateroutes'
import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
import { Notifications } from './pages/Notification'
import { Profile } from './pages/Profile'
import { Problemstracking } from './pages/Problemtracking'
import { Feedbacktracing } from './pages/Feedbacktracking'
import { Post } from './pages/Post'

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
  <Route path='/Problemstracking' element={<Problemstracking/>}/>
  <Route path='/feedback'  element={<Feedbacktracing/>}/>
  <Route path='/post'  element={<Post/>}/>
  <Route path='/notification'  element={<Notifications/>}/>
 <Route path="/profile" element={<Profile/>}/>

</Routes>


</Privateroutes>}/>

  </Routes>


    </>
  )
}

export default App
