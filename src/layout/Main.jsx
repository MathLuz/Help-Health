import { Route, Routes } from "react-router-dom";
import Home from "../views/Home";
import Explicacao from "../views/Explicacao";
import Beta from "../views/Beta";
import Conteudo from "../views/Conteudo";
import PoliticaPrivacidade from "../views/PoliticaPrivacidade";
import Duvidas from "../views/Duvidas";
import Termos from "../views/Termos";
import Login from "../views/Login";
import Cadastro from "../views/Cadastro";
import HomeLogado from "../views/HomeLogado";
import CadastroRemedio from "../views/CadastroRemedio";
import ConsultaRemedio from "../views/ConsultaRemedio";

function Main(){
    return(
        <main>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/explicacao" element={<Explicacao/>}></Route>
                <Route path="/ohelphealth" element={<Conteudo/>}></Route>
                <Route path="/beta" element={<Beta/>}></Route>
                <Route path="/privacidade" element={<PoliticaPrivacidade/>}></Route>
                <Route path="/duvidas" element={<Duvidas/>}></Route>
                <Route path="/termos" element={<Termos/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/cadastro" element={<Cadastro/>}></Route>
                <Route path="/homelogado" element={<HomeLogado/>}></Route>
                <Route path="/cadastroremedio" element={<CadastroRemedio/>}></Route>
                <Route path="/consultaremedio" element={<ConsultaRemedio/>}></Route> 
                {/* <Route path="/exemplo" element={<Exemplo/>}></Route> */}
            </Routes>
        </main>
    )
}

export default Main;