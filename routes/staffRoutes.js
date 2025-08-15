const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');
const staffController = require('../controllers/staffController');
const permissions = require('../middleware/permission');

/**
 * @swagger
 * tags:
 *   name: Staff
 *   description: Gestion du personnel
 */

/**
 * @swagger
 * /staff/staff:
 *   post:
 *     summary: Ajouter un nouveau membre du personnel
 *     tags: [Staff]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               role:
 *                 type: string
 *               email:
 *                 type: string
 *               phone:
 *                 type: string
 *     responses:
 *       201:
 *         description: Membre du personnel créé
 *       400:
 *         description: Erreur de validation
 */
router.post('/staff',
    authMiddleware,
    roleMiddleware('staff','create'),
    staffController.create
);

/**
 * @swagger
 * /staff/staff/planning:
 *   get:
 *     summary: Obtenir le planning du personnel
 *     tags: [Staff]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Planning du personnel
 */
router.get('/staff/planning',
    authMiddleware,
    roleMiddleware('staff','viewPlanning'),
    staffController.getStaffPlanning
);

/**
 * @swagger
 * /staff/staff/{id}:
 *   delete:
 *     summary: Supprimer un membre du personnel
 *     tags: [Staff]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID du membre du personnel
 *     responses:
 *       200:
 *         description: Membre du personnel supprimé
 *       404:
 *         description: Personnel non trouvé
 */
router.delete('/staff/:id',
    authMiddleware,
    roleMiddleware('staff','delete'),
    staffController.deleteStaff
);

/**
 * @swagger
 * /staff/staff/all:
 *   get:
 *     summary: Obtenir tous les membres du personnel
 *     tags: [Staff]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Liste du personnel
 */
router.get('/staff/all',
    authMiddleware,
    roleMiddleware('staff','viewAll'),
    staffController.getAllStaff
);

/**
 * @swagger
 * /staff/staff/{id}:
 *   get:
 *     summary: Obtenir un membre du personnel par ID
 *     tags: [Staff]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID du membre du personnel
 *     responses:
 *       200:
 *         description: Détails du membre du personnel
 *       404:
 *         description: Personnel non trouvé
 */
router.get('/staff/:id',
    authMiddleware,
    roleMiddleware('staff','view'),
    staffController.getStaffById
);

/**
 * @swagger
 * /staff/staff/bulk:
 *   post:
 *     summary: Ajouter plusieurs membres du personnel en une seule requête
 *     tags: [Staff]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: array
 *             items:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                 role:
 *                   type: string
 *                 email:
 *                   type: string
 *                 phone:
 *                   type: string
 *     responses:
 *       201:
 *         description: Membres du personnel ajoutés
 */
router.post('/staff/bulk',
    authMiddleware,
    roleMiddleware('staff','create'),
    staffController.insertBulkStaff
);

module.exports = router;
