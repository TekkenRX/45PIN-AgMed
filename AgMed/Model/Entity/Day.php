<?php

namespace AgMed\Model\Entity;

use AgMed\Model\Entity\BaseEntity;
use JsonSerializable;
use AgMed\Model\Date;

class Day implements BaseEntity, JsonSerializable
{
    /** @GeneratedValue */
    private $id;

    /** @var int*/
    private $weekday;

    /** @var AgMed\Model\Date $reservation*/
    private $reservation;

    const sun = 1;
    const mon = 2;
    const tue = 3;
    const wed = 4;
    const thu = 5;
    const fri = 6;
    const sat = 7;

    /**
     * Obtém o id da entidade
     * @return int|null
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Modifica o valor de id da entidade
     * @param int|null $iID
     */
    public function setId($iID)
    {
        $this->id = $iID;
    }

    /**
     * Obtém o weekday da entidade
     * @return int|null
     */
    public function getWeekday()
    {
        return $this->weekday;
    }

    /**
     * Modifica o valor de weekday da entidade
     * @param int|null $weekday
     */
    public function setWeekday($weekday)
    {
        $this->weekday = $weekday;
    }

    /**
     * Get the value of reservation
     * @param dateTime|null $reservation
     */
    public function getReservation($format = false)
    {
        return $format ? Date::convDatetimeToString($this->reservation, Date::DATAHORASEMSEGUNDOS_FORMAT) : $this->reservation;
    }

    /**
     * Modifica o valor de reservation da entidade
     * @param dateTime|null $reservation
     */
    public function setReservation($reservation)
    {
        $this->reservation = $reservation;
    }

    public static function getListaWeekday()
    {
        return [
            self::sun => 'sunday',
            self::mon => 'monday',
            self::tue => 'tuesday',
            self::wed => 'wednesday',
            self::thu => 'thuesday',
            self::fri => 'friday',
            self::sat => 'saturday',
        ];
    }

    /** @return array */
    public function jsonSerialize()
    {
        return [
            'id'            => $this->getId(),
            'weekday'       => $this->getWeekday(),
            'reservation'   => $this->getReservation(),
            'lista de dias' => $this->getListaWeekday(),
        ];
    }
}
