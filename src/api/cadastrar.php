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


   $query_usuario = "INSERT INTO cadastro (Nome, Email, Senha) VALUES(:nome, :email, :senha)";        //inves de colocar dentro de value os valores colocamos links qque abaixo usando bind
   $cad_Usuario = $conexao->prepare($query_usuario);      //aqui conecta com o banco                                         //param pegamos eles e atribuimos os valores

   $cad_Usuario->bindParam(':nome',$dados['usuario']['nome'], PDO::PARAM_STR);                  //esse PDO PARAM_STR eh pra dizer que e uma string uma parada assim as vezes n precisa usar 
   $cad_Usuario->bindParam(':email',$dados['usuario']['email'], PDO::PARAM_STR); 
   $cad_Usuario->bindParam(':senha',$dados['usuario']['senha'], PDO::PARAM_STR); 
   

    $cad_Usuario-> execute();                                                                   //executa a parada                                                   

    if($cad_Usuario->rowCount()){
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