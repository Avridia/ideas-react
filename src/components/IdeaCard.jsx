import { useState,useEffect } from 'react'

function IdeaCard({url,idea_name}){


    return (
        <>
        <main className="idea_card">
            <div className="title_container">
              <h1 className="title">{`${idea_name}`}</h1>
            </div>
            <img src={`http://localhost:4000${url}`} alt="" />
        </main>

        </>
    )
}

export default IdeaCard