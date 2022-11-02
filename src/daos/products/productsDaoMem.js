const { ContainerMem } = require("../../containers/containerMem");

class ProductosDaoMem extends ContainerMem {
   constructor() {
      super("products");
   }
}

module.exports = { ProductosDaoMem };
