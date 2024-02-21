import { useState } from 'react'
import './styling/App.css'
import Login from "./components/Login"
import { useSelector } from 'react-redux'
import { Dashboard } from "./components/overview/view/index"
import Navbar from './components/NavBar'
// import SideBar from "./components/SideBar"

function App() {
  const [count, setCount] = useState(0)
  const email = useSelector((state) => state.auth.email);

  return (
    <div className='container'>
      {/* {email && <Navbar />} */}
        {email ? <Dashboard /> : <Login />}
    </div>
  )
}

export default App
