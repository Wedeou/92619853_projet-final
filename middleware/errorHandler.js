// middleware/errorHandler.js
// Middleware global de gestion des erreurs
const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Une erreur est survenue' });
};

module.exports = errorHandler;
