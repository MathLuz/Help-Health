import { Component } from "react";


export default class Duvidas extends Component{
    
    resposta(id){
        const resp = document.getElementById(id);
        if (resp.className.includes('respostaDesativada') == true){
            resp.classList.remove('respostaDesativada');
            resp.classList.add('respostaAtivada');
        } else {
            resp.classList.remove('respostaAtivada');
            resp.classList.add('respostaDesativada');
        }}
        render(){
            return(
            <div className="boxDuvidas">
                <section className="tituloDuvidas">Ainda tem dúvidas? Elas podem ser tiradas aqui!!</section>
                <nav>
                    <ul>
                        <li id="resp1" className="respostaDesativada">
                            <div className="boxClick" onClick={() => this.resposta("resp1")}><p>O que é o Help Health? &#10003;</p><img src="img/seta.png"/></div>
                            <div className="resposta">Nosso aplicativo e nosso website funciona para você saber o horário de funcionamento dos hospitais, suas lotações, onde achar e quando chega o remédio que precisa.</div>
                        </li>
                        <li id="resp2" className="respostaDesativada">
                            <div className="boxClick" onClick={() => this.resposta("resp2")}><p>Como o app funciona?</p><img src="img/seta.png"/></div>
                            <div className="resposta">O aplicativo funciona por meio de comunicação entre os usuarios que estão no hospital e se disponham para dizer como ele esta</div>
                        </li>
                        <li id="resp3" className="respostaDesativada">
                            <div className="boxClick" onClick={() => this.resposta("resp3")}><p>Como baixar nosso aplicativo?</p><img src="img/seta.png"/></div>
                            <div className="resposta">O aplicativo está disponível para Android e IOS em suas próprias lojas, apenas procure por "Help Health" ou acesse o link abaixo.<br/>Android: <a href="https://www.android.com">android.com/healphealth</a><br/>IOS: <a href="https://www.apple.com">apple.com/healphealth</a></div>
                        </li>
                        <li id="resp4" className="respostaDesativada">
                            <div className="boxClick" onClick={() => this.resposta("resp4")}><p>Nosso seviço é gratuito?</p><img src="img/seta.png"/></div>
                            <div className="resposta">Sim! Oferecemos nosso serviço gratuitamente, apenas pedimos que envie avaliações ao aplicativo, para que as informações sobre a lotação, medicamentos e atendimento seja mais precisa.</div>
                        </li>
                    </ul>
                </nav>
            </div>
            )}
        }