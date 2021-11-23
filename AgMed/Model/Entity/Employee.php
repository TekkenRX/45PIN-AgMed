<?php

namespace AgMed\Model\Entity;

use AgMed\Model\Entity\BaseEntity;
use JsonSerializable;

class Employee implements BaseEntity, JsonSerializable
{
    /** @GeneratedValue */
    private $id;

    /** @var AgMed\Model\Entity\Person $id_person*/
    private $id_person;

    /** @var AgMed\Model\Entity\Person $id_schedule*/
    private $id_schedule;

    /** @var string $role*/
    private $role;

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

    /**
     * Get the value of id_schedule
     * @return int|Schedule|null
     */
    public function getSchedule()
    {
        return $this->id_schedule;
    }

    /**
     * Set the value of id_schedule
     * @param int|Schedule|null $id_schedule
     */
    public function setSchedule($id_schedule)
    {
        $this->id_schedule = $id_schedule;
    }

    /**
     * Obtém o role da entidade
     * @return string|null
     */
    public function getRole()
    {
        return $this->role;
    }

    /**
     * Modifica o valor de role da entidade
     * @param string|null $role
     */
    public function setRole($role)
    {
        $this->role = $role;
    }

    /** @return array */
    public function jsonSerialize()
    {
        return [
            'id'       => $this->getId(),
            'person'   => $this->getPerson(),
            'schedule' => $this->getSchedule(),
            'role'     => $this->getRole(),
        ];
    }
}
