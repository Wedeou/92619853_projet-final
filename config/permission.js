// config/permission.js
// Configuration file for user permissions in the application
module.exports = {
    menu: {
        add: ['traiteur', 'admin'],
        update: ['traiteur', 'admin'],
        delete: ['admin'],
        view: ['client', 'serveur', 'traiteur', 'admin']
    },
    event: {
        create: ['client', 'admin'],
        approve: ['traiteur', 'admin'],
        listAll: ['serveur', 'traiteur', 'admin'],
        listMine: ['client', 'admin']
    },
    order: {
        create: ['serveur', 'admin'],
        view: ['client', 'serveur', 'admin']
    },
    staff: {
        assign: ['traiteur', 'admin'],
        viewPlanning: ['serveur', 'traiteur', 'admin']
    },
    user: {
        manage: ['admin']
    }
};




/* Comment appliquer roleMiddleware

Admin uniquement → roleMiddleware('admin')

Serveur + Admin → roleMiddleware('serveur', 'admin')

Traiteur + Admin → roleMiddleware('traiteur', 'admin')

Client + Admin (rare, mais possible pour voir ses données) → roleMiddleware('client', 'admin')

💡 Exemple concret :

router.post('/menu',
    authMiddleware,
    roleMiddleware('traiteur', 'admin'), // seuls traiteurs et admins peuvent modifier le menu
    menuController.addMenu
);*/