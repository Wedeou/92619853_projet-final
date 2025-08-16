# Projet Gestion DE SERVICE TRAITEUR
## Description
Ce projet est une application backend Node.js pour la gestion des événements, menus, commandes, utilisateurs et personnel. Il inclut :
- Authentification et autorisation (JWT, rôles).
- Gestion des utilisateurs (admin, client, serveur, traiteur, etc.).
- Gestion des événements (création, approbation, liste).
- Gestion des menus et commandes.
- Gestion du personnel (planning, CRUD).
- Documentation automatique avec **Swagger**.
- Base de données MongoDB.

---

## Technologies utilisées
- Node.js v20
- Express.js
- MongoDB + Mongoose
- Nodemon (pour le développement)
- Body-parser
- Cors
- JWT pour l’authentification
- Swagger pour la documentation API
- dotenv pour la gestion des variables d'environnement

---

## Installation

1. Cloner le dépôt :
```bash
git clone <URL_DU_DEPOT>
cd <nom_du_projet>

Installer les dépendances :

npm install

Créer un fichier .env à la racine du projet avec les variables suivantes :

PORT=5000
MONGO_URI=<votre_uri_mongodb>
JWT_SECRET=<votre_cle_secrete>

Lancer le serveur

En mode développement avec nodemon :

npm run dev


En mode production :

node server.js

Structure du projet
project/
│
├── controllers/       # Contient la logique des routes
│   ├── userController.js
│   ├── eventController.js
│   ├── orderController.js
│   ├── menuController.js
│   └── staffController.js
│
├── middleware/        # Middlewares auth, roles, permissions
│   ├── authMiddleware.js
│   ├── roleMiddleware.js
│   └── permission.js
│
├── models/            # Schémas MongoDB
│   ├── User.js
│   ├── Event.js
│   ├── Order.js
│   ├── Menu.js
│   └── Staff.js
│
├── routes/            # Définition des routes
│   ├── userRoutes.js
│   ├── eventRoutes.js
│   ├── orderRoutes.js
│   ├── menuRoutes.js
│   └── staffRoutes.js
│
├── server.js          # Point d'entrée de l'application
├── package.json
└── README.md

Routes API
Authentification

POST /users/register → Enregistrer un utilisateur (admin uniquement)

POST /users/login → Connexion

Utilisateurs

GET /users/users → Liste des utilisateurs (admin)

GET /users/:id → Détails d’un utilisateur

PUT /users/:id → Mettre à jour un utilisateur

DELETE /users/:id → Supprimer un utilisateur

POST /users/bulk → Ajouter plusieurs utilisateurs

Événements

POST /events/create → Créer un événement

PATCH /events/:id/approve → Approuver un événement

GET /events/all → Liste de tous les événements

GET /events/mine → Liste de mes événements

GET /events/:id → Détails d’un événement

PUT /events/:id → Mettre à jour un événement

DELETE /events/:id → Supprimer un événement

POST /events/bulk → Ajouter plusieurs événements

Menus

POST /menus/create → Ajouter un menu

PUT /menus/:id → Mettre à jour un menu

DELETE /menus/:id → Supprimer un menu

GET /menus/all → Lister tous les menus

GET /menus/:id → Détails d’un menu

POST /menus/bulk → Ajouter plusieurs menus

Commandes

POST /orders/create → Créer une commande

GET /orders/all → Lister toutes les commandes

GET /orders/:id → Détails d’une commande

PUT /orders/:id → Mettre à jour une commande

DELETE /orders/:id → Supprimer une commande

POST /orders/bulk → Ajouter plusieurs commandes

Staff

POST /staff/staff → Ajouter un membre du personnel

GET /staff/staff/all → Liste du personnel

GET /staff/staff/:id → Détails d’un membre

DELETE /staff/staff/:id → Supprimer un membre

GET /staff/staff/planning → Planning du personnel

POST /staff/staff/bulk → Ajouter plusieurs membres

Documentation Swagger

Après avoir lancé le serveur, accédez à l’interface Swagger :

http://localhost:5000/api-docs


Toutes les routes sont documentées avec :

Tags (Users, Events, Menus, Orders, Staff)

Paramètres et corps de requête

Codes de réponse

Sécurité bearerAuth pour les routes protégées

Exemple de corps JSON pour Postman
Créer un utilisateur
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "Password123",
  "role": "client"
}

Créer un événement
{
  "type_events": "Mariage",
  "date": "2025-09-20T10:00:00.000Z",
  "place": "Salle des fêtes",
  "quotation": 1500,
  "client": "64d2c3e9e1b2a1b4c5d6f7a8",
  "staff": ["64d2c3e9e1b2a1b4c5d6f7b9"]
}

Créer une commande
{
  "client": "64d2c3e9e1b2a1b4c5d6f7a8",
  "items": [
    {"menu": "64d2c3e9e1b2a1b4c5d6f7c1", "quantity": 2}
  ],
  "total": 50,
  "status": "pending"
}

Variables d’environnement

PORT → Port d’écoute du serveur (ex: 5000)

MONGO_URI → URI MongoDB

JWT_SECRET → Clé secrète pour JWT

Lancement des tests

Vous pouvez tester toutes les routes avec Postman ou Swagger UI (/api-docs).

Contribution

Forkez le projet

Créez une branche : git checkout -b feature/nom_feature

Faites vos modifications

Commit : git commit -m "Ajout de feature"

Push : git push origin feature/nom_feature

Créez une Pull Request

Auteur

Moukpe Esther – Étudiante en Développement Web et Mobile – Université de Kara, Togo

Licence

Ce projet est sous licence MIT.