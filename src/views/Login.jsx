import { Link } from "react-router-dom";
import React, {useState} from "react";


function Login(){

    const[usuario, sendUsuario] = useState({
        email: '',
        senha: '',                                                                          //constante pra guardar as informa
        email2: ''
    });

    // const[status, setStatus] = useState({
    //     type: '',
    //     mensagem: ''
    // })


    const valorInput = e => sendUsuario({ ...usuario, [e.target.name]: e.target.value  });


    const ValidaUsuario = async e =>{  
        e.preventDefault();
        await fetch("http://localhost/Projeto-Help-Health/src/api/validaUsuario.php", {                 //await = espera ate tudo ta joia e fetch coisa esse link 
        method: 'POST',                                                                             
        headers:{
            'content-type': 'application/json'                                //metodo/json/corpo JSON.stringify({ variavel que se usou pra guardar as informacao}) aqui que envia 
        },
        body: JSON.stringify({usuario})
    })
        .then((response) => response.json())
        .then((responseJson)=>(
          console.log(responseJson),
          setData(responseJson.records)
        )).catch(error =>console.log(error));
    }

    return(
    <div className="fundologin">
        <main className="mainlogin">
            <form className="formlogin" onSubmit={ValidaUsuario}>
                <h2 className="palavralogin">Login</h2>
                <label>Email: </label><input type="email" name="email" id="email" onChange={valorInput} ></input>
                <label>Senha: </label><input type="password" name="senha" id="senha" onChange={valorInput} ></input>
               
                <input type="submit" className="botaologar"value="Entrar"/>
                <label className="linkslogin"><Link to="/">esqueci minha senha </Link></label>
                <label className="primeiroacesso">Primeiro acesso? <Link to="/cadastro">Cadastre-se! </Link></label>
            </form>
        </main>
    </div>
    )
}
export default Login;