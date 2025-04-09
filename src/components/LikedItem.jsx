import { useState } from 'react'
import { useNavigate } from 'react-router-dom'



function LikedItem({liked_id,url}) {

  const navigate = useNavigate()

  return (
    <li>
      <img src={`http://localhost:4000${url}`} alt="" />
    </li>
  )
}

export default LikedItem