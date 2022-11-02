let productosDao;
let carritosDao;

switch (process.env.PERS) {
   case "json":
      const { ProductsDaoFS } = require("./products/productsDaoFileSystem.js");
      const { CartsDaoFS } = require("./carts/cartsDaoFileSystem.js");

      productosDao = ProductsDaoFS;
      carritosDao = CartsDaoFS;
      break;

   case "firebase":
      const {
         ProductosDaoFirebase,
      } = require("./products/productsDaoFirebase");
      const { CartsDaoFirebase } = require("./carts/cartsDaoFirebase");

      productosDao = new ProductosDaoFirebase();
      carritosDao = new CartsDaoFirebase();

      break;

   case "mongodb":
      const {
         ProductsDaoMongoDb,
      } = require("./products/MongoDB/productsDaoMongoDB");
      const { CartsDaoMongoDb } = require("./carts/MongoDB/cartsDaoMongoDB");

      productosDao = new ProductsDaoMongoDb();
      carritosDao = new CartsDaoMongoDb();
      break;

   case "mariadb":
      const { ProductsDaoMariaDB } = require("./products/productsDaoMariaDB");
      const { CartsDaoMariaDB } = require("./carts/cartsDaoMariaDB");

      productosDao = new ProductsDaoMariaDB();
      carritosDao = new CartsDaoMariaDB();
      break;

   case "sqlite3":
      const { ProductsDaoSQLite3 } = require("./products/productsDaoSQLite3");
      const { CartsDaoSQLite3 } = require("./carts/cartsDaoSQLite3");

      productosDao = new ProductsDaoSQLite3();
      carritosDao = new CartsDaoSQLite3();
      break;

   default:
      break;
}

module.exports = { productosDao, carritosDao };
