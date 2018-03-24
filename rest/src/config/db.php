<?php
    class db{
        private $dbhost = 'unipufoodorder.czlrnz7ytpwm.eu-central-1.rds.amazonaws.com';
        private $dbuser = 'rest';
        private $dbpass = 'restOdmaraIbasMuJeDobro';
        private $dbname = 'unipufoodshop';

        public function connect(){
            $mysql_connect_str = "mysql:host=$this->dbhost;dbname=$this->dbname";
            $dbConnection = new PDO($mysql_connect_str, $this->dbuser, $this->dbpass, array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
            $dbConnection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return $dbConnection;
        }
    }