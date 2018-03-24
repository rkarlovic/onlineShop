<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: X-Requested-With, origin, content-type, accept');
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
        $table = $stmt->fetchAll(PDO::FETCH_OBJ);
        $db = null;
        echo json_encode($table);

    } catch (PDOException $e){
        echo '{"error": {"text": '.$e->getMessage().'}';
    }

});

// Route na jedan meal po id
$app->get('/api/meals/id/{id}', function(Request $request, Response $response){

    $id = $request->getAttribute('id');

    $sql = "SELECT * FROM meals WHERE id = $id";

    try{
        $db = new db();
        $db = $db->connect();

        $stmt = $db->query($sql);
        $table = $stmt->fetchAll(PDO::FETCH_OBJ);
        $db = null;
        echo json_encode($table);

    } catch (PDOException $e){
        echo '{"error": {"text": '.$e->getMessage().'}';
    }

});

// Route na meal po imenu
$app->get('/api/meals/meal_name/{meal_name}', function(Request $request, Response $response){

    $meal_name = $request->getAttribute('meal_name');

    $sql = "SELECT * FROM meals WHERE meal_name = $meal_name";

    try{
        $db = new db();
        $db = $db->connect();

        $stmt = $db->query($sql);
        $table = $stmt->fetchAll(PDO::FETCH_OBJ);
        $db = null;
        echo json_encode($table);

    } catch (PDOException $e){
        echo '{"error": {"text": '.$e->getMessage().'}';
    }

});

// Route na meal po cijeni
$app->get('/api/meals/price/{price}', function(Request $request, Response $response){

    $price = $request->getAttribute('price');

    $sql = "SELECT * FROM meals WHERE price = $price";

    try{
        $db = new db();
        $db = $db->connect();

        $stmt = $db->query($sql);
        $table = $stmt->fetchAll(PDO::FETCH_OBJ);
        $db = null;
        echo json_encode($table);

    } catch (PDOException $e){
        echo '{"error": {"text": '.$e->getMessage().'}';
    }

});


// Route dodaj meal
$app->post('/api/meals/add', function(Request $request, Response $response){

    $meal_name = $request->getParam('meal_name');
    $price = $request->getParam('price');
    $restaurant = $request->getParam('restaurant');
    $meal_type = $request->getParam('meal_type');
    $meal_size = $request->getParam('meal_size');
    $image = $request->getParam('image');

    $sql = "INSERT INTO meals (meal_name, price, restaurant, meal_type, meal_size, image) VALUES (:meal_name, :price, :restaurant, :meal_type, :meal_size, :image)";

    try{
        $db = new db();
        $db = $db->connect();

        $stmt = $db->prepare($sql);

        $stmt->bindParam(':meal_name', $meal_name);
        $stmt->bindParam(':price', $price);
        $stmt->bindParam(':restaurant', $restaurant);
        $stmt->bindParam(':meal_type', $meal_type);
        $stmt->bindParam(':meal_size', $meal_size);
        $stmt->bindParam(':image', $image);

        $stmt->execute();

        echo '{"notice": {"text": "Meal added"}}';

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
        $table = $stmt->fetchAll(PDO::FETCH_OBJ);
        $db = null;
        echo json_encode($table);

    } catch (PDOException $e){
        echo '{"error": {"text": '.$e->getMessage().'}';
    }

});

// Route na city
$app->get('/api/city', function(Request $request, Response $response){

    $sql = "SELECT * FROM city";

    try{
        $db = new db();
        $db = $db->connect();

        $stmt = $db->query($sql);
        $table = $stmt->fetchAll(PDO::FETCH_OBJ);
        $db = null;
        echo json_encode($table);

    } catch (PDOException $e){
        echo '{"error": {"text": '.$e->getMessage().'}';
    }

});

// Route na county
$app->get('/api/county', function(Request $request, Response $response){

    $sql = "SELECT * FROM county";

    try{
        $db = new db();
        $db = $db->connect();

        $stmt = $db->query($sql);
        $table = $stmt->fetchAll(PDO::FETCH_OBJ);
        $db = null;
        echo json_encode($table);

    } catch (PDOException $e){
        echo '{"error": {"text": '.$e->getMessage().'}';
    }

});

// Route na meal_sizes
$app->get('/api/meal_sizes', function(Request $request, Response $response){

    $sql = "SELECT * FROM meal_sizes";

    try{
        $db = new db();
        $db = $db->connect();

        $stmt = $db->query($sql);
        $table = $stmt->fetchAll(PDO::FETCH_OBJ);
        $db = null;
        echo json_encode($table);

    } catch (PDOException $e){
        echo '{"error": {"text": '.$e->getMessage().'}';
    }

});


