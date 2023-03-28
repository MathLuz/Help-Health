
<?php 

        $servidor = "localhost";
        $user = "root";
        $password = "";
        $dbname = "help-health" ;
        // $port = "3307";

        //conexao sem a porta
        try {
        $conexao = new PDO("mysql:host=$servidor;dbname=" . $dbname, $user, $password);
        $conexao->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch(PDOException $e) {
                echo 'ERROR: ' . $e->getMessage();      
        }

?>
