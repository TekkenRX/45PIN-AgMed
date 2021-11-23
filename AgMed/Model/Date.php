<?php

namespace AgMed\Model;

use \Datetime;

abstract class Date
{
    // Formatos suportados pela Classe.
    const DATAHORA_FORMAT = 'd/m/Y H:i:s';
    const DATAHORASEMSEGUNDOS_FORMAT = 'd/m/Y H:i';
    const DATA_FORMAT = 'd/m/Y';

    function __construct()
    {
    }

    /**
     * Converte a $data (instância de DateTime) para o formato string.
     * 
     * @param $data DateTime
     * @param $formato String Formato da string de saída.
     * 
     * @return String
     **/
    static function convDatetimeToString($data, $formato = self::DATAHORA_FORMAT)
    {
        return is_object($data) ? $data->format($formato) : '';
    }

    /**
     * Converte a $data (String) para o formato DateTime.
     * 
     * @param $data String Data no formato string.
     * @param $formato String Formato da string de entrada.
     * 
     * @return DateTime
     **/
    static function convStringToDatetime($data, $formato = self::DATAHORA_FORMAT)
    {
        return DateTime::createFromFormat($formato, $data);
    }
}
