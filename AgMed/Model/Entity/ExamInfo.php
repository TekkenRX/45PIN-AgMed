<?php

namespace AgMed\Model\Entity;

use AgMed\Model\Entity\BaseEntity;
use AgMed\Model\Date;
use JsonSerializable;

class ExamInfo implements BaseEntity, JsonSerializable
{
    /** @GeneratedValue */
    private $id;

    /** @var AgMed\Model\Entity\Procedure $id_procedure*/
    private $id_procedure;

    /** @var AgMed\Model\Entity\Login $login*/
    private $login;

    /** @var string $desc*/
    private $desc;

    /** @var AgMed\Model\Date $timeframe*/
    private $timeframe;

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
     * Obtém o id_procedure da entidade
     * @return int|Procedure|null
     */
    public function getProcedure()
    {
        return $this->id_procedure;
    }

    /**
     * Modifica o valor de id_procedure da entidade
     * @param int|Procedure|null $id_procedure
     */
    public function setProcedure($id_procedure)
    {
        $this->id_procedure = $id_procedure;
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
     * Get the value of timeframe
     * @param dateTime|null $age
     */
    public function getTimeframe($format = false)
    {
        return $format ? Date::convDatetimeToString($this->timeframe, Date::DATAHORASEMSEGUNDOS_FORMAT) : $this->timeframe;
    }

    /**
     * Modifica o valor de timeframe da entidade
     * @param dateTime|null $timeframe
     */
    public function setTimeframe($timeframe)
    {
        $this->timeframe = $timeframe;
    }

    /** @return array */
    public function jsonSerialize()
    {
        return [
            'id'        => $this->getId(),
            'producere' => $this->getProcedure(),
            'login'     => $this->getLogin(),
            'desc'      => $this->getDesc(),
            'timeframe' => $this->getTimeframe(),
        ];
    }
}
