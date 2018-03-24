<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

$app = new \Slim\App;

// Route na meals
$app->get('/api/meals', function(Request $request, Response $response){

    $sql = "SELECT * FROM meals";

    try{
        $db = new db();
        $db = $db->connect();

        $stmt = $db->query($sql);
        $meals = $stmt->fetchAll(PDO::FETCH_OBJ);
        $db = null;
        echo json_encode($meals);

    } catch (PDOException $e){
        echo '{"error": {"text": '.$e->getMessage().'}';
    }

});

// Route na restaurants
$app->get('/api/restaurants', function(Request $request, Response $response){

    $sql = "SELECT * FROM restaurants";

    try{
        $db = new db();
        $db = $db->connect();

        $stmt = $db->query($sql);
        $restaurants = $stmt->fetchAll(PDO::FETCH_OBJ);
        $db = null;
        echo json_encode($restaurants);

    } catch (PDOException $e){
        echo '{"error": {"text": '.$e->getMessage().'}';
    }

});