import { useState } from 'react'
import { useNavigate,Link } from 'react-router-dom'

import '../css/home.css'


function Home() {

  const navigate = useNavigate()

  return (
    <div className="home">
      <section className="profile">
          <p className="username">Hola, Username</p>
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
