const { ContainerFirebase } = require("../../containers/containerFirebase.js");

class CartsDaoFirebase extends ContainerFirebase {
   constructor() {
      super("carts");
   }

   async addProductInCart(idProduct, idCart) {
      try {
         const a = db.collection("carts");
         const doc = a.doc(idCart);
         const item = await doc.get();

         const productsInCart = item.data().productsInCart;
         await doc.update({ productsInCart: [...productsInCart, idProduct] });

         console.log("added data");
      } catch (error) {
         console.log(error);
      }
   }
}

module.exports = { CartsDaoFirebase };
