const envFound = require('dotenv').config()

if (!envFound) {
    throw new Error("⚠️ No .env file found  ⚠️");
}

export default {
    port: parseInt(<string>process.env.PORT, 10) || 3000,

    api: {
        prefix: '/api',
    }
};