<?php
require_once('../Models/cls_demografia.model.php');
$demografia = new Clase_Demografia;
switch ($_GET["op"]) {
    case 'todos':
        $datos = array(); 
        $datos = $demografia->todos(); 
        while ($fila = mysqli_fetch_assoc($datos)) {
            $todos[] = $fila;
        }
        echo json_encode($todos); 
        break;
    case "uno":
        $ID = $_POST["ID"]; 
        $datos = array(); 
        $datos = $demografia->uno($ID); 
        $uno = mysqli_fetch_assoc($datos);
        echo json_encode($uno); 
        break;
    case 'insertar':
        $Nombre = $_POST["Nombre"];
        $Apellido = $_POST["Apellido"];
        $Edad = $_POST["Edad"];
        $Genero = $_POST["Genero"];
        $Ciudad = $_POST["Ciudad"];
        $Pais = $_POST["Pais"];
        $datos = array(); 
        $datos = $demografia->insertar($Nombre, $Apellido, $Edad, $Genero, $Ciudad,  $Pais); 
        echo json_encode($datos); 
        break;    
    case 'actualizar':
        $ID = $_POST["ID"];
        $Nombre = $_POST["Nombre"];
        $Apellido = $_POST["Apellido"];
        $Edad = $_POST["Edad"];
        $Genero = $_POST["Genero"];
        $Ciudad = $_POST["Ciudad"];
        $Pais = $_POST["Pais"];
        $datos = array(); 
        $datos = $demografia->actualizar($ID, $Nombre, $Apellido, $Edad, $Genero, $Ciudad, $Pais); 
        echo json_encode($datos); 
        break;
    case 'eliminar':
        $ID = $_POST["ID"]; 
        $datos = array();
        $datos = $demografia->eliminar($ID); 
        echo json_encode($uno); 
        break;
    }