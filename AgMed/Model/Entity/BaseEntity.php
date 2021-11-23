<?php

namespace AgMed\Model\Entity;

/**
 * Mark Interface
 */
interface BaseEntity
{
    /**
     * Obtém o id da entidade
     * @return int|null
     */
    public function getId();

    /**
     * Modifica o valor de id da entidade
     * @param int|null $iID
     */
    public function setId($iID);
}
