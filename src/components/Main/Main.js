import ExibePerfil from "../ExibePerfil/ExibePerfil";
import EmAlgum from "../../img/EmAlgum.svg"
import Equipe from "../Equipe/Equipe";
import Suicidas from "../../img/suicidas.svg"
import "./main.css"
function Main () {
    return (
        <>
            <main>
            <ExibePerfil img={Suicidas} title="Suicidas" name="Raphael Montes" year="7 de Agosto de 2017"/>
            </main>
        </>
    )
}

export default Main;