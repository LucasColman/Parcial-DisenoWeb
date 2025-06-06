
/* 
Lucas COLMAN */


<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = htmlspecialchars($_POST["nombre"]);
    $email = htmlspecialchars($_POST["email"]);


    echo "<h2>¡Gracias por suscribirte, $nombre!</h2>";
    echo "<p>Te enviaremos recetas a <strong>$email</strong>.</p>";
    echo "<a href='index.html'>Volver</a>";
} else {
    header("Location: index.html");
}
?>
