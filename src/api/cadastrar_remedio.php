<?php
//cabecalhos obrigatorios
header("Access-Control-Allow-Origin: *");
header("Content-type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: GET,PUT,POST,DELETE");
//incluindo banco
include_once 'connect.php' ;

$resposta_json  = file_get_contents("php://input");
$dados   =  json_decode($resposta_json, true);




if ($dados){                                                            

 
  $query_remedio = "INSERT INTO remedio (Nome, Bula) VALUES(:nome, :bula)";        //inves de colocar dentro de value os valores colocamos links qque abaixo usando bind
   $cad_Remedio = $conexao->prepare($query_remedio);      //aqui conecta com o banco                                         //param pegamos eles e atribuimos os valores

   $cad_Remedio->bindParam(':nome',$dados['Remedio']['nome'], PDO::PARAM_STR);                  //esse PDO PARAM_STR eh pra dizer que e uma string uma parada assim as vezes n precisa usar 
   $cad_Remedio->bindParam(':bula',$dados['Remedio']['bula'], PDO::PARAM_STR); 
   
   

    $cad_Remedio-> execute();                                                                   //executa a parada                                                   

    if($cad_Remedio->rowCount()){
        $resposta =[
            "erro"=> false,                                                                 
            "mensagem"=> "cadastrado com sucesso!"
        ];
    }else{
            $resposta =[
                 "erro"=> true,
                "mensagem"=> "usuario nao cadastrado"
            ];
    }
}else{
    $resposta =[
                 "erro"=> true,
                "mensagem"=> "usuario nao cadastrado"
            ];
}   


http_response_code(200 );
echo json_encode($resposta);                    //pra mostrar a resposta

?>