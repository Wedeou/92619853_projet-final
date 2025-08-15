const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');
const eventController = require('../controllers/eventController');

/**
 * @swagger
 * tags:
 *   name: Events
 *   description: Gestion des événements
 */

/**
 * @swagger
 * /events/create:
 *   post:
 *     summary: Créer un nouvel événement
 *     tags: [Events]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               type_events:
 *                 type: string
 *               date:
 *                 type: string
 *                 format: date-time
 *               place:
 *                 type: string
 *               quotation:
 *                 type: number
 *               client:
 *                 type: string
 *               staff:
 *                 type: array
 *                 items:
 *                   type: string
 *               isActive:
 *                 type: boolean
 *     responses:
 *       201:
 *         description: Événement créé
 *       400:
 *         description: Erreur de validation
 */
router.post(
    '/create',
    authMiddleware,
    roleMiddleware('event', 'create'),
    eventController.create
);

/**
 * @swagger
 * /events/{id}/approve:
 *   patch:
 *     summary: Approuver un événement
 *     tags: [Events]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de l'événement
 *     responses:
 *       200:
 *         description: Événement approuvé
 *       404:
 *         description: Événement non trouvé
 */
router.patch(
    '/:id/approve',
    authMiddleware,
    roleMiddleware('event', 'approve'),
    eventController.approve
);

/**
 * @swagger
 * /events/all:
 *   get:
 *     summary: Lister tous les événements
 *     tags: [Events]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Liste des événements
 */
router.get(
    '/all',
    authMiddleware,
    roleMiddleware('event', 'listAll'),
    eventController.getAllEvents
);

/**
 * @swagger
 * /events/mine:
 *   get:
 *     summary: Lister mes événements
 *     tags: [Events]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Liste de mes événements
 */
router.get(
    '/mine',
    authMiddleware,
    roleMiddleware('event', 'listMine'),
    eventController.getMyEvents
);

/**
 * @swagger
 * /events/{id}:
 *   get:
 *     summary: Obtenir un événement par ID
 *     tags: [Events]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de l'événement
 *     responses:
 *       200:
 *         description: Détails de l'événement
 *       404:
 *         description: Événement non trouvé
 */
router.get(
    '/:id',
    authMiddleware,
    roleMiddleware('event', 'view'),
    eventController.getEventById
);

/**
 * @swagger
 * /events/{id}:
 *   put:
 *     summary: Mettre à jour un événement
 *     tags: [Events]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de l'événement
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               type_events:
 *                 type: string
 *               date:
 *                 type: string
 *                 format: date-time
 *               place:
 *                 type: string
 *               quotation:
 *                 type: number
 *               client:
 *                 type: string
 *               staff:
 *                 type: array
 *                 items:
 *                   type: string
 *               isActive:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Événement mis à jour
 *       404:
 *         description: Événement non trouvé
 */
router.put(
    '/:id',
    authMiddleware,
    roleMiddleware('event', 'update'),
    eventController.updateEvent
);

/**
 * @swagger
 * /events/{id}:
 *   delete:
 *     summary: Supprimer un événement
 *     tags: [Events]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de l'événement
 *     responses:
 *       200:
 *         description: Événement supprimé
 *       404:
 *         description: Événement non trouvé
 */
router.delete(
    '/:id',
    authMiddleware,
    roleMiddleware('event', 'delete'),
    eventController.deleteEvent
);

/**
 * @swagger
 * /events/bulk:
 *   post:
 *     summary: Ajouter plusieurs événements en une seule requête
 *     tags: [Events]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: array
 *             items:
 *               type: object
 *               properties:
 *                 type_events:
 *                   type: string
 *                 date:
 *                   type: string
 *                   format: date-time
 *                 place:
 *                   type: string
 *                 quotation:
 *                   type: number
 *                 client:
 *                   type: string
 *                 staff:
 *                   type: array
 *                   items:
 *                     type: string
 *                 isActive:
 *                   type: boolean
 *     responses:
 *       201:
 *         description: Événements ajoutés
 */
router.post(
    '/bulk',
    authMiddleware,
    roleMiddleware('event', 'create'),
    eventController.insertBulkEvents
);

module.exports = router;
