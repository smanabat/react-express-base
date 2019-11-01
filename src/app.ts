import express = require('express');

import config from "./config";
import loaders from './loaders'

async function startServer() {
    const app = express();
    await loaders(app);

    app.listen(config.port, (err: any) => {
        if (err) {
            console.log(err);
            process.exit(1);
        }
        console.log(`Running on port ${config.port}`);
    });
}

startServer();