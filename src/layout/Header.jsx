import { Link } from "react-router-dom";

import { Component } from "react";
export default class Header extends Component{

    abrirMenu(ids){
        const menu = document.getElementById(ids);
        if (menu.className.includes('menuDesativado') == true){
            menu.classList.remove('menuDesativado');
            menu.classList.add('menuAtivado');
        } else {
            menu.classList.remove('menuAtivado');
            menu.classList.add('menuDesativado');
        }}

    render(){
        // function Header(){
            
    return(
        <header>
                <div className="areaHeader">
                    <h1><Link to="/" id="logo">Help Health</Link></h1>
                    <img src="../img/menu.png" onClick={() => this.abrirMenu("idMenu")} className="menuHamburguer"></img> 
                </div>
                <div id="idMenu" className="menuDesativado">
                        <div className="box">
                            <Link to="/oHelpHealth" id="menu" className="link oHelpHealth">Quem Somos?</Link>
                            <Link to="/duvidas" id="menu" className="link linkDuvidas">Dúvidas</Link>
                        </div>
                        <a href="/login" id="menu" className="forms">Login</a>
                </div>
        </header>
    )
}
}