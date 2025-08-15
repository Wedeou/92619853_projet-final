const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');
const userController = require('../controllers/userController');
const permissions = require('../middleware/permission');

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Gestion des utilisateurs
 */

/**
 * @swagger
 * /users/register:
 *   post:
 *     summary: Enregistrer un nouvel utilisateur (admin uniquement)
 *     tags: [Users]
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
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               role:
 *                 type: string
 *     responses:
 *       201:
 *         description: Utilisateur créé
 *       400:
 *         description: Erreur de validation
 */
router.post(
    '/register',
    authMiddleware,
    roleMiddleware('user', 'manage'),
    userController.register
);

/**
 * @swagger
 * /users/login:
 *   post:
 *     summary: Connexion d'un utilisateur
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Connexion réussie
 *       401:
 *         description: Email ou mot de passe incorrect
 */
router.post('/login', userController.login);

/**
 * @swagger
 * /users/users:
 *   get:
 *     summary: Obtenir la liste des utilisateurs (admin uniquement)
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Liste des utilisateurs
 */
router.get(
    '/users',
    authMiddleware,
    roleMiddleware('user', 'manage'),
    userController.getAllUsers
);

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Obtenir un utilisateur par ID (admin uniquement)
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de l'utilisateur
 *     responses:
 *       200:
 *         description: Détails de l'utilisateur
 *       404:
 *         description: Utilisateur non trouvé
 */
router.get(
    '/:id',
    authMiddleware,
    roleMiddleware('user', 'manage'),
    userController.getUserById
);

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Mettre à jour un utilisateur (admin uniquement)
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de l'utilisateur
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               role:
 *                 type: string
 *     responses:
 *       200:
 *         description: Utilisateur mis à jour
 *       404:
 *         description: Utilisateur non trouvé
 */
router.put(
    '/:id',
    authMiddleware,
    roleMiddleware('user', 'manage'),
    userController.updateUser
);

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Supprimer un utilisateur (admin uniquement)
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de l'utilisateur
 *     responses:
 *       200:
 *         description: Utilisateur supprimé
 *       404:
 *         description: Utilisateur non trouvé
 */
router.delete(
    '/:id',
    authMiddleware,
    roleMiddleware('user', 'manage'),
    userController.deleteUser
);

/**
 * @swagger
 * /users/bulk:
 *   post:
 *     summary: Ajouter plusieurs utilisateurs en une seule requête (admin uniquement)
 *     tags: [Users]
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
 *                 email:
 *                   type: string
 *                 password:
 *                   type: string
 *                 role:
 *                   type: string
 *     responses:
 *       201:
 *         description: Utilisateurs ajoutés
 */
router.post(
    '/bulk',
    authMiddleware,
    roleMiddleware('user', 'manage'),
    userController.insertBulkUsers
);

module.exports = router;
