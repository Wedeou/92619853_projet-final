const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');
const orderController = require('../controllers/orderController');

/**
 * @swagger
 * tags:
 *   name: Orders
 *   description: Gestion des commandes
 */

/**
 * @swagger
 * /orders/create:
 *   post:
 *     summary: Créer une nouvelle commande
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               client:
 *                 type: string
 *               items:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     menu:
 *                       type: string
 *                     quantity:
 *                       type: number
 *               total:
 *                 type: number
 *               status:
 *                 type: string
 *     responses:
 *       201:
 *         description: Commande créée
 *       400:
 *         description: Erreur de validation
 */
router.post(
    '/create',
    authMiddleware,
    roleMiddleware('order', 'create'),
    orderController.create
);

/**
 * @swagger
 * /orders/all:
 *   get:
 *     summary: Lister toutes les commandes
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Liste des commandes
 */
router.get(
    '/all',
    authMiddleware,
    roleMiddleware('order', 'view'),
    orderController.getAllOrders
);

/**
 * @swagger
 * /orders/{id}:
 *   put:
 *     summary: Mettre à jour une commande
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la commande
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               items:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     menu:
 *                       type: string
 *                     quantity:
 *                       type: number
 *               total:
 *                 type: number
 *               status:
 *                 type: string
 *     responses:
 *       200:
 *         description: Commande mise à jour
 *       404:
 *         description: Commande non trouvée
 */
router.put(
    '/:id',
    authMiddleware,
    roleMiddleware('order', 'update'),
    orderController.updateOrder
);

/**
 * @swagger
 * /orders/{id}:
 *   delete:
 *     summary: Supprimer une commande
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la commande
 *     responses:
 *       200:
 *         description: Commande supprimée
 *       404:
 *         description: Commande non trouvée
 */
router.delete(
    '/:id',
    authMiddleware,
    roleMiddleware('order', 'delete'),
    orderController.deleteOrder
);

/**
 * @swagger
 * /orders/{id}:
 *   get:
 *     summary: Obtenir une commande par ID
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la commande
 *     responses:
 *       200:
 *         description: Détails de la commande
 *       404:
 *         description: Commande non trouvée
 */
router.get(
    '/:id',
    authMiddleware,
    roleMiddleware('order', 'view'),
    orderController.getOrderById
);

/**
 * @swagger
 * /orders/bulk:
 *   post:
 *     summary: Ajouter plusieurs commandes en une seule requête
 *     tags: [Orders]
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
 *                 client:
 *                   type: string
 *                 items:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       menu:
 *                         type: string
 *                       quantity:
 *                         type: number
 *                 total:
 *                   type: number
 *                 status:
 *                   type: string
 *     responses:
 *       201:
 *         description: Commandes ajoutées
 */
router.post(
    '/bulk',
    authMiddleware,
    roleMiddleware('order', 'create'),
    orderController.insertBulkOrders
);

module.exports = router;
