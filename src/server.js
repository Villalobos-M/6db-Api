const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//dotenv
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

//imports FileSytem
const {
   productsRouter,
} = require("./containers/containerFileSystem/router/products.routes");
const {
   cartRouter,
} = require("./containers/containerFileSystem/router/cart.routes");

app.use("*", (req, res, next) => {
   res.status(404).json({
      status: "error",
      message: `${req.originalUrl} not found in this server.`,
   });
});

app.listen(8080, () => {
   console.log("express running");
});

//----------------------EJECUCION-------------------

//*****FILESYSTEM
//RUTAS DE PRODUCTOS
// const { ProductsDaoFS } = require("./daos/products/productsDaoFileSystem");
// const newProduct = new ProductsDaoFS();
// newProduct.getAllData().then((products) => console.log(products));
// newProduct.saveProduct({
//    nombre: "",
//    description: "",
//    codigo: "",
//    url: "",
//    price: 0,
//    stock: 0
// });

//CARRITO
// const { CartsDaoFS } = require("./daos/carts/cartsDaoFileSystem");
// const cart = new CartsDaoFS();
// cart.getAllData().then((carts) => console.log(carts));
// cart.saveProductCart(idCart, idProduct);


// //*****SQL
// const knex = require("knex");
// const { config } = require("../src/config");
// const {crearTablasProductos, crearTablasCarritos} = require("../scripts/createTablesSQL");

//FUNCIONES PARA CREAR TABLAS
// // opciones: MariaDB, sqlite3
// crearTablasProductos(knex(config.sqlite3));
// crearTablasCarritos(knex(config.sqlite3));

//CRUD DE PRODUCTOS
//options -> getAllData(), postData(data), getById(id), delete(id), update(id, newData)
// const { ProductsDaoSQLite3 } = require("./daos/products/productsDaoSQLite3");
// const newProduct = new ProductsDaoSQLite3();
// newProduct.postData({
//    name: "",
//    description: "",
//    codigo: "",
//    precio: "",
//    url: "",
//    stock: "",
// });
// const dataProducts = newProduct.getAllData().then((data) => console.log(data));

//CRUD DE CARRITOS
//options -> getAllData(), postData(data), getById(id), delete(id), update(id, newData)
// const { CartsDaoSQLite3 } = require("./daos/carts/cartsDaoSQLite3");
// const newCart = new CartsDaoSQLite3();
// newCart.postData({ productsInCart: 3 });


//*****FIREBASE
//CRUD DE PRODUCTOS
//opciones -> getALl(), getById(id), postData({}), updateData(id, newData), delete(id)
// const { ProductosDaoFirebase } = require("./daos/products/productsDaoFirebase");
// const newProduct = new ProductosDaoFirebase();
// newProduct.postData({
//    nombre: "",
//    description: "",
//    codigo: "",
//    url: "",
//    price: 1,
//    stock: 1,
// });
// newProduct.getALl();

//CRUD DE CARRITOS
//opciones -> addProductInCart(idProduct, idCart), getALl(), getById(id), postData({}), updateData(id, newData), delete(id)
// const { CartsDaoFirebase } = require("./daos/carts/cartsDaoFirebase");
// const newProduct = new CartsDaoFirebase();
// newProduct.postData({ productsInCart: [] });

// const newCart = new CartsDaoFirebase();
// newCart.addProductInCart('idProduct', 'idCart');


//*****MONDODB
//CRUD PRODUCTOS
// opciones -> getALl(), getById(id), postData(newData), updateData(id, newData), delete(id)
// const {ProductsDaoMongoDb} = require('./daos/products/MongoDB/productsDaoMongoDB')
// const newProduct = new ProductsDaoMongoDb()
// newProduct.postData({
//    nombre: "camera",
//    description: "new small professional camera",
//    codigo: "104072",
//    url: "https://cdn3.iconfinder.com/data/icons/spring-2-1/30/Camera-128.png",
//    price: 1540,
//    stock: 9,
// });

//CRUD CARRITOS
// opciones -> productsInCart(idCart, idProduct), getALl(), getById(id), postData(newData), updateData(id, newData), delete(id)
// const {CartsDaoMongoDb} = require('./daos/carts/MongoDB/cartsDaoMongoDB')
// const newCart = new CartsDaoMongoDb();
// *Para agregar un carrito se debe mandar un objeto vacio*
// newCart.postData({})
// newCart.productsInCart("idCart", "idProduct");


//**Memoria
//PRODUCTOS
// const { ProductosDaoMem } = require("./daos/products/productsDaoMem");
// const producto = new ProductosDaoMem();
// const data = producto.getAllData();
// producto.postData({
//    nombre: "camera",
//    description: "new small professional camera",
//    codigo: "104072",
//    url: "https://cdn3.iconfinder.com/data/icons/spring-2-1/30/Camera-128.png",
//    price: 1540,
//    stock: 9,
// });
// console.log(data);

//CARRITO
// const {cartsDaoMem} = require('./daos/carts/cartsDaoMem')
// const cart = new cartsDaoMem()
// cart.postData({productsInCart : 4})
