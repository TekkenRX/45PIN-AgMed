<?php

namespace AgMed\Model\Entity;

use AgMed\Model\Entity\BaseEntity;
use JsonSerializable;
use AgMed\Model\Date;

class Entry implements BaseEntity, JsonSerializable
{
    /** @GeneratedValue */
    private $id;

    /** @var AgMed\Model\Entity\Client $id_client*/
    private $id_client;

    /** @var AgMed\Model\Date $time*/
    private $time;

    /** @var string $entry*/
    private $entry;

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
     * Obtém o id_client da entidade
     * @return int|Client|null
     */
    public function getClient()
    {
        return $this->id_client;
    }

    /**
     * Modifica o valor de id_client da entidade
     * @param int|Client|null $id_client
     */
    public function setClient($id_client)
    {
        $this->id_client = $id_client;
    }

    /**
     * Get the value of time
     * @param dateTime|null $time
     */
    public function getTime($format = false)
    {
        return $format ? Date::convDatetimeToString($this->time, Date::DATAHORASEMSEGUNDOS_FORMAT) : $this->time;
    }

    /**
     * Modifica o valor de time da entidade
     * @param dateTime|null $time
     */
    public function setTime($time)
    {
        $this->time = $time;
    }

    /**
     * Obtém o entry da entidade
     * @return string|null
     */
    public function getEntry()
    {
        return $this->entry;
    }

    /**
     * Modifica o valor de entry da entidade
     * @param string|null $entry
     */
    public function setEntry($entry)
    {
        $this->entry = $entry;
    }

    /** @return array */
    public function jsonSerialize()
    {
        return [
            'id'       => $this->getId(),
            'client'   => $this->getClient(),
            'time'     => $this->getTime(),
            'entry'    => $this->getEntry(),
        ];
    }
}
