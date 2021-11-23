<?php

namespace AgMed\Model\Entity;

use AgMed\Model\Entity\BaseEntity;
use JsonSerializable;

class Producere implements BaseEntity, JsonSerializable
{
    /** @GeneratedValue */
    private $id;

    /** @var AgMed\Model\Entity\Doctor $id_doctor*/
    private $id_doctor;

    /** @var string $desc*/
    private $desc;

    /** @var string $price*/
    private $price;

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
     * Obtém o id_doctor da entidade
     * @return int|Doctor|null
     */
    public function getDoctor()
    {
        return $this->id_doctor;
    }

    /**
     * Modifica o valor de id_doctor da entidade
     * @param int|Doctor|null $id_doctor
     */
    public function setDoctor($id_doctor)
    {
        $this->id_doctor = $id_doctor;
    }

    /**
     * Obtém o desc da entidade
     * @return string|null
     */
    public function getDesc()
    {
        return $this->desc;
    }

    /**
     * Modifica o valor de desc da entidade
     * @param string|null $desc
     */
    public function setDesc($desc)
    {
        $this->desc = $desc;
    }

    /**
     * Obtém o price da entidade
     * @return string|null
     */
    public function getPrice()
    {
        return $this->price;
    }

    /**
     * Modifica o valor de price da entidade
     * @param string|null $price
     */
    public function setPrice($price)
    {
        $this->price = $price;
    }

    /** @return array */
    public function jsonSerialize()
    {
        return [
            'id'    => $this->getId(),
            'dotor' => $this->getDoctor(),
            'desc'  => $this->getDesc(),
            'price' => $this->getPrice(),
        ];
    }
}