// Route na meal_types
$app->get('/api/meal_types', function(Request $request, Response $response){

    $sql = "SELECT * FROM meal_types";

    try{
        $db = new db();
        $db = $db->connect();

        $stmt = $db->query($sql);
        $table = $stmt->fetchAll(PDO::FETCH_OBJ);
        $db = null;
        echo json_encode($table);

    } catch (PDOException $e){
        echo '{"error": {"text": '.$e->getMessage().'}';
    }

});


/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Route na orderDetails
$app->get('/api/orderDetails', function(Request $request, Response $response){

    $sql = "SELECT * FROM orderDetails";

    try{
        $db = new db();
        $db = $db->connect();

        $stmt = $db->query($sql);
        $table = $stmt->fetchAll(PDO::FETCH_OBJ);
        $db = null;
        echo json_encode($table);

    } catch (PDOException $e){
        echo '{"error": {"text": '.$e->getMessage().'}';
    }

});

// Route dodaj orderDetails
$app->post('/api/orderDetails/add', function(Request $request, Response $response){

    $orderID = $request->getParam('orderID');
    $meal = $request->getParam('meal');
    $amount = $request->getParam('amount');

    $sql = "INSERT INTO orderDetails (orderID, meal, amount) VALUES (:orderID, :meal, :amount)";

    try{
        $db = new db();
        $db = $db->connect();

        $stmt = $db->prepare($sql);

        $stmt->bindParam(':orderID', $orderID);
        $stmt->bindParam(':meal', $meal);
        $stmt->bindParam(':amount', $amount);


        $stmt->execute();

        echo '{"notice": {"text": "Order detail added"}}';

    } catch (PDOException $e){
        echo '{"error": {"text": '.$e->getMessage().'}';
    }

});


/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Route na orders
$app->get('/api/orders', function(Request $request, Response $response){

    $sql = "SELECT * FROM orders";

    try{
        $db = new db();
        $db = $db->connect();

        $stmt = $db->query($sql);
        $table = $stmt->fetchAll(PDO::FETCH_OBJ);
        $db = null;
        echo json_encode($table);

    } catch (PDOException $e){
        echo '{"error": {"text": '.$e->getMessage().'}';
    }

});

// Route dodaj order
$app->post('/api/orders/add', function(Request $request, Response $response){

    $orderedBy = $request->getParam('orderedBy');
    $orderTime = $request->getParam('orderTime');
    $orderAddress = $request->getParam('orderAddress');
    $meal = json_decode($request->getParam('meal'));
    $amount = json_decode($request->getParam('amount'));

    $sql = "INSERT INTO orders (orderedBy, orderTime, orderAddress) VALUES (:orderedBy, :orderTime, :orderAddress)";

    try{

        $db = new db();
        $db = $db->connect();

        $stmt = $db->prepare($sql);

        $stmt->bindParam(':orderedBy', $orderedBy);
        $stmt->bindParam(':orderTime', $orderTime);
        $stmt->bindParam(':orderAddress', $orderAddress);

        $stmt->execute();

        $sqlGET = "SELECT * FROM orders WHERE orderedBy LIKE '$orderedBy' AND orderTime LIKE '$orderTime' AND orderAddress LIKE '$orderAddress'";
        try{
            $dbGET = new db();
            $dbGET = $dbGET->connect();

            $stmtGET = $dbGET->query($sqlGET);
            $tableGET = $stmtGET->fetchAll(PDO::FETCH_OBJ);
            $dbGET = null;

            if ($orderedBy == $tableGET[0]->orderedBy && $orderTime == $tableGET[0]->orderTime && $orderAddress == $tableGET[0]->orderAddress){

                for ($i = 0; $i < count($meal)-1; $i++) {
                    $sqlOD = "INSERT INTO orderDetails (orderID, meal, amount) VALUES (:orderID, :meal, :amount)";
                    try{
                        $dbOD = new db();
                        $dbOD = $dbOD->connect();
                        $stmtOD = $dbOD->prepare($sqlOD);
                        $stmtOD->bindParam(':orderID', $tableGET[0]->id);
                        $stmtOD->bindParam(':meal', $meal[$i]);
                        $stmtOD->bindParam(':amount', $amount[$i]);
                        $stmtOD->execute();
                        echo '{"notice":"Order successful"}';
                    } catch (PDOException $e){
                        echo '{"notice":"Order failed"}';
                    }
                }

            } else {
                echo '{"notice":"Order failed"}';
            }


        } catch (PDOException $e){
            echo '{"notice":"Order failed"}';
        }

    } catch (PDOException $e){
        echo '{"notice":"Order failed"}';
    }
});

