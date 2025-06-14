/*

* Title: Uptime Monitoring Application
* Description: A Restfull API to monitor up or down time of user defined links
* Author: Saidul Islam Rana(codewithsaidul)
* Date: 14-06-2025


*/

// dependancies
const http = require('http');

// app object - module scaffolding
const app = {};

// configuration
app.config = {
    port: 3000,
};

// create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () => {
        console.log(`Listening to port ${app.config.port}`);
    });
};

// handle request response
app.handleReqRes = (req, res) => {
    // response handle
    res.end('Hello Programmers');
};

// start the server
app.createServer();
