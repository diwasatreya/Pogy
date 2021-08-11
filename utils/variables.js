const config = require("./../config.json");
let token;
let mongodb;

if (config.dev) {
    token = process.env.TOKEN;
    mongodb = config.mongodb_url;
} if (!config.dev) {
    token = process.env.TOKEN
    mongodb = config.mongodb_url
    
};



module.exports = { config, token, mongodb };
