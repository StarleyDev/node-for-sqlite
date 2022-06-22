// Gerencia rotas de execução em banco de dados
/**
 * @author Starley Cazorla
 */

'use sctict'

const express = require('express');
const router = express.Router();

/** Criação de banco de dados */
const createController = require('../controllers/db-controller/create-controller');
/** Execução de consultas SQL em geral */
const executeController = require('../controllers/db-controller/execute-controller');
/** Execução de inserts */
const insertController = require('../controllers/db-controller/insert-controller');

router.post('/create', createController.post);
router.post('/execute', executeController.post);
router.post('/insert', insertController.post);

module.exports = router;