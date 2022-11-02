const {ContainerMongoDb} = require("../../../containers/containerMongoDB")
const ProductsModel = require('./models/products.model')

class ProductsDaoMongoDb extends ContainerMongoDb {
   constructor() {
      super(ProductsModel);
   }
}

module.exports = { ProductsDaoMongoDb };

