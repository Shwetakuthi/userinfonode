const env = process.env;

const config = {
   db : {
        host : env.DB_HOST || 'localhost',
        port : env.DB_PORT || '3306',
        password : env.DB_PASSWORD || 'root',
        user : env.DB_USER || 'root',
        database : env.DB_NAME || 'user_db',
        debug : true,
   },
   listPerPage: env.LIST_PER_PAGE || 10,
};

module.exports = config;
