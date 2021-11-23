<?php

namespace AgMed\Model\Entity;

use AgMed\Model\Entity\BaseEntity;
use JsonSerializable;

class Contact implements BaseEntity, JsonSerializable
{
    /** @GeneratedValue */
    private $id;

    /** @var String */
    private $email;

    /** @var String */
    private $phone;

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
     * Obtém o email da entidade
     * @return string|null
     */
    public function getEmail()
    {
        return $this->email;
    }

    /**
     * Modifica o valor de rg da entidade
     * @param string|null $email
     */
    public function setEmail($email)
    {
        $this->email = $email;
    }

    /**
     * Obtém o phone da entidade
     * @return string|null
     */
    public function getPhone()
    {
        return $this->phone;
    }

    /**
     * Modifica o valor de rg da entidade
     * @param string|null $phone
     */
    public function setPhone($phone)
    {
        $this->phone = $phone;
    }

    /** @return array */
    public function jsonSerialize()
    {
        return [
            'id'    => $this->getId(),
            'email' => $this->getEmail(),
            'phone' => $this->getPhone(),
        ];
    }
}
