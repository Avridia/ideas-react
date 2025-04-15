import { useState,useEffect } from 'react'
import { useNavigate,Link } from 'react-router-dom'
import { LikesContext,UserContext,LikesDBContext } from '../Context.jsx'
import { useContext } from 'react'

import '../css/home.css'


function Home() {

  const navigate = useNavigate()

    let {user,setUser} = useContext(UserContext)
    let {likesDB,setLikesDB} = useContext(LikesDBContext) 

    useEffect(() => {
        if (!user) {  
          navigate('/login'); 
        }
      }, [user, navigate]); 

      setUser(user)


  return (
      <div className="home">
        <section className="profile">
            <p className="username">Hola, {`${user}`}</p>
            <div className="avatarContainer">
                <img src="img/avatars/avatar_1.png" alt="" className="avatar" />
            </div>
        </section>
        <nav>
            <ul>
                <li><Link to="/ideas">Ideas</Link></li>
                <li><Link to="/likes">Likes</Link></li>
                <li><Link to="/create-new">Add an idea</Link></li>
                <li className="log_out"><Link to="/login">Log out</Link></li>
            </ul>
        </nav>
      </div>
  )
}

export default Home
