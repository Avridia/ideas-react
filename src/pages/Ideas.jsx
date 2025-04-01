import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import IdeaCard from '../components/IdeaCard'
import Menu from '../components/Menu'
import Header from '../components/Header'
import '../css/idea.css'
import '../css/components_css/menu.css'


function Ideas() {

  const navigate = useNavigate()

  return (
    <div className="ideas_page">
      <Header />
      <section className="idea_options">
        <div className="idea_desktop_container">
            <div className="idea_container">
              <IdeaCard />
            </div>
        </div>
        <div className="ideas_options">
          <ul className="first_row">
            <li>sí</li>
            <li>no</li>
          </ul>
          <div className="second_row">
            <p>información</p>
          </div>
        </div>
        </section>
      <Menu />
    </div>
  )
}

export default Ideas