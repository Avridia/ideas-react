function IdeaCard({url,idea_name}){


    return (
        <>
        <main className="idea_card">
            <div className="title_container">
              <h1 className="title">{`${idea_name}`}</h1>
            </div>
            <img src={`https://ideas-api-ow3q.onrender.com${url}`} alt="" />
        </main>

        </>
    )
}

export default IdeaCard