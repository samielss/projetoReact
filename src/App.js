// import Header from "./components/header/Header";
// import Main from "./components/Main/Main";
// import Equipe from "./components/Equipe/Equipe";
import './App.css'
import Map from "./components/Map/Map";
import ExibePerfil from "./components/ExibePerfil/ExibePerfil";
import EmAlgum from "./img/EmAlgum.svg"
// import Suicidas from "./img/suicidas.svg"

function App() {
  let listname =["Rocha","Oliveira","Nicolas","Samuel"];
  return (
      <>
        {/* <Header/> */}
        {/* <Main/>
        <Equipe/> */}
        <ExibePerfil img={EmAlgum}/>
        <Map name={listname}/>
      </>
  );
}

export default App;
