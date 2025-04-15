import { useState,useContext,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { LikesContext,UserContext,LikesDBContext,LikesDBLoadingContext } from '../Context'

import '../css/likes.css'

import LikedItem from '../components/LikedItem'
import Header from '../components/Header'
import Menu from '../components/Menu'



function Likes({id,url}) {

  let {likes,setLikes} = useContext(LikesContext) 
  let {likesDB,setLikesDB} = useContext(LikesDBContext)
  let {user,setUser} = useContext(UserContext)
  let {likesDBLoading,setLikesDBLoading} = useContext(LikesDBLoadingContext)

  


  useEffect( () => {
    fetch("http://localhost:4000/likes", {
    method : "POST",
    body : JSON.stringify({user}),
    headers : {
      "Content-Type" : "application/json"
    }
  })
  .then(response => response.json())
  .then(response => {
    setLikesDBLoading(response.likes)
  })
  }, [])

  console.log(likesDBLoading)

  const navigate = useNavigate()

  return (
    <div className="likes_page">
      <Header />
      <ul className="liked_photos">
        {likesDBLoading.map(({liked_id,url}) => <LikedItem key={liked_id} id={liked_id} url={url} />)}
      </ul>
      <Menu />
    </div>
  )
}

export default Likes