const knex = require("knex")({
  // Kita akan load variabelnya dari env
  client: process.env.DB_CLIENT,
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

export default knex;
