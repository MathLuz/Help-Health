import { AlertErro, AlertSuccess } from "../layout/style";
import React, {useState} from "react";



function CadastroRemedio() {

    const[Remedio, setRemedio] = useState({
        nome: '',
        bula: ''
    });

    const[status, setStatus] = useState({
        type: '',
        mensagem: ''
    })



    const valorInput = e => setRemedio({ ...Remedio, [e.target.name]: e.target.value  });     //constante que pega oque vc digitou no input

    const CadRemedio = async e =>{                                 //constante pra cadastrar o veinho
        e.preventDefault();
        //console.log(usuario);

        await fetch("http://localhost/Projeto-Help-Health/src/api/cadastrar_remedio.php", {                 //await = espera ate tudo ta joia e fetch coisa esse link 
            method: 'POST',                                                                             
            headers:{
                'Content-type': 'application/json'                                  //metodo/json/corpo JSON.stringify({ variavel que se usou pra guardar as informacao}) aqui que envia 
            },
            body: JSON.stringify({Remedio})
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

            <form className="formcadastro" onSubmit={CadRemedio} >  
                <h2 className="palavralogin">Cadastre o remedio:</h2>
                <label>Nome: </label><input name="nome" id="nome" type="text" onChange={valorInput} ></input> 
                <label>Bula: </label><input name="bula" id="bula" type="text" onChange={valorInput} ></input>
               <input type="submit" className="botaocadastroremedio" value="Cadastrar remedio"/>
               
                
            </form>
        </main>
    </div>
    )
}
export default CadastroRemedio ;
