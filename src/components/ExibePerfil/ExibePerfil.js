import "./ExibePerfil.css"
function ExibePerfil (props) {
    let images = props.img
    return (
    <div>
        <main>
            <div className="card">
                {
                    images.map((img) => <img>{img}</img>)}
                {/* <div className="text">
                <p className="year">Ano de lançamento: {year}</p>
                <p className="year">Ano de lançamento: {year}</p>
                    <p className="title">Título: {title}</p>
                    <p className="name">Autor: {name}</p>       
                    <a href="#">Ver mais</a>
                    <a href="#">Ver mais</a>
                </div> */}
            </div>
        </main>
    </div>
    )
}

export default ExibePerfil;