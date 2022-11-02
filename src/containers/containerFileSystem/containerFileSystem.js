const fs = require("fs");
const tiempoTranscurrido = Date.now();
const today = new Date(tiempoTranscurrido);
const {config} = require("../../config");

class ContainerFileSystem {
   constructor(ruta) {
      this.ruta = `${config.fileSystem.path}/${ruta}`;
   }

   async getAllData() {
      try {
         const contenidoArchivo = await fs.promises.readFile(
            this.ruta,
            "utf-8"
         );
         return JSON.parse(contenidoArchivo);
      } catch (error) {
         console.log(error);
      }
   }

   async getById(id) {
      try {
         const contenidoArchivo = await fs.promises.readFile(
            this.ruta,
            "utf-8"
         );
         const array = JSON.parse(contenidoArchivo);
         const objId = array.find((obj) => obj.id === +id);
         return objId ? objId : null;
      } catch (error) {
         console.log(error);
      }
   }

   async deleteData(id) {
      try {
         const contenidoArchivo = await fs.promises.readFile(
            this.ruta,
            "utf-8"
         );
         const array = JSON.parse(contenidoArchivo);
         const foundProduct = array.findIndex((product) => product.id === +id);
         const newArray = array.filter((product) => product.id !== +id);
         const strArray = JSON.stringify(newArray);

         await fs.promises.writeFile(this.ruta, `${strArray}`, "utf-8");

         return foundProduct !== -1 ? true : null;
      } catch (error) {
         console.log(error);
      }
   }

   async updateData(data, id) {
      try {
         const contenidoArchivo = await fs.promises.readFile(
            this.ruta,
            "utf-8"
         );

         const array = JSON.parse(contenidoArchivo);
         const index = array.findIndex((data) => data.id === +id);

         if (index !== -1) {
            data.id = +id;
            array.splice(index, 1, data);
            const strArray = JSON.stringify(array);
            await fs.promises.writeFile(this.ruta, `${strArray}`, "utf-8");
            return true;
         } else {
            return null;
         }
      } catch (error) {
         console.log(error);
      }
   }

   async saveProduct(newProduct) {
      try {
         const contenidoArchivo = await fs.promises.readFile(
            this.ruta,
            "utf-8"
         );
         const array = JSON.parse(contenidoArchivo);
         let countId = array[array.length - 1];
         array.length === 0
            ? (newProduct.id = 1)
            : (newProduct.id = countId.id + 1);

         newProduct.timestamp = today.toDateString();
         console.log(newProduct);
         const newArray = [...array, newProduct];
         const strArray = JSON.stringify(newArray);
         await fs.promises.writeFile(this.ruta, `${strArray}`, "utf-8");
         return newProduct;
      } catch (error) {
         console.log(error);
      }
   }

 
}

module.exports = { ContainerFileSystem };
