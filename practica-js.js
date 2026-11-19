const productos = [
  { id: 1, nombre: "Mouse", precio: 50000, categoria: "Tecnología", stock: 5 },
  { id: 2, nombre: "Teclado", precio: 80000, categoria: "Tecnología", stock: 12 },
  { id: 3, nombre: "Monitor", precio: 450000, categoria: "Monitores", stock: 0 } 
];
const hayProductosAgotados = productos.some(producto => producto.stock === 0);

console.log("--- 1. ¿Hay algún producto agotado? (some) ---");
console.log(hayProductosAgotados); 


const todosSuperanMinimo = productos.every(producto => producto.precio > 40000);

console.log("\n--- 2. ¿Todos cuestan más de $40.000? (every) ---");
console.log(todosSuperanMinimo); 


const valorTotalInventario = productos.reduce((acumulador, producto) => {
  return acumulador + (producto.precio * producto.stock);
}, 0);

console.log("\n--- 3. Valor Total del Inventario (reduce) ---");
console.log(`$${valorTotalInventario}`);