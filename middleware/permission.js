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
        listMine: ['client', 'admin']    // Lister ses propres événements
    },
    order: {
        create: ['serveur', 'admin'],    // Créer une commande
        view: ['client', 'serveur', 'admin'] // Voir une commande
    },
    staff: {
        assign: ['traiteur', 'admin'],   // Assigner un staff à un événement
        viewPlanning: ['serveur', 'traiteur', 'admin'] // Voir le planning des staffs
    },
    user: {
        manage: ['admin']                // Gérer les utilisateurs
    }
};
