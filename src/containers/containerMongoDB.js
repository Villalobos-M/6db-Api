const mongoose = require("mongoose");
const { config } = require("../config");


mongoose.connect(config.mongodb.cnxStr, config.mongodb.options);

class ContainerMongoDb {
   constructor(model) {
      this.model = model;
   }

   async getById(id) {
       try {
          const data = await this.model.find({_id: id});
          console.log(data);
       } catch (error) {
          console.log(error);
       }
   }

   async getAllData() {
      try {
         const data = await this.model.find();
         console.log(data);
      } catch (error) {
         console.log(error);
      }
   }

   async postData(newElement) {
      try {
         const newData = new this.model(newElement);
         await newData.save();
         console.log("added element");
      } catch (error) {
         console.log(error);
      }
   }

   async updateData(id, newData) {
      console.log("actulizando usuario");
      await this.model.updateMany(
         { _id: id },
         { $set: newData }
      );
      console.log("usuario actualizado");
   }

   async deleteData(id) {
      console.log("eliminando usuario");
      // evaluar si el nombre existe antes de elimnar
      await this.model.deleteOne({ _id: id });
      console.log('usuario eliminado')
   }

}

module.exports = { ContainerMongoDb };


