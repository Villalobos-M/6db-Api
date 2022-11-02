const admin = require( "firebase-admin")
const {config} = require ('../config')
const tiempoTranscurrido = Date.now();
const today = new Date(tiempoTranscurrido);

admin.initializeApp({
    credential: admin.credential.cert(config.firebase.ServiceAccount)
})

const db = admin.firestore();

class ContainerFirebase {
   constructor(nombreColeccion) {
      this.coleccion = db.collection(nombreColeccion);
   }

   async getALl() {
      try {
         const queryUsuarios = await this.coleccion.get();
         const respuesta = queryUsuarios.docs.map((documentos) => ({
            id: documentos.id,
            ...documentos.data(),
         })); // []
         console.log(respuesta); // resp.docs.map(doc => doc.data())
      } catch (error) {
         console.log(error);
      }
   }

   async getById(id) {
      try {
         const queryUsuario = this.coleccion.doc(`${id}`);
         const item = await queryUsuario.get();
         const respuesta = { id: item.id, ...item.data() };
         console.log(respuesta); // resp.docs.map(doc => doc.data())
      } catch (error) {
         console.log(error);
      }
   }

   async postData(newData) {
      try {
         newData.timestamp = today.toDateString();
         const doc = this.coleccion.doc();
         await doc.create(newData);
         console.log("added data");
      } catch (error) {
         console.log(error);
      }
   }

   async updateData(id, newData) {
      try {
         const doc = this.coleccion.doc(id);
         await doc.update(newData);
         console.log(`data updated`);
      } catch (error) {
         console.log(error);
      }
   }

   async delete(id) {
      try {
         const doc = this.coleccion.doc(id);
         await doc.delete();
         console.log(`data deleted`);
      } catch (error) {
         console.log(error);
      }
   }
}

module.exports = { ContainerFirebase };
