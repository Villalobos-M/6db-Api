const {ContainerSQL} = require("../../containers/containerSQL");
const {config} = require("../../config");

class CartsDaoSQLite3 extends ContainerSQL {
   constructor() {
      super(config.sqlite3, "carts");
   }
}

module.exports = { CartsDaoSQLite3 };

