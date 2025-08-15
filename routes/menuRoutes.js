const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');
const menuController = require('../controllers/menuController');
const permissions = require('../middleware/permission');

/**
 * @swagger
 * tags:
 *   name: Menus
 *   description: Gestion des menus
 */

/**
 * @swagger
 * /menus/create:
 *   post:
 *     summary: Ajouter un nouveau menu
 *     tags: [Menus]
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
 *               price:
 *                 type: number
 *               description:
 *                 type: string
 *               category:
 *                 type: string
 *     responses:
 *       201:
 *         description: Menu créé
 *       400:
 *         description: Erreur de validation
 */
router.post(
    '/create',
    authMiddleware,
    roleMiddleware('menu', 'add'),
    menuController.create
);

/**
 * @swagger
 * /menus/{id}:
 *   put:
 *     summary: Mettre à jour un menu
 *     tags: [Menus]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID du menu
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               price:
 *                 type: number
 *               description:
 *                 type: string
 *               category:
 *                 type: string
 *     responses:
 *       200:
 *         description: Menu mis à jour
 *       404:
 *         description: Menu non trouvé
 */
router.put(
    '/:id',
    authMiddleware,
    roleMiddleware('menu', 'update'),
    menuController.updateMenu
);

/**
 * @swagger
 * /menus/{id}:
 *   delete:
 *     summary: Supprimer un menu
 *     tags: [Menus]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID du menu
 *     responses:
 *       200:
 *         description: Menu supprimé
 *       404:
 *         description: Menu non trouvé
 */
router.delete(
    '/:id',
    authMiddleware,
    roleMiddleware('menu', 'delete'),
    menuController.deleteMenu
);

/**
 * @swagger
 * /menus/all:
 *   get:
 *     summary: Obtenir tous les menus
 *     tags: [Menus]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Liste des menus
 */
router.get(
    '/all',
    authMiddleware,
    roleMiddleware('menu', 'view'),
    menuController.getAllMenus
);

/**
 * @swagger
 * /menus/{id}:
 *   get:
 *     summary: Obtenir un menu par ID
 *     tags: [Menus]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID du menu
 *     responses:
 *       200:
 *         description: Détails du menu
 *       404:
 *         description: Menu non trouvé
 */
router.get(
    '/:id',
    authMiddleware,
    roleMiddleware('menu', 'view'),
    menuController.getMenuById
);

/**
 * @swagger
 * /menus/bulk:
 *   post:
 *     summary: Ajouter plusieurs menus en une seule requête
 *     tags: [Menus]
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
 *                 price:
 *                   type: number
 *                 description:
 *                   type: string
 *                 category:
 *                   type: string
 *     responses:
 *       201:
 *         description: Menus ajoutés
 */
router.post(
    '/bulk',
    authMiddleware,
    roleMiddleware('menu', 'add'),
    menuController.insertBulkMenus
);

module.exports = router;
