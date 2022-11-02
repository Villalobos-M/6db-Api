const {ContainerFirebase} = require("../../containers/containerFirebase.js")

class ProductosDaoFirebase extends ContainerFirebase {
   constructor() {
      super("products");
   }
}

module.exports = { ProductosDaoFirebase };
