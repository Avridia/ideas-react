import { useState,useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { UserContext } from '../Context'

import '../css/login.css'


function Login() {

  const navigate = useNavigate()
  let [username,setUsername] = useState("")
  let [password,setPassword] = useState("")

  let [error,setError] = useState(false)

  let {user,setUser} = useContext(UserContext) 

  return (
    <div className="login_page">
    <h1>Ideas</h1>
    <div className="form_container">
      <form onSubmit={ event => {
          event.preventDefault()

        
          fetch("http://localhost:4000/home", {
            method : "POST",
            body : JSON.stringify({username,password}),
            headers : {
              "Content-type" : "application/json"
            }
          })
          .then(response => response.json())
          .then((response) => {

            if(response.error){
              setError(true)

              return console.log("ha habido un error, estado del error:",error)

            }else{

              let user_name = response[0].user_name

              setUser(user_name)

              navigate("/")

              return setError(false)
            }
          })
          .catch(error => {
            console.log(error)
            setError(true)
          })


        }} >
          <div className="input_userName" value={username} onChange={ event => setUsername(event.target.value)} >
            <div>Nombre de usuario</div>
            <input type="text" name="userName" />
          </div>
          <div className="input_userPassword">
            <div>Contraseña</div>
            <input type="password" name="password" value={password} onChange={ event => setPassword(event.target.value)}/>
          </div>
          <div className="input_submit">
            <input type="submit" value="Conectarse" />
          </div>
        </form>
        <div className={`error_message ${ error ? "visible" : "invisible"}`}>Debe ingresar un usuario y contraseña válidos</div>
    </div>
    </div>
  )
}

export default Login