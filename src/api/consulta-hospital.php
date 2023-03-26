<?php
//cabecalhos obrigatorios
header("Access-Control-Allow-Origin: *");
header("Content-type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: GET,PUT,POST,DELETE");
//incluindo banco
include_once 'connect.php' ;

// $id = 6;

$query = "SELECT IdUnidade, nome, Logradouro, Numero, Complemento, CEP, Bairro FROM tbunidadehospitalar ORDER BY IdUnidade DESC";
$resulthospital = $conexao->prepare($query);      
$resulthospital->execute();

if(($resulthospital) AND ($resulthospital->rowCount() != 0)){
    while($rowProduto = $resulthospital->fetch(PDO::FETCH_ASSOC)){
        extract($rowProduto);
        

        $listahospital["records"][$IdUnidade] = [
            'IdUnidade'  => $IdUnidade,
            'nome'       => $nome,
            'Logradouro' => $Logradouro,
            'Numero'     => $Numero,
            'Complemento'=> $Complemento,
            'CEP'        => $CEP,
            'Bairro'     => $Bairro
        ];
    }
    //resposta

    http_response_code(200);

    //retorno de resposta
    echo json_encode($listahospital);
}

?>