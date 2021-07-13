const { Pool } = require("pg");

const dev = {
  user: "postgres",
  password: "postgres",
  host: "localhost",
  port: "5432",
  database: "launchstoredb",
};
const prod = {
  connectionString: process.env.URL_DB,
  ssl: { rejectUnauthorized: false },
};

// module.exports =
//   process.env.ENV_PROD === "prod" ? new Pool(prod) : new Pool(dev);

module.exports =
  process.env.ENV_PROD === "prod" ? new Pool(prod) : new Pool(dev);