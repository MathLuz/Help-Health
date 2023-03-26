<?php
//cabecalhos obrigatorios
header("Access-Control-Allow-Origin: *");
header("Content-type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: GET,PUT,POST,DELETE");
//incluindo banco
include_once 'connect.php' ;

// $id = 6;

$query = "SELECT Id, Nome, Bula FROM remedio ORDER BY Id DESC";
$resultProdutos = $conexao->prepare($query);      
$resultProdutos->execute();

if(($resultProdutos) AND ($resultProdutos->rowCount() != 0)){
    while($rowProduto = $resultProdutos->fetch(PDO::FETCH_ASSOC)){
        extract($rowProduto);
        

        $listaProdutos["records"][$Id] = [
            'Id' => $Id,
            'Nome' => $Nome,
            'Bula' => $Bula
        ];
    }
    //resposta

    http_response_code(200);

    //retorno de resposta
    echo json_encode($listaProdutos);
    
}

?>