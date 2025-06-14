/*
 * Title: Handle Request Response
 * Description: Handle Request & Response
 * Author: Saidul Islam Rana(codewithsaidul)
 * Date: 14-06-2025
 */

// dependencies
const url = require('url');
const { StringDecoder } = require('string_decoder');

// module scaffolding
const handler = {};

handler.handleReqRes = (req, res) => {
    // request handler
    const parseUrl = url.parse(req.url, true);
    const pathName = parseUrl.pathname;
    const trimmedPath = pathName.replace(/^\/+|\/+$/g, ' ');
    const method = req.method.toLowerCase();
    const queryStringObject = parseUrl.query;
    const { headers } = req;

    const decoder = new StringDecoder('utf-8');
    let realData = '';

    req.on('data', (buffer) => {
        realData += decoder.write(buffer);
    });

    req.on('end', () => {
        realData += decoder.end();
        console.log(realData);
        // response handle
        res.end(realData);
    });
};

module.exports = handler;
