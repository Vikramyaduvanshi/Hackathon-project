
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Authprovider } from './context/Authcontext.jsx'
import { BrowserRouter } from 'react-router'
import { Provider } from 'react-redux'
import store from './redux/store.js'
createRoot(document.getElementById('root')).render(

<Provider store={store}>
<Authprovider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
 </Authprovider>
</Provider>
  
)
