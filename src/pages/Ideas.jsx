import { useState,useEffect,useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { LikesContext,UserContext,LikesDBContext } from '../Context.jsx'

import IdeaCard from '../components/IdeaCard'
import Menu from '../components/Menu'
import Header from '../components/Header'

import '../css/idea.css'
import '../css/components_css/menu.css'


function Ideas() {

  let {likes,setLikes} = useContext(LikesContext) 
  let {likesDB,setLikesDB} = useContext(LikesDBContext)   
  let {user,setUser} = useContext(UserContext) 
  let [ideas,setIdeas] = useState([])
  let [randomIdeaUrl,setRandomIdeaUrl] = useState("")
  let [randomIdeaTitle,setRandomIdeaTitle] = useState("")
  let [randomIdeaId,setRandomIdeaId] = useState("")
 

  const navigate = useNavigate()
  

  function clickOnYes({id,url}){

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

    console.log("estos son los likes del front ",likes) 
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
    if(likes){
      fetch("http://localhost:4000/add-like", {
        method : "POST",
        body : JSON.stringify({likes,user}),
        headers : {
          "Content-Type" : "application/json"
        }
      })
      .then(response => response.json())
      .then(response => setLikesDB(response.likes))
    }
  }, [likes])

  


  useEffect( () => {
      fetch("http://localhost:4000/ideas")
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
            <div className="idea_container">
              <IdeaCard url={randomIdeaUrl} idea_name={randomIdeaTitle} />
            </div>
        </div>
        <div className="ideas_options">
          <ul className="first_row">
            <li onClick={clickOnYes}>sí</li>
            <li onClick={clickOnNo}>no</li>
          </ul>
          <div className="second_row">
            <p>información</p>
          </div>
        </div>
        </section>
      <Menu />
    </div>
  )
}

export default Ideas