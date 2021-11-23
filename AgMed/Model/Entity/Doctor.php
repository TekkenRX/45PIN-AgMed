<?php

namespace AgMed\Model\Entity;

use AgMed\Model\Entity\BaseEntity;
use JsonSerializable;

class Doctor implements BaseEntity, JsonSerializable
{
    /** @GeneratedValue */
    private $id;

    /** @var AgMed\Model\Entity\Employee $id_employee*/
    private $id_employee;

    /** @var AgMed\Model\Entity\Login $login*/
    private $login;

    /** @var string $crm*/
    private $crm;

    /** @var string $degree*/
    private $degree;

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

    /**
     * Obtém o login da entidade
     * @return int|null
     */
    public function getLogin()
    {
        return $this->login;
    }

    /**
     * Modifica o valor de login da entidade
     * @param int|null $login
     */
    public function setLogin($login)
    {
        $this->login = $login;
    }

    /**
     * Obtém o crm da entidade
     * @return string|null
     */
    public function getCrm()
    {
        return $this->crm;
    }

    /**
     * Modifica o valor de role da entidade
     * @param string|null $crm
     */
    public function setCrm($crm)
    {
        $this->crm = $crm;
    }

    /**
     * Obtém o degree da entidade
     * @return string|null
     */
    public function getDegree()
    {
        return $this->degree;
    }

    /**
     * Modifica o valor de degree da entidade
     * @param string|null $degree
     */
    public function setDegree($degree)
    {
        $this->degree = $degree;
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
