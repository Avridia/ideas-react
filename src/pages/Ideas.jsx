import { useState,useEffect,useContext,useRef } from 'react'
import { useNavigate } from 'react-router-dom'

import { LikesContext,UserContext,LikesDBContext,LikesDBLoadingContext } from '../Context.jsx'

import IdeaCard from '../components/IdeaCard'
import Menu from '../components/Menu'
import Header from '../components/Header'
import Modal from '../components/Modal'


import '../css/idea.css'
import '../css/components_css/menu.css'

/* this page is showing ideas randomly from the database, user can save an idea in his likes or see the next random idea. User can also see more information about the idea clicking on the information button */
function Ideas() {

  let {likesDBLoading,setLikesDBLoading} = useContext(LikesDBLoadingContext)
  let {likes,setLikes} = useContext(LikesContext) 
  let {likesDB,setLikesDB} = useContext(LikesDBContext)   
  let {user,setUser} = useContext(UserContext) 
  let [ideas,setIdeas] = useState([])
  let [randomIdeaUrl,setRandomIdeaUrl] = useState("")
  let [randomIdeaTitle,setRandomIdeaTitle] = useState("")
  let [randomIdeaId,setRandomIdeaId] = useState("")
  let [modalOpen,setModalOpen] = useState(false)
  let [title,setTitle] = useState("")
  let [infoCard,setInfoCard] = useState("")
 
  const navigate = useNavigate()

  function clickOnYes(){

    ideas.sort(() => Math.random() - 0.5) // reorganizing ideas randomly

    function randomItem(list){
      let item = Math.floor(Math.random() * list.length)
      return list[item]
    }

    // return the url random object from Ideas
    let randomItemResult = randomItem(ideas)
    setRandomIdeaUrl(randomItemResult.url)
    setRandomIdeaTitle(randomItemResult.idea_name)
    setRandomIdeaId(randomItemResult.id)

    let likedID = randomIdeaId
    let likedURL = randomIdeaUrl

    setLikes([...likes,{id : likedID, url : likedURL}])
  }

  function clickOnNo(){
    function randomItem(list){
      let item = Math.floor(Math.random() * list.length)
      return list[item]
    }

    // return the url random object from Ideas
    let randomItemResult = randomItem(ideas)
    setRandomIdeaUrl(randomItemResult.url)
    setRandomIdeaTitle(randomItemResult.idea_name)
    setRandomIdeaId(randomItemResult.id)
  }

  useEffect( () => {
      fetch("https://ideas-api-ow3q.onrender.com/add-like", {
        method : "POST",
        body : JSON.stringify({likes,user,likesDBLoading}),
        headers : {
          "Content-Type" : "application/json"
        }
      })
      .then(response => response.json())
      .then(response => {
        console.log("estos son los likes",likes)
        setLikesDB(response.likes)
      })
  }, [likes])


  useEffect( () => {
      fetch("https://ideas-api-ow3q.onrender.com/ideas")
      .then( response => {
          return new Promise((fulfill,reject) => {
              if(response.status == 500){
                  return reject();
              }
              response.json()
              .then(response => fulfill(response))
          });
      }) 
      .then( ideas => {
          
          function randomItem(list){
              let item = Math.floor(Math.random() * list.length)
              return list[item]
          }
      
          // return the url random object from Ideas
          let randomItemResult = randomItem(ideas)
          setRandomIdeaUrl(randomItemResult.url)
          setRandomIdeaTitle(randomItemResult.idea_name)
          setRandomIdeaId(randomItemResult.id)

          setIdeas(ideas)
      })
      .catch( error => {
          console.log(error)
      })
  }, [])


  return (
    <div className="ideas_page">
      <Header />
      <section className="idea_options">
        <div className="idea_desktop_container">
            <div className="idea_container"  style={ modalOpen ? { opacity: 0.3 } : { } }>
              <IdeaCard url={randomIdeaUrl} idea_name={randomIdeaTitle}/>
            </div>
        </div>
        <div className="ideas_options">
          <ul className="first_row">
            <li onClick={clickOnYes}>sí</li>
            <li onClick={clickOnNo}>no</li>
          </ul>
          <div className="second_row" onClick={ () => {
              setModalOpen(true)
              console.log("id es",randomIdeaId)

              fetch("https://ideas-api-ow3q.onrender.com/modal/:id", {
                method : "POST",
                body : JSON.stringify({id : randomIdeaId }),
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
            
            <p>información</p>
            <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} id={randomIdeaId} url={randomIdeaUrl} title={randomIdeaTitle} infoCard={infoCard}/>
          </div>
        </div>
        </section>
      <Menu />
    </div>
  )
}

export default Ideas