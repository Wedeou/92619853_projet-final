/*const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');

// Créer une commande
router.post(
    '/',
    authMiddleware,
    roleMiddleware('order', 'create'),
    (req, res) => {
        res.json({ message: 'Commande créée (à implémenter)' });
    }
);

// Voir les commandes
router.get(
    '/',
    authMiddleware,
    roleMiddleware('order', 'view'),
    (req, res) => {
        res.json({ message: 'Liste des commandes (à implémenter)' });
    }
);
// Mettre à jour une commande
router.put(
    '/:id',
    authMiddleware,
    roleMiddleware('order', 'update'),
    (req, res) => {
        res.json({ message: `Commande ${req.params.id} mise à jour (à implémenter)` });
    }
);

// Supprimer une commande
router.delete(
    '/:id',
    authMiddleware,
    roleMiddleware('order', 'delete'),
    (req, res) => {
        res.json({ message: `Commande ${req.params.id} supprimée (à implémenter)` });
    }
);

// Obtenir les détails d'une commande
router.get(
    '/:id',
    authMiddleware,
    roleMiddleware('order', 'view'),
    (req, res) => {
        res.json({ message: `Détails de la commande ${req.params.id} (à implémenter)` });
    }
);

module.exports = router;
*/