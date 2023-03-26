import { Link } from "react-router-dom";
function Login(){
    return(
    <div className="fundologin">
        <main className="mainlogin">
            <form className="formlogin">
                <h2 className="palavralogin">Login</h2>
                <label>Email: </label><input type="email"></input>
                <label>Senha: </label><input type="password"></input>
               
                <input type="submit" className="botaologar"value="Entrar"/>
                <label className="linkslogin"><Link to="/">esqueci minha senha </Link></label>
                <label className="primeiroacesso">Primeiro acesso? <Link to="/cadastro">Cadastre-se! </Link></label>
            </form>
        </main>
    </div>
    )
}
export default Login;