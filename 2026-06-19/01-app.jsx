const { useState } = React;

function App() {
  const [apellido, setApellido] = useState("");
  const [nombre, setNombre] = useState("");
  const [nota, setNota] = useState(0);
  const [maxId, setMaxId] = useState(0);
  const [listadoNotas, setListadoNotas] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (apellido.trim() === "" || nombre.trim() === "" || nota <= 0) {
      return;
    }

    const newMaxId = maxId + 1;
    setListadoNotas([
      ...listadoNotas,
      { id: newMaxId, apellido: apellido.trim(), nombre: nombre.trim(), nota },
    ]);
    setMaxId(newMaxId);
    setApellido("");
    setNombre("");
    setNota(0);
  };

  return (
    <main>
      <h1>Notas alumnos</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFol="apellido">Apellido:</label>
        <input
          id="apellido"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
        />
        <label htmlFol="nombre">Nombre:</label>
        <input
          id="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <label htmlFol="nota">Nota:</label>
        <input
          id="nota"
          type="number"
          min={0}
          max={10}
          value={nota}
          onChange={(e) => setNota(Number(e.target.value))}
        />
        <div>
          <button type="submit">Cargar</button>
        </div>
      </form>

      <h3>Tabla</h3>
      {listadoNotas.length === 0 ? (
        <p>Sin alumnos cargados</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Apellido</th>
              <th>Nombre</th>
              <th>Nota</th>
            </tr>
          </thead>
          <tbody>
            {listadoNotas.map((alumno) => (
              <tr key={alumno.id}>
                <td>{alumno.apellido}</td>
                <td>{alumno.nombre}</td>
                <td>{alumno.nota}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
}
