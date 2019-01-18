/*
Imports
*/
    const express = require('express');
    const router = express.Router();
//

/*
Definition
*/
    class FrontRouterClass{
        routes(){
            // Définition des routes
            router.get( '/', (req, res) => {
                // Rendre le fichier index dans la réponse
                res.render('index');
            });

            router.get( '/contact', (req, res) => {
                // Rendre le fichier index dans la réponse
                res.render('contact');
            });
        };

        init(){
            this.routes();
            return router;
        };
    }
//

/*
Export
*/
    module.exports = FrontRouterClass
//