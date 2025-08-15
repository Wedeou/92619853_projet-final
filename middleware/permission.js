// config/permission.js
// Configuration des permissions pour les différents rôles de l'application.
// Chaque action sur une ressource est associée à un tableau de rôles autorisés.

module.exports = {
    menu: {
        add: ['traiteur', 'admin'],      // Ajouter un menu
        update: ['traiteur', 'admin'],   // Modifier un menu
        delete: ['admin'],               // Supprimer un menu
        view: ['client', 'serveur', 'traiteur', 'admin'] // Voir les menus
    },
    event: {
        create: ['client', 'admin'],     // Créer un événement
        approve: ['traiteur', 'admin'],  // Valider un événement
        listAll: ['serveur', 'traiteur', 'admin'], // Lister tous les événements
        listMine: ['client', 'admin'] ,   // Lister ses propres événements
        update: ['traiteur', 'admin'], // Mettre à jour un événement
        delete: ['traiteur', 'admin'], // Supprimer un événement
        view: ['client', 'serveur', 'traiteur', 'admin'] // Voir les détails d'un événement
    },
    order: {
        create: ['serveur', 'admin'],    // Créer une commande
        listAll: ['serveur', 'admin'],   // Lister toutes les commandes
        view: ['client', 'serveur', 'admin'] ,// Voir une commande
        update: ['serveur', 'admin'], // Mettre à jour une commande
        delete: ['admin']               // Supprimer une commande
    },
    staff: {
        assign: ['traiteur', 'admin'],   // Assigner un staff à un événement
        viewPlanning: ['serveur', 'traiteur', 'admin'] // Voir le planning des staffs
    },
    user: {
        manage: ['admin']                // Gérer les utilisateurs
    }
};
