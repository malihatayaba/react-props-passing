
import { RouterProvider } from 'react-router-dom'
import './App.css'
import Mainroutes from './Routes/Mainroutes'

function App() {
   

  return (
    <>
     <RouterProvider router={Mainroutes}/>
    </>
  )
}

export default App
