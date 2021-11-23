<?php

namespace AgMed\Model\Entity;

use AgMed\Model\Entity\BaseEntity;
use JsonSerializable;

class Address implements BaseEntity, JsonSerializable
{
    /** @GeneratedValue */
    private $id;

    /** @var String */
    private $uf;

    /** @var String */
    private $city;

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
     * Obtém o uf da entidade
     * @return string|null
     */
    public function getUf()
    {
        return $this->uf;
    }

    /**
     * Modifica o valor de uf da entidade
     * @param string|null $uf
     */
    public function setUf($uf)
    {
        $this->uf = $uf;
    }

    /**
     * Obtém o city da entidade
     * @return string|null
     */
    public function getCity()
    {
        return $this->city;
    }

    /**
     * Modifica o valor de city da entidade
     * @param string|null $city
     */
    public function setCity($city)
    {
        $this->city = $city;
    }

    /** @return array */
    public function jsonSerialize()
    {
        return [
            'id'   => $this->getId(),
            'city' => $this->getCity(),
            'uf'   => $this->getUf(),
        ];
    }
}
