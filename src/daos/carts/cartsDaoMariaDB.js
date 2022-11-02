import ContainerSQL from "../../containers/containerSQL";
import config from "../../config";

class CartsDaoMariaDB extends ContainerSQL {
   constructor() {
      super(config.MariaDB, "carts");
   }
}

module.exports = { CartsDaoMariaDB };
