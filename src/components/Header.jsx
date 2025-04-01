import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import '../css/components_css/header.css'

function Login() {

  const navigate = useNavigate()

  return (
    <div className="header">
    <section className="profile">
          <div className="avatarContainer">
              <img src="img/avatars/avatar_1.png" alt="" className="avatar" />
          </div>
          <p className="username">Username</p>
      </section>
    </div>
  )
}

export default Login