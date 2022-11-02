const { ContainerSQL } = require("../../containers/containerSQL");
const { config } = require("../../config");

class ProductsDaoSQLite3 extends ContainerSQL {
   constructor() {
      super(config.sqlite3, "products");
   }
}

module.exports = { ProductsDaoSQLite3 };
