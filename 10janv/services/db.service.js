/* 
Import
*/
    const mongoose = require('mongoose');
//

/* 
Methode
*/
    const dbConnect = () => {
        // Appliquer les Promises
        return new Promise( ( resolve, reject ) => {

            // Connexion avec MongoDb
            mongoose.connect(process.env.MONGO_URL)
            .then( db => {
                return resolve(db)
            }) // En cas de succes
            .catch( err => reject(err)) // En cas d'erreur
        });
    };
//

/* 
Export
*/
    module.exports = {
        dbConnect
    };
//