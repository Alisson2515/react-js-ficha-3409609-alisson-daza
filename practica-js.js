// Reto 6: filter() y find()

const productos = [
  { id: 1, nombre: "Laptop", precio: 2500000, stock: 5, categoria: "Tecnología" },
  { id: 2, nombre: "Mouse", precio: 50000, stock: 10, categoria: "Tecnología" },
  { id: 3, nombre: "Teclado", precio: 120000, stock: 8, categoria: "Tecnología" },
  { id: 4, nombre: "Monitor", precio: 800000, stock: 3, categoria: "Tecnología" },
  { id: 5, nombre: "Audífonos", precio: 180000, stock: 0, categoria: "Accesorios" },
  { id: 6, nombre: "USB", precio: 30000, stock: 15, categoria: "Accesorios" }
];

const productosCaros = productos.filter(producto => producto.precio > 100000);

console.log("Productos con precio mayor a $100.000:", productosCaros);

const productosRango = productos.filter(
  producto => producto.precio >= 50000 && producto.precio <= 200000
);

console.log("Productos entre $50.000 y $200.000:", productosRango);

const productosTecnologia = productos.filter(
  producto => producto.categoria === "Tecnología"
);

console.log("Productos de tecnología:", productosTecnologia);


const producto5 = productos.find(producto => producto.id === 5);

console.log("Producto con id 5:", producto5);


function buscarProducto(id) {
  return productos.find(producto => producto.id === id);
}

console.log("Buscar producto con id 3:", buscarProducto(3));
console.log("Buscar producto con id 5:", buscarProducto(5));