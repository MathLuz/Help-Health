
<?php 

        $servidor = "localhost";
        $user = "root";
        $password = "123";
        $dbname = "help-health" ;
        $port = "3307";

        //conexao sem a porta
        try {
        $conexao = new PDO("mysql:host=$servidor;port=$port;dbname=" . $dbname, $user, $password);
        $conexao->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch(PDOException $e) {
                echo 'ERROR: ' . $e->getMessage();      
        }

?>
