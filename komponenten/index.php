<?php

define("DB_ERROR", '[{"fehler":"Datenbankverbindung fehlgeschlagen"},{"code":"FAILED_DB_CONNECTION"},{"nachricht":"Der Aufbau einer Datenbankverbindung ist fehlgeschlagen"}]');
define("NO_PARAM", '[{"fehler":"Kein gültiger Parameter angegeben"},{"code":"NO_PARAM_PASSED"},{"nachricht":"Es wurde keine gültige Komponente übergeben."}]');
//============== DB-Verbindung =================
require_once '../classes/dbverbindung.class.php';
require_once '../classes/komponente.class.php';

//TODO: komponente aufrufen

try {
    $db = new DBVerbindung();
} catch (Exception $ex) {
    echo DB_ERROR;
    exit;
}
if (isset($_GET['teil'])) {
    header('Content-Type: application/json');
    switch ($_GET['teil']) {
        default:
            echo NO_PARAM;
            break;
        case 'case':
            Komponente::Gehauese($db);
            break;
        case 'formfaktor':
            Komponente::Formfaktor($db);
            break;
        case 'cpu':
            Komponente::CPU($db);
            break;
        case 'cpucooler':
            Komponente::CPUCooler($db);
            break;
        case 'cpucoolersock':
            Komponente::CPUCoolersock($db);
            break;
        case 'else':
            Komponente::Sonstiges($db);
            break;
        case 'festplatte':
            Komponente::Festplatte($db);
            break;
        case 'gpu':
            Komponente::GPU($db);
            break;
        case 'laufwerk':
            Komponente::Laufwerk($db);
            break;
        case 'modding':
            Komponente::Modding($db);
            break;
        case 'motherboard':
            Komponente::Motherboard($db);
            break;
        case 'netzteil':
            Komponente::Netzteil($db);
            break;
        case 'os':
            Komponente::OS($db);
            break;
        case 'pack':
            Komponente::Pack($db);
            break;
        case 'ram':
            Komponente::RAM($db);
            break;
    }
} else {
    echo NO_PARAM;
}

