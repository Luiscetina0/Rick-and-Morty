

export const Gif = ({data}) => {

    const onReset = () => {
        window.location.reload()
    }



  return (
    <div className="characters">
     <h1>Personajes</h1>
        <div className="container-characters">
            {
                data.map(personaje=> (
                    <div className="character-container" key={personaje.id}>
                        <div >
                            <img src={personaje.image} alt={personaje.name}/>
                        </div>
                            <div>
                                <h3>{personaje.name}</h3>
                                <h6>{
                                    personaje.status === "Alive" ? (
                                        <>

                                        <span className="alive"/>
                                        Alive
                                        </>
                                        
                 ) : (
                    <>
                                        <span className="dead"/>
                                            Dead
                                            </>
                                    )
                                }
                                </h6>
                                <p>
                                    <span className="text-grey">Episodios: </span>
                                    <span>{personaje.episode.length}</span>
                                </p>
                                <p>
                                    <span className="text-grey">Especie: </span>
                                    <span>{personaje.species}</span>
                                </p>
                            </div>
                        </div>
        ))}
     </div>
     <span className="back-home" onClick={onReset}>
      Volver al inicio
     </span>
    </div>
  )
}
