const {
   ContainerFileSystem,
} = require("../../containers/containerFileSystem/containerFileSystem");

class ProductsDaoFS extends ContainerFileSystem {
   constructor() {
      super("products.txt");
   }
}

module.exports = { ProductsDaoFS };
