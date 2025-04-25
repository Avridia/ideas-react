import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Modal from './Modal'


function LikedItem({id,url}) {

  const navigate = useNavigate()

  let [modalOpen,setModalOpen] = useState(false)

  let [title,setTitle] = useState("")
  let [infoCard,setInfoCard] = useState("")
  

  return (
    <>
      <li onClick={() => {
        setModalOpen(true)

        fetch("https://ideas-api-ow3q.onrender.com/modal/:id", {
          method : "POST",
          body : JSON.stringify({id}),
          headers : {
            "Content-Type" : "application/json"
          }
        })
        .then(response => response.json())
        .then(({idea_name,info}) => {
          setTitle(idea_name)
          setInfoCard(info)
          })
        }}>
        <img src={`https://ideas-api-ow3q.onrender.com${url}`} alt=""/>
        <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} id={id} url={url} title={title} infoCard={infoCard}/>
      </li>
      
    </>
  )
}

export default LikedItem