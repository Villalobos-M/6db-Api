const { ContainerMongoDb } = require("../../../containers/containerMongoDB");
const CartsModel = require("./models/carts.model")

class CartsDaoMongoDb extends ContainerMongoDb {
   constructor() {
      super(CartsModel);
   }

   async productsInCart(idCart, idProduct) {
      try {
         const data = await this.model.find({ _id: idCart });
         const pastProducts = data[0].productsInCart;
         await CartsModel.updateMany(
            { _id: idCart },
            { $set: { productsInCart: [...pastProducts, idProduct] } }
         );
         console.log('added product')
      } catch (error) {
         console.log(error);
      }
   }
}

module.exports = { CartsDaoMongoDb };

