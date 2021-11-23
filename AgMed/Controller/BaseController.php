<?php

namespace AgMed\Controller;



class BaseController
{

    /** @var AgMed\Model\Entity\ */
    public $entity;

    /** @var AgMed\Model\Repository\ */
    public $repository;

    /** @var string */
    public $entityName;

    public function index()
    {
        //precisa ser sobrescrito
    }

    public function form()
    {
        //precisa ser sobrescrito
    }

    public function save($oEntity)
    {
        if (!$this->entity) {
            return;
        }
        $this->getRepository()->save($oEntity);
    }

    public function remove($iId)
    {
        if (!$this->entity) {
            return;
        }
        $this->getRepository()->remove($iId);
    }

    public function getAll()
    {
        if (!$this->entity) {
            return;
        }
        $this->getRepository()->getAll();
    }

    public function getById($iId)
    {
        if (!$this->entity) {
            return;
        }
        $this->getRepository()->getById($iId);
    }

    public function update($oEntity)
    {
        if (!$this->entity) {
            return;
        }
        $this->getRepository()->updade($oEntity);
    }


    /**
     * Retorna uma instaria do repositório da entidade
     * @return Repository
     */
    protected function getInstanceRepository($EntityName)
    {
        $xClass = 'AgMed\Model\Repository\\' . $EntityName . 'Repository';
        return new $xClass();
    }

    /**
     * Retorna a instância do repositório
     * @return Repository
     */
    protected function getRepository()
    {
        if (!isset($this->repository)) {
            $this->repository = $this->getInstanceRepository($this->getEntityName());
        }
        return $this->repository;
    }

    public function getEntityName()
    {
        //precisa ser sobrescrito
    }
}
