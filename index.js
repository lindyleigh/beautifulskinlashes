;(function(){

    let express = require('express'),
        bodyParser = require('body-parser'),
        server = express(),
        sessions = require('./server_assets/config/session'),
        routes = require('./server_assets/routes/route-index'),
        port = process.env.PORT || 5800;

    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({extended: true}));
    
    server.use(sessions);

    server.use('/', express.static(`${__dirname}/public`));

    server.use('/api', routes.router);

    server.listen(port, function(){
        console.log(`Making you beautiful on port ${port}`);
    });

}());