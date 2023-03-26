import React from "react";
import { useEffect, useState } from "react";
function HomeLogado() {


  
    const [data, setData] = useState([]);

    
    const getProdutos = async () => {
        fetch("http://localhost/Projeto-Help-Health/src/api/consulta-hospital.php")
        .then((response) => response.json())
        .then((responseJson)=>(
          console.log(responseJson),
          setData(responseJson.records)
        ));
    }
    useEffect(() =>{
        getProdutos();
    },[]);


  
  
  
    
  return(
    
    <div className="fundologado">
      <main className="mainlogado">
          <h2 className="msghomelogin">Ola usuario! O que deseja ver hoje?</h2>
          <div className="areapesquisa">
           <label className="areabuscarhospital">procurando uma unidade de saude?
            <select type="text" className="buscarhospital" placeholder="digite aqui" id="btnCarregar">
            {Object.values(data).map(produto=> (
                            
                                <option className="idRemedio" key={produto.IdUnidade}>{produto.nome}</option>
                                
                        ))}
            </select>

           </label>
          </div>
          <div className="opcoeslogado">
              <div className="remedios"> <img src="../img/remedioopcao.png" className="remedioopcao"/>Remédios</div>
              <div className="feedbacks"><img src="../img/feedbackopcao.png" className="feedbackopcao"/> Feedbacks</div>
           </div>
          
      </main>
    </div>
  )
}
 export default HomeLogado ;    



