// run by command----> npm run dev
import './App.css'
import Navbar from './components/Navbar'
import UserDetails from './components/UserDetails'

function App() {
 
  return (
    <>
    <div className="fullcontent">
      <Navbar/>
      <UserDetails/>
     </div>
    </>
  )
}

export default App
