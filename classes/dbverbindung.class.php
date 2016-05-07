<?php

class DBVerbindung extends PDO {

    private $host = "mysql:host=188.68.54.52;dbname=Hardware;charset=utf8";
    private $user = "Hardware";
    private $pass = "ibzf8540nv";

    public function __construct($dsn, $username = null, $password = null, array $options = null) {
        parent::__construct($this->host, $this->user, $this->pass, $options);
        $this->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }

}
