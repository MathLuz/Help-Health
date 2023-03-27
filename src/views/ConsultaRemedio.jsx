import React from "react";
import { useEffect, useState } from "react";

function ConsultaRemedio(){

    const [data, setData] = useState([]);

    
    const getProdutos = async () => {
        fetch("http://localhost/Projeto-Help-Health/src/api/consulta-remedio.php")
        .then((response) => response.json())
        .then((responseJson)=>(
          console.log(responseJson),
          setData(responseJson.records)
        ));
    }
    useEffect(() =>{
        getProdutos();
    },[])
    return(
        <div className="areaPesquisaRemedio">
            <h1>Consulta Remedios</h1>
            <div className="tabela">
                <div className="cabecalhoTabela">
                    <div className="idRemedio">ID</div>
                    <div className="nomeRemedio">Nome</div>
                    <div className="bulaRemedio">Bula</div>
                </div>
                <div className="corpoTabela">
                    
                        {Object.values(data).map(produto=> (
                            <div className="displayRemedio" key={produto.Id}>
                                <p className="idRemedio">{produto.Id}</p>
                                <p className="nomeRemedio">{produto.Nome}</p>
                                <p className="bulaRemedio">{produto.Bula}</p>
                            </div>
                        ))}
                            <div className="displayRemedio">
                                <p className="idRemedio">000001</p>
                                <p className="nomeRemedio">Paracetamól</p>
                                <p className="bulaRemedio">Esse medicamento é contra indicado em caso de suspeita de denge</p>
                            </div>
                </div>
            </div>
        </div>
    );
}
export default ConsultaRemedio;