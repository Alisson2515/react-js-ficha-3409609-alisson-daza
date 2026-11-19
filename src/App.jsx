import ProductoCard from './components/ProductoCard';
import { productos } from './data/productos';
import './App.css';
function App() {
  const disponibles = productos.filter(producto => producto.stock > 0);
  const hayAgotados = productos.some(producto => producto.stock === 0);
  const valorInventario = productos.reduce(
    (total, producto) => total + producto.precio * producto.stock,
    0
  );

  return (
    <main className="contenedor">
      <h1>Tienda tecnológica</h1>
      <p>Productos disponibles: {disponibles.length}</p>
      <p>Valor del inventario: ${valorInventario}</p>
      <p>
        {hayAgotados
          ? 'Hay al menos un producto agotado.'
          : 'No hay productos agotados.'}
      </p>
      <section>
        <h2>Todos los productos</h2>
        <div className="productos">
          {productos.map(producto => (
            <ProductoCard key={producto.id} producto={producto} />
          ))}
        </div>
      </section>
      <section>
        <h2>Productos disponibles</h2>
        <div className="productos">
          {disponibles.map(producto => (
            <ProductoCard key={producto.id} producto={producto} />
          ))}
        </div>
      </section>
    </main>
  );
}
export default App;