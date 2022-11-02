const config = {
   fileSystem: {
      path: "./DB",
   },

   mongodb: {
      cnxStr: "mongodb://localhost:27017/ecommerce",
      options: {
         useNewUrlParser: true,
         useUnifiedTopology: true,
      },
   },

   firebase: {
      ServiceAccount: require("../db/db-ecommerce-8ca21-firebase-adminsdk-tcxvv-41f0400f49.json"),
   },

   sqlite3: {
      client: "sqlite3",
      connection: { filename: "./db/ecommerce.sqlite" },
      useNullAsDefault: true,
   },

   MariaDB: {
      client: "mysql",
      connection: {
         host: "127.0.0.1",
         user: "root",
         password: "pass1234",
         database: "ecommerce",
      },
   },
};

module.exports = { config };