// Route TEST u orders
$app->get('/api/orders/test', function(Request $request, Response $response){

    $orderedBy = '13';
    $orderTime = '2018-01-26 00:05:22';
    $orderAddress = 'testg';

    $sqlGET = "SELECT * FROM orders WHERE orderedBy LIKE '$orderedBy' AND orderTime LIKE '$orderTime' AND orderAddress LIKE '$orderAddress'";
    try{
        $dbGET = new db();
        $dbGET = $dbGET->connect();

        $stmtGET = $dbGET->query($sqlGET);
        $tableGET = $stmtGET->fetchAll(PDO::FETCH_OBJ);
        $dbGET = null;
        //echo json_encode($tableGET);

        //echo count($tableGET);
        //echo $tableGET[0]->orderTime;
        //print_r($tableGET);

        if ($orderTime == $tableGET[0]->orderTime) echo "YIPIKAYYEMOFO";

        echo '{"notice": {"text": "Order added"}}';

    } catch (PDOException $e){
        echo '{"error": {"text": '.$e->getMessage().'}';
    }

});

// Route last ID u orders
$app->get('/api/orders/lastid', function(Request $request, Response $response){

    $sql = "SELECT MAX(id) AS lastid FROM orders";

    try{
        $db = new db();
        $db = $db->connect();

        $stmt = $db->query($sql);
        $table = $stmt->fetchAll(PDO::FETCH_OBJ);
        $db = null;
        echo json_encode($table);

    } catch (PDOException $e){
        echo '{"error": {"text": '.$e->getMessage().'}';
    }

});


/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Route na users
$app->get('/api/users', function(Request $request, Response $response){

    $sql = "SELECT id, email, first_name, last_name, address, city_zip_code  FROM users";

    try{
        //echo hash('sha3-512' , 'password1');
        $db = new db();
        $db = $db->connect();

        $stmt = $db->query($sql);
        $table = $stmt->fetchAll(PDO::FETCH_OBJ);
        $db = null;
        echo json_encode($table);

    } catch (PDOException $e){
        echo '{"error": {"text": '.$e->getMessage().'}';
    }

});


// Route na jedan user po id
$app->get('/api/users/id/{id}', function(Request $request, Response $response){

    $id = $request->getAttribute('id');

    $sql = "SELECT id, email, first_name, last_name, address, city_zip_code FROM users WHERE id = $id";

    try{
        $db = new db();
        $db = $db->connect();

        $stmt = $db->query($sql);
        $table = $stmt->fetchAll(PDO::FETCH_OBJ);
        $db = null;
        echo json_encode($table);

    } catch (PDOException $e){
        echo '{"error": {"text": '.$e->getMessage().'}';
    }

});

// Route na jedan user po emailu
$app->get('/api/users/email/{email}', function(Request $request, Response $response){

    $email = $request->getAttribute('email');

    $sql = "SELECT id, email, password FROM users WHERE email = '$email'";

    try{
        $db = new db();
        $db = $db->connect();

        $stmt = $db->query($sql);
        $table = $stmt->fetchAll(PDO::FETCH_OBJ);
        $db = null;
        echo json_encode($table);

    } catch (PDOException $e){
        echo '{"error": {"text": '.$e->getMessage().'}';
    }

});

// Route - mail i hash
$app->get('/api/users/login/{email}/{hash}', function(Request $request, Response $response){

    $email = $request->getAttribute('email');
    $hash = $request->getAttribute('hash');

    $sql = "SELECT id FROM users WHERE email = '$email' AND password = '$hash'";

    try{
        $db = new db();
        $db = $db->connect();

        $stmt = $db->query($sql);
        $table = $stmt->fetchAll(PDO::FETCH_OBJ);
        $db = null;
        echo json_encode($table);

    } catch (PDOException $e){
        echo '{"error": {"text": '.$e->getMessage().'}';
    }

});


// Route dodaj user
$app->post('/api/users/add', function(Request $request, Response $response){

    $email = $request->getParam('email');
    $password = $request->getParam('password');
    $first_name = $request->getParam('first_name');
    $last_name = $request->getParam('last_name');
    //$address = $request->getParam('address');
    //$city_zip_code = $request->getParam('city_zip_code');

    //$sql = "INSERT INTO users (email, password, first_name, last_name, address, city_zip_code) VALUES (:email, :password, :first_name, :last_name, :address, :city_zip_code)";
    $sql = "INSERT INTO users (email, password, first_name, last_name) VALUES (:email, :password, :first_name, :last_name)";

    try{
        $db = new db();
        $db = $db->connect();

        $stmt = $db->prepare($sql);

        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':password', $password);
        $stmt->bindParam(':first_name', $first_name);
        $stmt->bindParam(':last_name', $last_name);
        //$stmt->bindParam(':address', $address);
        //$stmt->bindParam(':city_zip_code', $city_zip_code);
        $stmt->execute();

        echo '{"notice": {"text": "User added"}}';

    } catch (PDOException $e){
        http_response_code(404);
        echo '{"notice":"User failed"}';
    }

});