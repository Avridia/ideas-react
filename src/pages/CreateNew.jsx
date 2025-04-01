import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import '../css/createNew.css'

import Header from '../components/Header'
import Menu from '../components/Menu'


function CreateNew() {

  const navigate = useNavigate()

  return (
    <div className="createNew_page">
    <Header />
    <section className="createNew_container">
        <div className="add_photo">
            <div className="add_file_button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#c0d3b5"><path d="M9.707 7.707 11 6.414V16a1 1 0 0 0 2 0V6.414l1.293 1.293a1 1 0 0 0 1.414-1.414l-3-3a1 1 0 0 0-1.416 0l-3 3a1 1 0 0 0 1.416 1.414zM17 19H7a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2z"/></svg>
                <span>Sube tu foto</span>
                <input type="file" />
            </div> 
            
        </div>
        <div className="add_title">
            <input type="text" name="" id="" placeholder="nombre del plato"/>
        </div>
        <div className="add_info">
            <input type="textarea" placeholder="descripción (opcional)" />
        </div>
        <div className="submit_button">
            <input type="submit" name="" id="" value="Guardar"/>
        </div>
    </section>
    <Menu />
    </div>
  )
}

export default CreateNew