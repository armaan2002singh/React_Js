import { useEffect, useState } from 'react'
import './App.css'
import {useDispatch} from 'react-redux'
import authService from './appwrite/auth'
// now after having the service then on the loading of the application, useeffect used to check that app is logged in or not. 
import {login, logout} from './store/authSlice'
import { Footer, Header } from './components'
import {Outlet} from 'react-router-dom'

function App() {
  //state loading --> for conditional rendering.
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() =>{
    //ask authservice which is current user.
    authService.getCurrentUser()
    .then((userData) =>{
      if(userData){
        dispatch(login({userData}))
      } else{
        dispatch(logout())
        //console.log("user is log out");
      }
    })
    .finally(() => setLoading(false))
  },[])
  // console.log(import.meta.env.VITE_APP_APPWRITE_URL);
  // console.log();
  
  // it did not work because we made the application of vite but this implementation was of react.
  //so will use VITE_ and DB_PASSWORD = __

  //ACCESS by "import.meta.env"

  // then after having env file. we have settled-up of our appwrite platform 
  //then made a configuration file to make easy to access the varibales.

  return !loading ? (
  <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
    <div className='w-full block'>
      <Header/>
      <main>
      todo will handle it when we will configure the react-router-dom <Outlet/>
      </main>
      <Footer/>
    </div>
  </div>) : null
}

export default App
//environment -> variables 
//always declare in project's root file.
//it always load once. after updates need to restart the file.