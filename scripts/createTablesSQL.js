//Funcion para crear tabla de productos
async function crearTablasProductos(sqlClient) {
   const knex = sqlClient;
   knex.schema
      .createTable("products", (table) => {
         table.increments("id");
         table.string("name");
         table.string("description");
         table.string("codigo");
         table.string("precio");
         table.string("url");
         table.string("stock");
      })
      .then(() => console.log("Table created"))
      .catch((err) => {
         console.log(err);
         throw err;
      })
      .finally(() => {
         knex.destroy();
      });
}

//Funcion para crear tabla de carritos
async function crearTablasCarritos(sqlClient) {
   const knexSchema = sqlClient;
   knexSchema.schema
      .createTable("carts", (table) => {
         table.increments("id");
         table.integer("productsInCart");
      })
      .then(() => console.log("Table created"))
      .catch((err) => {
         console.log(err);
         throw err;
      })
      .finally(() => {
         knexSchema.destroy();
      });
}

module.exports = { crearTablasProductos, crearTablasCarritos };
