import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Ideas from './pages/Ideas.jsx'
import Likes from './pages/Likes.jsx'
import CreateNew from './pages/CreateNew.jsx'
import Profile from './pages/Profile.jsx'
import Search from './pages/Search.jsx'

import './css/root.css'

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


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={myRouter}/>
  </StrictMode>,
)
