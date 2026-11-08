import { useState } from "react";

const MensajeCondicional = () => {
  const [mensaje, setMensaje] = useState("");

  return (
    <div>
      <input
        type="text"
        value={mensaje}
        onChange={(e) => setMensaje(e.target.value)}
        placeholder="escribe un mensaje"
      />
      {mensaje ? (
        <p>Tu mensaje es: {mensaje}</p>
      ) : (
        <p>No hay ningún mensaje aún</p>
      )}
      {mensaje && (
        <button
          onClick={() => {
            alert(`Mensaje Enviado. Mensaje: ${mensaje}`);
          }}
        >
          Enviar
        </button>
      )}
    </div>
  );
};

export default MensajeCondicional;
