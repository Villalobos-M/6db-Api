const knex = require("knex");

class ContainerSQL {
   constructor(config, tabla) {
      this.knex = knex(config);
      this.tabla = tabla;
   }

   async getAllData() {
      let data = [];
      try {
         data = this.knex.from(this.tabla).select("*");
      } catch (err) {
         console.log(err);
      }
      return data;
   }

   async postData(data) {
      this.knex(this.tabla)
         .insert(data)
         .then(() => console.log("data inserted"))
         .catch((err) => console.log(err));
   }

   async getById(id) {
      let data = [];
      try {
         data = this.knex.from(this.tabla).select("*");
         const objId = data.find((obj) => obj.id === +id);
         return objId ? objId : null;
      } catch (err) {
         console.log(err);
      }
      return data;
   }

   async delete(id) {
      let data = [];
      try {
         data = this.knex.from(this.tabla).where("id", id).del();
         console.log("data deleted");
      } catch (err) {
         console.log(err);
      }
      return data;
   }

   async update(id, newData) {
      let data = [];
      try {
         data = this.knex
            .from(this.tabla)
            .where("id", +id)
            .update({ ...newData });
         console.log("data deleted");
      } catch (err) {
         console.log(err);
      }
      return data;
   }
}

module.exports = { ContainerSQL };
