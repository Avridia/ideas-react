import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import '../css/createNew.css'

import Header from '../components/Header'
import Menu from '../components/Menu'


function CreateNew() {

  const navigate = useNavigate()

    let [inputText,setInputText] = useState("")
    let [inputFile,setInputFile] = useState("")
    let [uploadButtonText, setUploadButtonText] = useState("Sube tu foto");
    

  return (
    <div className="createNew_page">
    <Header />
    <form className="createNew_container" onSubmit={ event => {
        event.preventDefault();
    
        let data = new FormData();

        console.log("este es inputText", inputText)
        console.log("este es inputFile", inputFile)

        data.append("img",inputFile);
        data.append("filename", inputText);

        return fetch("http://localhost:4000/upload/img_ideas",{
            method : "POST",
            body : data
        })
        .then(response => response.json())
        .then(response => {
            console.log("esta es la respuesta del fetch de createNew:",response)
            return setInputText("")
        })
        .catch(error => console.log("este es el error index ",error))

    }}>
        <div className="add_photo">
            <div className="add_file_button" style={inputFile ? {backgroundColor:"var(--peach)"} : {}}>
                <svg className={inputFile ? "invisible" : ""} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#c0d3b5"><path d="M9.707 7.707 11 6.414V16a1 1 0 0 0 2 0V6.414l1.293 1.293a1 1 0 0 0 1.414-1.414l-3-3a1 1 0 0 0-1.416 0l-3 3a1 1 0 0 0 1.416 1.414zM17 19H7a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2z"/></svg>
                <span className="uploadPhotoButton" style={inputFile ? {color:"var(--dark-green)"} : {}}>{uploadButtonText}</span>
                <input type="file"  name="img" onChange={ event => {
                    let file = event.target.files[0]
                    setInputFile(file)
                    if(file){
                        setUploadButtonText("Foto cargada")
                      }else{
                        setUploadButtonText("Sube tu foto")
                      }
                    }}/>
            </div> 
            
        </div>
        <div className="add_title">
            <input type="text" name="filename" value={inputText} onChange={ event => setInputText(event.target.value) } id="" placeholder="nombre del plato"/>
        </div>
        <div className="add_info">
            <input type="textarea" placeholder="descripción (opcional)" />
        </div>
        <div className="submit_button">
            <input type="submit" id="" value="Guardar"/>
        </div>
    </form>
    <Menu />
    </div>
  )
}

export default CreateNew