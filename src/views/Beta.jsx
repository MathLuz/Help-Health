
import { Link } from "react-router-dom";

function Beta(){
    return( 
    
        <div id="corpoBeta">
        <div id="betaText">
            <p>Quero me cadastrar! </p>
        </div>
        {/* <div className="teste"> */}
        <form className="FormBeta" >
            <div className="agrupador-coluna">
                <label>Nome:  </label>
            <   input type='text'  name="nome" id="nome" placeholder="Nome" autofocus />
            </div>
            <div className="agrupador-coluna">
                <label> E-mail:  </label>
                <input type='email' name="email" id="email" placeholder="E-mail"/>
            </div>
            <div className="agrupador-coluna">
                <label> Senha:  </label>
                <input type='text' name="senha" id="senha" placeholder="Senha"/>
            </div>
            <div className="agrupador-coluna">
                <label>Confirmar Senha:  </label>
                <input type='text' name="confsenha" id="confsenha" placeholder="Confirmar Senha"/>
            </div>
            <label >Concordo com os termos de uso e privacidade <Link to="/termos" className="concordotermos">termos de uso</Link> <input type='checkbox' value="sim" className="checkboxBeta"></input> </label>
            {/* <label> Deseja receber notificações no celular? <input type='checkbox' value="sim" className="checkboxBeta"></input> </label> */}
            <input type="submit" value="Cadastrar"></input>
           
        </form>
        {/* </div> */}
    </div>
          )
    }
    export default Beta;