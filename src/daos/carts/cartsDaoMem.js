const { ContainerMem } = require("../../containers/containerMem");

class cartsDaoMem extends ContainerMem {
   constructor() {
      super("carts");
   }
}

module.exports = { cartsDaoMem };
