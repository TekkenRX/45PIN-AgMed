<?php

namespace AgMed\Model\Entity;

use AgMed\Model\Entity\BaseEntity;
use JsonSerializable;

class Documents implements BaseEntity, JsonSerializable
{
    /** @GeneratedValue */
    private $id;

    /** @var String */
    private $cpf;

    /** @var String */
    private $rg;

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
     * Obtém o cpf da entidade
     * @return string|null
     */
    public function getCpf()
    {
        return $this->cpf;
    }

    /**
     * Modifica o valor de cpf da entidade
     * @param string|null $cpf
     */
    public function setCpf($cpf)
    {
        $this->cpf = $cpf;
    }

    /**
     * Obtém o rg da entidade
     * @return string|null
     */
    public function getRg()
    {
        return $this->rg;
    }

    /**
     * Modifica o valor de rg da entidade
     * @param string|null $rg
     */
    public function setRg($rg)
    {
        $this->rg = $rg;
    }

    /** @return array */
    public function jsonSerialize()
    {
        return [
            'id'  => $this->getId(),
            'cpf' => $this->getCpf(),
            'rg'  => $this->getRg(),
        ];
    }
}
