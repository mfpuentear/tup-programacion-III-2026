const { useState } = React;

function App() {
  const [nuevoNumero, setNuevoNumero] = useState(0);
  const [listadoNumeros, setListadoNumeros] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Crear un nuevo arreglo a partir del anterior y agregarle el nuevo numero
    // Los tres puntos (...) es el operador spread (esparcir)
    setListadoNumeros([...listadoNumeros, nuevoNumero]);
    setNuevoNumero(0);
  };

  return (
    <main>
      <h1>Listado de números</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="numero">Nuevo número</label>
        <input
          id="numero"
          type="number"
          value={nuevoNumero}
          onChange={(e) => setNuevoNumero(Number(e.target.value))}
        />
        <div>
          <button type="submit">Agregar</button>
        </div>
      </form>

      <h3>Listado</h3>
      {/* Renderizado condicional con operador ternario */}
      {listadoNumeros.length === 0 ? (
        <p>Sin números cargados</p>
      ) : (
        <ul>
          {listadoNumeros.map((numero, index) => (
            <li key={index}>{numero}</li>
          ))}
        </ul>
      )}

      {listadoNumeros.length !== 0 && (
        <>
          {/* Fragmento */}
          <h3>Cálculos</h3>
          <p>Cantidad elementos: {listadoNumeros.length}</p>
          <p>
            Suma total:{" "}
            {listadoNumeros.reduce((acc, numero) => (acc += numero), 0)}
          </p>
          <p>
            Promedio:{" "}
            {(
              listadoNumeros.reduce((acc, numero) => (acc += numero), 0) /
              listadoNumeros.length
            ).toFixed(3)}
          </p>
        </>
      )}
    </main>
  );
}
