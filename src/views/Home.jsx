import Beta from "./Beta";
function Home(){
return(
            <div id="corpo">
                <div className="part1main">
                    <div className="agrupador-coluna gap">
                       <p className="textimage1"><p className="helphealth2">Help Health,</p> o <span className="helphealth1">aplicativo</span> com <span className="helphealth1">feedbacks</span>  no <span className="helphealth1">momento</span> em que <span className="helphealth1">você</span> mais <span className="helphealth1">precisa!</span></p> <div id="image1"></div>
                        <div className="conheçaHH"><a href="/ohelphealth">Conheça mais o aplicativo help Health</a></div>
                    </div>
                    
                    <div id="image2"></div>
                </div>
                <div id="perrengues">
                    <p className="perrenguesPrincipalText">Cansado de esperar horas para ser atendido nos hospitais? 
                    Ou rodar Sampa todinho pra encontrar seu remédio? 
                    O <a href="/" className="helphealth">Help Health</a> tem a solução para seus perrengues!</p>
                    <p className="problemas">Você já passou por algum desses perrengues?</p>
                        <div className="lado"> <div className="filaimg"><span className="corletraproblemas">Fila de espera:</span></div><p className="perrenguesText">Com certeza você já esperou mais de 2 horas para ser 
                        atendido e não ficou nem 5 minutos na sala com o 
                        médico.</p></div>

                        <div className="lado"><div className="remedioimg"><span className="corletraproblemas">Remedios:</span></div><p className="perrenguesText">Já rodou em todos os AMAS e UBSs da sua região 
                        para encontrar o remédio que tanto precisava. </p></div>

                        <div className="lado"><div className="expimg"><span className="corletraproblemas">Experiencias:</span></div><p className="perrenguesText">Teve uma experiência ruim com atendimento em um 
                        hospital, AMA ou UBS.</p></div>
                        
                </div>
                <Beta/>
            </div>
    )
}

export default Home;