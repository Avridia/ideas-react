import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Modal from './Modal'


function LikedItem({id,url}) {

  const navigate = useNavigate()

  let [modalOpen,setModalOpen] = useState(false)

  let [title,setTitle] = useState("")
  

  

  return (
    <>
      <li onClick={() => {
        setModalOpen(true)

        fetch("http://localhost:4000/modal/:id", {
          method : "POST",
          body : JSON.stringify({id}),
          headers : {
            "Content-Type" : "application/json"
          }
        })
        .then(response => response.json())
        .then(response => {
          setTitle(response.title[0].idea_name)
          console.log(title)
          })
        }}>
        <img src={`http://localhost:4000${url}`} alt=""/>
        <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} id={id} url={url} title={title}/>
      </li>
      
    </>
  )
}

export default LikedItem