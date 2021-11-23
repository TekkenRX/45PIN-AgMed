<?php

namespace AgMed\Model\Entity;

use AgMed\Model\Entity\BaseEntity;
use JsonSerializable;

class StaffMember implements BaseEntity, JsonSerializable
{
    /** @GeneratedValue */
    private $id;

    /** @var AgMed\Model\Entity\Employee $id_employee*/
    private $id_employee;

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
     * Obtém o id_employee da entidade
     * @return int|Employee|null
     */
    public function getEmployee()
    {
        return $this->id_employee;
    }

    /**
     * Modifica o valor de id_employee da entidade
     * @param int|Employee|null $id_employee
     */
    public function setEmployee($id_employee)
    {
        $this->id_employee = $id_employee;
    }

    /** @return array */
    public function jsonSerialize()
    {
        return [
            'id'       => $this->getId(),
            'employee' => $this->getEmployee(),
        ];
    }
}
