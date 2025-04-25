import { useEffect } from 'react'
import { useNavigate,Link } from 'react-router-dom'
import { UserContext,LikesDBContext,LikesContext } from '../Context.jsx'
import { useContext } from 'react'

import '../css/home.css'

/* this is the home page, if no user is conected this page cannot be seen */
function Home() {

  const navigate = useNavigate()

    let {user,setUser} = useContext(UserContext)
    let {likesDB,setLikesDB} = useContext(LikesDBContext) 
    let {likes,setLikes} = useContext(LikesContext)

    useEffect(() => {
        if (!user) {  
          navigate('/login'); 
        }
      }, [user, navigate]); 

      setUser(user)


  return (
      <div className="home">
        <section className="profile">
            <p className="username">Hola, {`${user}`}</p>
            <div className="avatarContainer">
                <img src="img/avatars/avatar_1.png" alt="" className="avatar" />
            </div>
        </section>
        <nav>
            <ul>
                <li><Link to="/ideas">Ideas</Link></li>
                <li><Link to="/likes">Likes</Link></li>
                <li><Link to="/create-new">Añadir una idea</Link></li>
                <li className="log_out" onClick={() => {
                  setUser("")
                  setLikesDB([])
                  setLikes([])
                  navigate("/login")
                }}><Link to="/login">Salir</Link></li>
            </ul>
        </nav>
      </div>
  )
}

export default Home
