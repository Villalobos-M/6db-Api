const fs = require("fs");
const tiempoTranscurrido = Date.now();
const today = new Date(tiempoTranscurrido);

const {
   ContainerFileSystem,
} = require("../../containers/containerFileSystem/containerFileSystem");

const { config } = require("../../config");

class CartsDaoFS extends ContainerFileSystem {
   constructor() {
      super("carts.txt");
      this.ruta = `${config.fileSystem.path}/carts.txt`;
      this.ruta2 = `${config.fileSystem.path}/products.txt`;
   }
   async saveCart() {
      try {
         const contenidoArchivo = await fs.promises.readFile(
            this.ruta,
            "utf-8",
         );
         const array = JSON.parse(contenidoArchivo);
         const newCart = {};
         let countId = array[array.length - 1];
         array.length === 0 ? (newCart.id = 1) : (newCart.id = countId.id + 1);
         newCart.timestamp = today.toDateString();
         newCart.products = [];
         const newArray = [...array, newCart];
         const strArray = JSON.stringify(newArray);
         await fs.promises.writeFile(this.ruta, `${strArray}`, "utf-8");
         return newCart;
      } catch (error) {
         console.log(error);
      }
   }

   async saveProductCart(idCart, idProduct) {
      try {
         //Data Carts
         const contenidoArchivo = await fs.promises.readFile(
            this.ruta,
            "utf-8",
         );
         const arrayCarts = JSON.parse(contenidoArchivo);
         const indexCart = arrayCarts.findIndex((cart) => cart.id === +idCart);
         const cart = arrayCarts.filter((cart) => cart.id === +idCart);
         const addCart = cart[0]?.products;

         // Data Products
         const dataProducts = await fs.promises.readFile(this.ruta2, "utf-8");
         const arrayProduct = JSON.parse(dataProducts);
         const product = arrayProduct.filter(
            (product) => product.id === +idProduct,
         );
         const addProduct = product[0].id;

         //Add product in cart
         if (indexCart !== -1) {
            addCart.push(addProduct);
            const NewCart = cart[0];
            arrayCarts.splice(indexCart, 1, NewCart);
            const jsonCarts = JSON.stringify(arrayCarts);
            await fs.promises.writeFile(this.ruta, `${jsonCarts}`, "utf-8");
            return true;
         } else {
            return null;
         }
      } catch (error) {
         console.log(error);
      }
   }

   async deleteProductInCart(idCart, id_prod) {
      try {
         const contenidoArchivo = await fs.promises.readFile(
            this.ruta,
            "utf-8",
         );
         const arrayCarts = JSON.parse(contenidoArchivo);
         const indexCart = arrayCarts.findIndex((cart) => cart.id === +idCart);

         let cart = arrayCarts.filter((cart) => cart.id === +idCart);
         let productsInCart = cart[0]?.products;

         const newArray = productsInCart.filter(
            (product) => product.id !== +id_prod,
         );
         const newCart = {
            timestamp: cart[0]?.timestamp,
            products: newArray,
            id: cart[0]?.id,
         };
         cart.pop();
         cart.push(newCart);

         if (indexCart !== -1) {
            arrayCarts.splice(indexCart, 1, newCart);
            const strArray = JSON.stringify(arrayCarts);
            await fs.promises.writeFile(this.ruta, `${strArray}`, "utf-8");
            return true;
         } else {
            return null;
         }
      } catch (error) {
         console.log(error);
      }
   }
}

module.exports = { CartsDaoFS };
