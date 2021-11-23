<?php

namespace AgMed\Model\Entity;

use AgMed\Model\Entity\BaseEntity;
use JsonSerializable;

class Schedule implements BaseEntity, JsonSerializable
{
    /** @GeneratedValue */
    private $id;

    /** @var AgMed\Model\Entity\Day $day*/
    private $day;

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
     * Obtém o day da entidade
     * @return int|null
     */
    public function getDay()
    {
        return $this->day;
    }

    /**
     * Modifica o valor de day da entidade
     * @param int|null $day
     */
    public function setDay($day)
    {
        $this->day = $day;
    }

    /** @return array */
    public function jsonSerialize()
    {
        return [
            'id'  => $this->getId(),
            'day' => $this->getDay(),
        ];
    }
}
