import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/components_css/modalIdea.css'



function Modal({id,url,isOpen,onClose,title}) {

  const navigate = useNavigate()
  

  if (!isOpen) return null

  return (
    <div className="modalIdea">
      <div className="modal_overlay" onClick={onClose}>
      <div className="modal_content" onClick={(e) => e.stopPropagation()}>
        <h2>{`${title}`}</h2>
        <span className="close_button" onClick={onClose}>×</span>
      </div>
    </div>
    </div>
  )
}

export default Modal