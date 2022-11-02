const { ContainerSQL } = require("../../containers/containerSQL");
const { config } = require("../../config");

class ProductsDaoMariaDB extends ContainerSQL {
   constructor() {
      super(config.MariaDB, "products");
   }
}

module.exports = { ProductsDaoMariaDB };
