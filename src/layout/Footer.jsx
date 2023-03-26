import { Link } from "react-router-dom";

function Footer(){
    return(
        <footer>
             <nav>
                <div className="box">
                    <div className="box-son">
                        <ul className="redesSociais">
                            <a href="https://www.youtube.com/watch?v=g20h2ZSbU-w"><li className="whats"></li></a>
                            <a href="https://www.youtube.com/watch?v=g20h2ZSbU-w"><li className="insta"></li></a>
                            <a href="https://www.youtube.com/watch?v=g20h2ZSbU-w"><li className="yt"></li></a>
                        </ul>
                    </div>
                    <div className="box-son">
                        <ul className="irformativo">
                            <li><Link to="/">home</Link></li>
                            <li><Link to="/">o Help Health</Link></li>
                            <li><Link to="/">FAQ</Link></li>
                            <li><Link to="/">forms</Link></li>
                        </ul>
                    </div> 
                    <div className="box-son">
                        <ul className="termos">
                            <li><Link to="/termos">termos de uso</Link></li>
                            <li><Link to="/privacidade">política de privacidade</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="copyright">
                    <p>	&copy; Todos os direitos reservados</p>
                </div>
           </nav>
        </footer>
    )
}

export default Footer;