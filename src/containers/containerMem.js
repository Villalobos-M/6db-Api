class ContainerMem {
   constructor(db) {
      this.db = db;
      this.arrayProducts = [];
      this.arrayCarts = [];
   }

   getAllData() {
      if (this.db === "products") return this.arrayProducts;
      if (this.db === "carts") return this.arrayCarts;
   }

   getById(id) {
      if (this.db === "products") {
         const find = this.arrayProducts.find((product) => product.id === +id);
         if (!find) {
            return { err: "producto no encontrado" };
         }
         return find;
      } else {
         const find = this.arrayCarts.find((product) => product.id === +id);
         if (!find) {
            return { err: "producto no encontrado" };
         }
         return find;
      }
   }

   postData(newData) {
      if (this.db === "products") {
         if (this.arrayProducts.length === 0) {
            newData.id = 1;
         } else {
            let lastId = this.arrayProducts[this.arrayProducts.length - 1].id;
            newData.id = lastId + 1;
         }

         this.arrayProducts.push(newData);
         return this.arrayProducts;
      } else {
         if (this.arrayCarts.length === 0) {
            newData.id = 1;
         } else {
            let lastId = this.arrayCarts[this.arrayCarts.length - 1].id;
            newData.id = lastId + 1;
         }

         this.arrayCarts.push(newData);
         return this.arrayCarts;
      }
   }

   deleteData(id) {
      if (this.db === "products") {
         const products = this.arrayProducts.filter(
            (product) => product.id !== +id,
         );
         this.arrayProducts = [...products];
         return { message: "Producto eliminado" };
      } else {
         const products = this.arrayCarts.filter(
            (product) => product.id !== +id,
         );
         this.arrayCarts = [...products];
         return { message: "Producto eliminado" };
      }
   }

   updateData(data, id) {
      if (this.db === "products") {
         const index = this.arrayProducts.findIndex(
            (product) => product.id === +id,
         );
         console.log(index);
         if (index !== -1) {
            data.id = +id;
            this.arrayProducts.splice(index, 1, data);
            return { message: "Producto editado" };
         } else {
            return { error: "producto no encontrado" };
         }
      } else {
         const index = this.arrayCarts.findIndex(
            (product) => product.id === +id,
         );
         console.log(index);
         if (index !== -1) {
            data.id = +id;
            this.arrayCarts.splice(index, 1, data);
            return { message: "Producto editado" };
         } else {
            return { error: "producto no encontrado" };
         }
      }
   }
}

module.exports = { ContainerMem };
