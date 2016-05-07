<?php

class Komponente {

    public static function Gehauese($db) {
        $stmt_case = $db->prepare("SELECT * FROM `Case`");
        $stmt_case->execute();
        echo json_encode($stmt_case->fetchAll(PDO::FETCH_ASSOC));
    }

    public static function Formfaktor($db) {
        $stmt_formfaktor = $db->prepare("SELECT * FROM `case-ff`");
        $stmt_formfaktor->execute();
        echo json_encode($stmt_formfaktor->fetchAll(PDO::FETCH_ASSOC));
    }

    public static function CPU($db) {
        $stmt_cpu = $db->prepare("SELECT * FROM `CPU`");
        $stmt_cpu->execute();
        echo json_encode($stmt_cpu->fetchAll(PDO::FETCH_ASSOC));
    }

    public static function CPUCooler($db) {
        $stmt_cpu_cooler = $db->prepare("SELECT * FROM `CPUcooler`");
        $stmt_cpu_cooler->execute();
        echo json_encode($stmt_cpu_cooler->fetchAll(PDO::FETCH_ASSOC));
    }

    public static function CPUCoolersock($db) {
        $stmt_cpu_cooler_sock = $db->prepare("SELECT * FROM `CPUcooler-sock`");
        $stmt_cpu_cooler_sock->execute();
        echo json_encode($stmt_cpu_cooler_sock->fetchAll(PDO::FETCH_ASSOC));
    }

    public static function Sonstiges($db) {
        $stmt_sonstiges = $db->prepare("SELECT * FROM `else`");
        $stmt_sonstiges->execute();
        echo json_encode($stmt_sonstiges->fetchAll(PDO::FETCH_ASSOC));
    }

    public static function Festplatte($db) {
        $stmt_festplatte = $db->prepare("SELECT * FROM `Festplatte`");
        $stmt_festplatte->execute();
        echo json_encode($stmt_festplatte->fetchAll(PDO::FETCH_ASSOC));
    }

    public static function GPU($db) {
        $stmt_gpu = $db->prepare("SELECT * FROM `GPU`");
        $stmt_gpu->execute();
        echo json_encode($stmt_gpu->fetchAll(PDO::FETCH_ASSOC));
    }

    public static function Laufwerk($db) {
        $stmt_laufwerk = $db->prepare("SELECT * FROM `Laufwerk`");
        $stmt_laufwerk->execute();
        echo json_encode($stmt_laufwerk->fetchAll(PDO::FETCH_ASSOC));
    }

    public static function Modding($db) {
        $stmt_modding = $db->prepare("SELECT * FROM `Modding`");
        $stmt_modding->execute();
        echo json_encode($stmt_modding->fetchAll(PDO::FETCH_ASSOC));
    }

    public static function Motherboard($db) {
        $stmt_motherboard = $db->prepare("SELECT * FROM `Motherboard`");
        $stmt_motherboard->execute();
        echo json_encode($stmt_motherboard->fetchAll(PDO::FETCH_ASSOC));
    }

    public static function Netzteil($db) {
        $stmt_netzteil = $db->prepare("SELECT * FROM `Netzteil`");
        $stmt_netzteil->execute();
        echo json_encode($stmt_netzteil->fetchAll(PDO::FETCH_ASSOC));
    }

    public static function OS($db) {
        $stmt_os = $db->prepare("SELECT * FROM `OS`");
        $stmt_os->execute();
        echo json_encode($stmt_os->fetchAll(PDO::FETCH_ASSOC));
    }

    public static function Pack($db) {
        $stmt_pack = $db->prepare("SELECT * FROM `Pack`");
        $stmt_pack->execute();
        echo json_encode($stmt_pack->fetchAll(PDO::FETCH_ASSOC));
    }

    public static function RAM($db) {
        $stmt_ram = $db->prepare("SELECT * FROM `RAM`");
        $stmt_ram->execute();
        echo json_encode($stmt_ram->fetchAll(PDO::FETCH_ASSOC));
    }

}
