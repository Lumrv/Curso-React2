import { useState } from "react";

const InputTexto = () => {
  const [texto, setTexto] = useState("");

  const manejarCambio = (evento) => {
    setTexto(evento.target.value);
  };
  return (
    <div>
      <input
        type="text"
        value={texto}
        onChange={manejarCambio}
        placeholder="Escribe algo"
      />
      <p>Has escrito: {texto}</p>
    </div>
  );
};

export default InputTexto;
