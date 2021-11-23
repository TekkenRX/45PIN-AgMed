<?php

namespace AgMed\Model\Entity;

use AgMed\Model\Entity\BaseEntity;
use AgMed\Model\Date;
use JsonSerializable;

class Person implements BaseEntity, JsonSerializable
{
    /** @GeneratedValue */
    private $id;

    /** @var AgMed\Model\Entity\Documents $id_documents*/
    private $id_documents;

    /** @var AgMed\Model\Entity\Address   $id_address*/
    private $id_address;

    /** @var AgMed\Model\Entity\Contact   $id_contact*/
    private $id_contact;

    /** @var AgMed\Model\Date             $age*/
    private $age;

    /** @var string*/
    private $name;

    /** @var string*/
    private $surname;

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
     * Get the value of documents
     * @return int|Documents|null
     */
    public function getDocuments()
    {
        return $this->documents;
    }

    /**
     * Set the value of documents
     * @param int|Documents|null $documents
     */
    public function setDocuments($documents)
    {
        $this->documents = $documents;
    }

    /**
     * Get the value of address
     * @return int|Address|null
     */
    public function getAddress()
    {
        return $this->address;
    }

    /**
     * Set the value of address
     * @param int|Address|null $address
     */
    public function setAddress($address)
    {
        $this->address = $address;
    }

    /**
     * Get the value of contact
     * @return int|Contact|null
     */
    public function getContact()
    {
        return $this->contact;
    }

    /**
     * Set the value of contact
     * @param int|Contact|null $contact
     */
    public function setContact($contact)
    {
        $this->contact = $contact;
    }

    /**
     * Get the value of contact
     * @param dateTime|null $age
     */
    public function getAge($format = false)
    {
        return $format ? Date::convDatetimeToString($this->age, Date::DATAHORASEMSEGUNDOS_FORMAT) : $this->age;
    }

    /**
     * Modifica o valor de age da entidade
     * @param dateTime|null $age
     */
    public function setAge($age)
    {
        $this->age = $age;
    }

    /**
     * Obtém o name da entidade
     * @return string|null
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Modifica o valor de name da entidade
     * @param string|null $name
     */
    public function setName($name)
    {
        $this->name = $name;
    }

    /**
     * Obtém o surname da entidade
     * @return string|null
     */
    public function getSurname()
    {
        return $this->surname;
    }

    /**
     * Modifica o valor de surname da entidade
     * @param string|null $surname
     */
    public function setSurname($surname)
    {
        $this->surname = $surname;
    }

    /** @return array */
    public function jsonSerialize()
    {
        return [
            'id'        => $this->getId(),
            'documents' => $this->getDocuments(),
            'address'   => $this->getAddress(),
            'contact'   => $this->getContact(),
            'age'       => $this->getAge(),
            'name'      => $this->getName(),
            'surname'   => $this->getSurname(),
        ];
    }
}
