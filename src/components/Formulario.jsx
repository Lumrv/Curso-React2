import { useState } from "react";

const Formulario = () => {
  const [formData, setformData] = useState({ nombre: "", apellido: "" });

  const manejarCambio = (evento) => {
    const { name, value } = evento.target;
    setformData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const manejarSubmit = (evento) => {
    evento.preventDefault();
    console.log(`Nombre: ${formData.nombre}`, `Apellido: ${formData.apellido}`);
  };

  return (
    <form onSubmit={manejarSubmit}>
      <input
        type="text"
        name="nombre"
        placeholder="Escribe tu nombre"
        value={formData.nombre}
        onChange={manejarCambio}
      />
      <input
        type="text"
        name="apellido"
        placeholder="Escribe tu apellido"
        value={formData.apellido}
        onChange={manejarCambio}
      />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Formulario;
