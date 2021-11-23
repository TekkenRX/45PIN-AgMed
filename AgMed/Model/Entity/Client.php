<?php

namespace AgMed\Model\Entity;

use AgMed\Model\Entity\BaseEntity;
use JsonSerializable;

class Client implements BaseEntity, JsonSerializable
{
    /** @GeneratedValue */
    private $id;

    /** @var AgMed\Model\Entity\Person $id_person*/
    private $id_person;

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
     * Get the value of person
     * @return int|Person|null
     */
    public function getPerson()
    {
        return $this->id_person;
    }

    /**
     * Set the value of id_person
     * @param int|Person|null $id_person
     */
    public function setPerson($id_person)
    {
        $this->id_person = $id_person;
    }


    /** @return array */
    public function jsonSerialize()
    {
        return [
            'id'     => $this->getId(),
            'person' => $this->getPerson(),
        ];
    }
}
