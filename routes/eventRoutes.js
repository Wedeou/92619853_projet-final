const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');

// Créer un événement
router.post(
    '/create',
    authMiddleware,
    roleMiddleware('event', 'create'),
    eventController.create
);

// Approuver un événement
router.patch(
    '/:id/approve',
    authMiddleware,
    roleMiddleware('event', 'approve'),
    eventController.approve
);

// Lister tous les événements
router.get(
    '/all',
    authMiddleware,
    roleMiddleware('event', 'listAll'),
    eventController.getAllEvents
);

// Lister mes événements
router.get(
    '/mine',
    authMiddleware,
    roleMiddleware('event', 'listMine'),
    eventController.getMyEvents
);

// Obtenir les détails d'un événement spécifique
router.get(
    '/:id',
    authMiddleware,
    roleMiddleware('event', 'view'),
    eventController.getEventById
);

// Mettre à jour un événement
router.put(
    '/:id',
    authMiddleware,
    roleMiddleware('event', 'update'),
    eventController.updateEvent
);

// Supprimer un événement
router.delete(
    '/:id',
    authMiddleware,
    roleMiddleware('event', 'delete'),
    eventController.deleteEvent
);

// Exporter le routeur
module.exports = router;
