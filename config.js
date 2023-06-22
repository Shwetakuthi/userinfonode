const env = process.env;

const config = {
   db : {
        host : env.host || 'localhost',
        port : env.port || '3306',
        password : env.password || 'root',
        user : env.user || 'root',
        database : env.database || 'user_db',
        debug : env.debug || false,
   },
   listPerPage: env.LIST_PER_PAGE || 10,
};

module.exports = config;
