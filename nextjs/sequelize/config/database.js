const parseDbUrl = require('parse-database-url');
const dbConfig = parseDbUrl(process.env.DATABASE_URL);
const sequelizeDbConfig = {
  username: dbConfig.user,
  password: dbConfig.password,
  database: dbConfig.database,
  host: dbConfig.host,
  port: dbConfig.port,
  dialect: dbConfig.driver,
};
module.exports = {
  development: sequelizeDbConfig,
  production: sequelizeDbConfig,
};
