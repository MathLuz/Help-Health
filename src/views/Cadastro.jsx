
import { Link } from "react-router-dom";
import React, {useState} from "react";
import { AlertErro, AlertSuccess } from "../layout/style";


function Cadastro() {

    const[usuario, setUsuario] = useState({
        nome: '',
        email: '',
        senha: '',                                                                          //constante pra guardar as informa
       
    });

    const[status, setStatus] = useState({
        type: '',
        mensagem: ''
    })


    


    const valorInput = e => setUsuario({ ...usuario, [e.target.name]: e.target.value  });     //constante que pega oque vc digitou no input

    const CadUsuario = async e =>{                                 //constante pra cadastrar o veinho
        e.preventDefault();
        //console.log(usuario);

        await fetch("http://localhost/Projeto-Help-Health/src/api/cadastrar.php", {                 //await = espera ate tudo ta joia e fetch coisa esse link 
            method: 'POST',                                                                             
            headers:{
                'Content-type': 'application/json'                                  //metodo/json/corpo JSON.stringify({ variavel que se usou pra guardar as informacao}) aqui que envia 
            },
            body: JSON.stringify({usuario})
        })
        .then((resposta) => resposta.json())        //resposta le o valor mas como ta em json se faz esse => nome da variavel que vc criou pra ler + .json()       //aqui pra gente enxerga no console se deu bom
        .then((respostaJson) => {                              //depois de transformar a resposta em json => ( console.log(respostajson)) 
            //console.log(respostaJson)
            
            if(respostaJson.erro){
                setStatus({
                    type: 'erro',
                    mensagem: respostaJson.mensagem             
                });
            }else{
                setStatus({
                    type: 'success',
                    mensagem: respostaJson.mensagem
                });
            }
        }).catch(() => {
            setStatus({
                type: 'erro',
                mensagem: 'cadastro não realizado tente mais tarde'
            })
        })
    }

  return(
<div className="fundologin">
        <main className="mainlogin">

            {status.type === 'erro' ? <AlertErro>{status.mensagem} </AlertErro>: ""}            {/*mensagem de sucesso ou erro  */}
            {status.type === 'success' ? <AlertSuccess>{status.mensagem} </AlertSuccess>: ""}

            <form className="formcadastro" onSubmit={CadUsuario} >  
                <h2 className="palavralogin">Cadastro</h2>
                <label>Nome: </label><input name="nome" id="nome" type="text" onChange={valorInput}  required></input> 
                <label>Email: </label><input name="email" id="email" type="email" onChange={valorInput} required></input>
                <label>Senha: </label><input name="senha" id="senha" type="password" onChange={valorInput} required></input>
                <label>Confirmar Senha: </label><input name="confsenha" id="confsenha" type="password" required></input>
               <label className="checkboxtermo">Aceito os termos de uso<input type="checkbox" required></input> </label>
               <label className="checkboxtermo">Concordo com a politica de privacidade<input type="checkbox"  required></input> </label>
               <input type="submit" className="botaocadastro" value="Cadastrar"/>
               <label className="primeiroacesso">Ja é cadastrado? <Link to="/login">Logar-se</Link></label>
                
            </form>
        </main>
    </div>
    )
}
export default Cadastro ;
