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


$query = "SELECT IdUser, Email FROM cadastro WHERE Email = :email";
$resultUser = $conexao->prepare($query);      

// $resultUser->bindParam(':iduser',$dados['usuario']['IdUser'], PDO::PARAM_STR); 
// $resultUser->bindParam(':nome',$dados['usuario']['nome'], PDO::PARAM_STR);                  //esse PDO PARAM_STR eh pra dizer que e uma string uma parada assim as vezes n precisa usar 
$resultUser->bindParam(':email',$dados['usuario']['email'], PDO::PARAM_STR); 
// $resultUser->bindParam(':senha',$dados['usuario']['senha'], PDO::PARAM_STR); 

$resultUser->execute();

$email2 =  $dados["usuario"]["email"]; //email do usuario

if(($resultUser) AND ($resultUser->rowCount() != 0)){
    while($rowUser = $resultUser->fetch(PDO::FETCH_ASSOC)){
        extract($rowUser);
         

        $listaUser["records"] = [
            'IdUser' => $IdUser,
            'Email'     => $Email,
            // 'Password'  => $Password, 
            // 'HashPass'  => $HashPass, 
            // 'idStatus'  => $idStatus
            'email2' => $email2
        ];
    }
    // resposta


    if(($email2 === $Email) && ($idStatus <> 1) && ($PasswordCript === $Password)){
        $resposta =[
            "erro"=> false,                                                                 
            "mensagem"=> "Usuario valido!"
        ];
    }else{
        $resposta =[
            "erro"=> true,
           "mensagem"=> "Usuario ou Senha invalido! 2"
       ];
    };}else{
        $resposta =[
                     "erro"=> true,
                    "mensagem"=> "usuario nao cadastrado"
                ];
    
    http_response_code(200);
    // echo json_encode($resposta_json);
    //retorno de resposta
    // echo $email2;
    echo json_encode($listaUser);
    // echo json_encode($resposta);                    //pra mostrar a resposta
    
}