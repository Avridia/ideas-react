import { useState,useContext,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { LikesContext,UserContext,LikesDBContext } from '../Context'

import '../css/likes.css'

import LikedItem from '../components/LikedItem'
import Header from '../components/Header'
import Menu from '../components/Menu'



function Likes({id,url}) {

  let {likes,setLikes} = useContext(LikesContext) 
  let {likesDB,setLikesDB} = useContext(LikesDBContext)
  let {user,setUser} = useContext(UserContext)

  
  useEffect( () => {
    fetch("http://localhost:4000/likes", {
        method : "POST",
        body : JSON.stringify({likesDB,user}),
        headers : {
          "Content-Type" : "application/json"
        }
      })
      .then(response => response.json())
      .then(response => {

        setLikesDB(response.likes)

        console.log
        
      })
  }, [])
  

  const navigate = useNavigate()

  return (
    <div className="likes_page">
      <Header />
      <ul className="liked_photos">
        {likesDB.map(({liked_id,url}) => <LikedItem key={liked_id} id={liked_id} url={url} />)}
      </ul>
      <Menu />
    </div>
  )
}

export default Likes