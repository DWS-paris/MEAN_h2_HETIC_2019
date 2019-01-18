/*
Imports and configuration
*/
    // => Use .env
    require('dotenv').config();
    const express = require('express'); // Gestion server
    const path = require('path'); // Gestion du dossier client
    const ejs = require('ejs'); // Gestion du moteur de rendu

    // => Mongoose
    const mongoDb = require('./services/db.service');

    // Routes
    const FrontRouterClass = require('./routes/front.route')
//

/* 
Server config.
*/
    const server = express();
    const port = process.env.PORT;

    //=> Set view engine
    server.engine( 'html', ejs.renderFile );
    server.set( 'view engine', 'html' );

    //=> Use path to add views
    server.set( 'views', __dirname + '/www' );
    server.use( express.static(path.join(__dirname, 'www')) );

    // Set routes
    server.use('/', FrontRouterClass);
//

/* 
Launch server
*/
    // => Connect to MongoDb
    mongoDb.dbConnect()
    .then( db => {
        console.log(`MongoDB is active ${db}`)

        // Start server
        server.listen( port, () => {
            console.log(`Server is active on port: ${port}`);
        });
    })
    .catch( err => console.error(err) )




   
//