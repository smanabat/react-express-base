import express from 'express';
import bodyParser from 'body-parser';
import path from 'path'

import config from '../config';
import routes from '../api';

export default ( app : express.Application ) => {

    app.use(config.api.prefix, routes());
    app.use(bodyParser.json());

    // Serve static files from the React frontend app
    app.use(express.static(path.join(__dirname, '../../client/build')))

    // Anything that doesn't match the above, send back index.html
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname + '/client/build/index.html'))
    })
}