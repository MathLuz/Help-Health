function Conteudo() {
    return (
        <div className="conteudos">
            <div className="poderdoF-pai">
                <div className="poderdoF">
                    <h2>O Help Health te mostra O Poder dos feedbacks!
                        <br />
                        Tudo isso dentro de um aplicativo inovador que
                        vai mudar o cotidiano paulistano!</h2>

                    <div className="traco"></div>

                    <nav className="caixas-conteudos">
                        <article className="caixa-remedio">
                            <div className="texto-caixa">
                                <p>Pra que rodar SP todinho para encontrar seu remédio?</p>
                            </div>
                        </article>
                        <article className="caixa-espera">
                            <div className="texto-caixa">
                                <p>Melhor passar mais tempo com o médico do que esperando...</p>
                            </div>
                        </article>
                        <article className="caixa-experiencia">
                            <div className="texto-caixa">
                                <p>Experiências em unidades ruins? Tô fora!</p>
                            </div>
                        </article>
                    </nav>

                    <nav className="caixas-conteudos">
                        <article className="caixa-remedio-explicacao">
                            <div className="texto-caixa-explicacao">
                                <p className="explicacao-posicao">Com feedbacks, você saberá quais unidades tem o remédio que você necessita</p>
                            </div>
                        </article>
                        <article className="caixa-espera-explicacao">
                            <div className="texto-caixa-explicacao">
                                <p>Ao ver os feedbacks dos pacientes que estão nos hospitas, você pode decidir se vale a pena ir ou não</p>
                            </div>
                        </article>
                        <article className="caixa-experiencia-explicacao">
                            <div className="texto-caixa-explicacao">
                                <p>Os feedbacks gerais das unidades, pode dizer muito sobre a sua experiência futura na unidade</p>
                            </div>
                        </article>
                    </nav>

                    <div className="traco"></div>

                    <nav className="titulo-video">
                    <h3>Quer saber ainda  mais do Aplicativo Help Health?
                        <br />
                    Então dá uma olhadinha nesse vídeo para saber mais detalhes!</h3>
                    </nav>
                    
                        <nav>
                        <iframe  className="iframe-video" width="1100" height="600" src="https://www.youtube.com/embed/QEthvAqQVT4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen  ></iframe>
                        </nav>
                    
                </div>
            </div>
        </div>
    )
}

export default Conteudo;