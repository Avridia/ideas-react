import { useState,useEffect,useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/components_css/modalIdea.css'

import { UserContext,LikesContext } from '../Context'

/* user can see the modal from pages: ideas and likes. This modal is used to show extra information, to write it or modify it or to delete the idea from the likes */
function Modal({id,isOpen,onClose,title,infoCard}) {

  const navigate = useNavigate()
  
  let [writtenInfo,setWrittenInfo] = useState(`${infoCard}`)
  let [newInfo,setNewInfo] = useState("")
  let {user,setUser} = useContext(UserContext)
  let {likes,setLikes} = useContext(LikesContext) 
  let [editing,setEditing] = useState(false) 


  useEffect(() => {
    setWrittenInfo(infoCard)
  }, [infoCard])

  if (!isOpen) return null

  return (
    <div className="modalIdea">
      <div className="modal_overlay" onClick={onClose}>
      <div className="modal_content" onClick={(e) => e.stopPropagation()}>
        <div className="title_container">
          <h2>{`${title}`}</h2>
          <span className="close_button" onClick={onClose}>×</span>
        </div>
        <p className={ editing ? "invisible" : "visible" }>{writtenInfo}</p>
        <textarea className={ editing ? "visible" : "invisible" } type="text" value={newInfo} onChange={ event => setNewInfo(event.target.value)} />
        <div className="options_container">
          <div className="delete_option">
            <button className="delete" onClick={ () => {
                return fetch(`http://localhost:4000/likes/delete/${id}`, { 
                  method : "DELETE",
                  body :  JSON.stringify({user}),
                  headers : {
                    "Content-type" : "application/json"
                }
                })
                .then(response => {
                    if(response.status == 204){
                        return setLikes(likes.filter( like => like.id != id ))
                    }
                })
            }}>Borrar de mis likes</button>
          </div>
          <div className="note_option">
            <button className="note" onClick={ () => {
                if (!editing) {
                  setNewInfo(writtenInfo)
                  setEditing(true)
                } else {
                return fetch(`http://localhost:4000/likes/edit/text/${id}`, { 
                  method : "PUT",
                  body : JSON.stringify({infoCard : newInfo}),
                  headers : {
                      "Content-type" : "application/json"
                  }
                })
                .then(response => {
                    if(response.status == 204){
                      const trimmed = newInfo.trim()
                      if(trimmed !== "" && trimmed !== writtenInfo){
                        setWrittenInfo(trimmed)
                      }
                      setEditing(false)
                    }
                })}
            }} >{ editing ? "Guardar" : "Modificar información" }</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Modal