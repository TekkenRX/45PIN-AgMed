<?php

namespace AgMed\Controller;

use AgMed\Model\Entity\Login;
use AgMed\Model\Repository\LoginRepository;
use AgMed\Controller\BaseController;

class LoginController extends BaseController
{
    /** @var Login */
    public $entity;

    /** @var LoginRepository */
    public $repository;

    public function index()
    {
    }

    public function form()
    {
    }

    public function save($oEntity)
    {
        parent::save($oEntity);
    }

    public function remove($iId)
    {
        parent::remove($iId);
    }

    public function getAll()
    {
        parent::getAll();
    }

    public function getById($iId)
    {
        parent::getById($iId);
    }

    public function update($oEntity)
    {
        parent::update($oEntity);
    }

    public function getLoginRepository()
    {
        $this->repository = parent::getRepository();
    }

    public function getEntityName()
    {
        if (!isset($this->entityName)) {
            $this->entityName = 'Login';
        }

        return $this->entityName;
    }
}
