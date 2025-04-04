import { useState,useEffect } from 'react'

function IdeaCard(){
    
    let [ideas,setIdeas] = useState([])
    let [randomIdeaUrl,setRandomIdeaUrl] = useState("")
    let [randomIdeaTitle,setRandomIdeaTitle] = useState("")

    useEffect( () => {
        fetch("http://localhost:4000/ideas")
        .then( response => {
            return new Promise((fulfill,reject) => {
                if(response.status == 500){ // si hubo un error
                    return reject();
                }
                response.json()
                .then(response => fulfill(response))
            });
        }) 
        .then( ideas => {
            setIdeas(ideas)
            function randomItem(list){
                let item = Math.floor(Math.random() * list.length)
                return list[item]
            }
        
            // return the url random object from Ideas
            let randomItemResult = randomItem(ideas)
            setRandomIdeaUrl(randomItemResult.url)
            setRandomIdeaTitle(randomItemResult.idea_name)

        })
        .catch( error => {
            console.log(error)
        })
    }, [])

    

    


    return (
        <>
        <main className="idea_card">
            <div className="title_container">
              <h1 className="title">{`${randomIdeaTitle}`}</h1>
            </div>
            <img src={`http://localhost:4000${randomIdeaUrl}`} alt="" />
        </main>

        </>
    )
}

export default IdeaCard