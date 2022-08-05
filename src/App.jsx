import {Routes,Route} from 'react-router-dom'
import {Header} from './Auth/Navigation/Header'
import Home from './Home/Home'
import SignIn from './Auth/SignIn/SignIn'
import SignUp from './Auth/SignUp/SignUp'
import ProtectedRoute from './Auth/ProtectedRoutes/ProtectedRoute'
import './App.css'
import Footer from './Auth/Navigation/Footer'

function App() {
  
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route element={<ProtectedRoute/>}>
          <Route path={'/'} element={<Home/>}/>
        </Route>
        <Route path={'/signin'} element={<SignIn/>}/>
        <Route path={'/signup'} element={<SignUp/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
