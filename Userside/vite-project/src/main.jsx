
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Authprovider } from './context/Authcontext.jsx'
import { BrowserRouter } from 'react-router'
createRoot(document.getElementById('root')).render(

 <Authprovider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
 </Authprovider>
  
)
