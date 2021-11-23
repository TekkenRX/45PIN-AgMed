<?php

namespace AgMed\Model\Entity;

use AgMed\Model\Entity\BaseEntity;
use JsonSerializable;

class Login implements BaseEntity, JsonSerializable
{
    /** @GeneratedValue */
    private $id;

    /** @var AgMed\Model\Entity\Person $id_person*/
    private $id_person;

    /** @var string*/
    private $token;

    /** @var string*/
    private $login;

    /** @var string*/
    private $password;

    public function __construct()
    {
        //Gera uma string aleatória
        $token = openssl_random_pseudo_bytes(16);

        // converte a informação binária na representação hexadecimal
        $token = bin2hex($token);

        //insere o valor do token auto gerado dentro da entidade
        $this->setToken($token);
    }

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
     * Obtém o token da entidade
     * @return string|null
     */
    public function getToken()
    {
        return $this->token;
    }

    /**
     * Modifica o valor de token da entidade
     * @param string|null $token
     */
    public function setToken($token)
    {
        $this->token = $token;
    }

    /**
     * Obtém o login da entidade
     * @return string|null
     */
    public function getLogin()
    {
        return $this->login;
    }

    /**
     * Modifica o valor de login da entidade
     * @param string|null $login
     */
    public function setLogin($login)
    {
        $this->login = $login;
    }

    /**
     * Obtém o password da entidade
     * @return string|null
     */
    public function getPassword()
    {
        return $this->password;
    }

    /**
     * Modifica o valor de password da entidade
     * @param string|null $password
     */
    public function setPassword($password)
    {
        $this->password = $password;
    }

    /** @return array */
    public function jsonSerialize()
    {
        return [
            'id'       => $this->getId(),
            'person'   => $this->getPerson(),
            'token'    => $this->getToken(),
            'login'    => $this->getLogin(),
            'password' => $this->getPassword(),
        ];
    }
}
