import { StrictMode,useState } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

import './css/root.css'

import { UserContext,LikesContext,LikesDBContext, LikesDBLoadingContext } from './Context.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Ideas from './pages/Ideas.jsx'
import Likes from './pages/Likes.jsx'
import CreateNew from './pages/CreateNew.jsx'
import Profile from './pages/Profile.jsx'
import Search from './pages/Search.jsx'



function App(){
  
  const [user,setUser] = useState("")
  const [likes,setLikes] = useState([])
  const [likesDB,setLikesDB] = useState([])
  const [likesDBLoading,setLikesDBLoading] = useState([])
 

  const myRouter = createBrowserRouter([
    {
      path : "/",
      element : <Home />
    },
    {
      path : "/login",
      element : <Login />
    },
    {
      path : "/ideas",
      element : <Ideas />
    },
    {
      path : "/likes",
      element : <Likes />
    },
    {
      path : "/create-new",
      element : <CreateNew />
    },
    {
      path : "/profile",
      element : <Profile />
    },
    {
      path : "/search",
      element : <Search />
    }
  ])

  return (
    <StrictMode>
      <UserContext.Provider value={{user,setUser}}>
        <LikesDBLoadingContext.Provider value={{likesDBLoading,setLikesDBLoading}}>
          <LikesDBContext.Provider value={{likesDB,setLikesDB}}>
            <LikesContext.Provider value={{likes,setLikes}}>
              <RouterProvider router={myRouter}/>
            </LikesContext.Provider>
          </LikesDBContext.Provider>
        </LikesDBLoadingContext.Provider>
      </UserContext.Provider>
    </StrictMode>
  )

}


createRoot(document.getElementById('root')).render(<App/>)
