import { useEffect } from "react";

const MensajeConsola = () => {
  useEffect(() => {
    console.log("El componente se ha renderizado");
  }, []);

  return <div>Mira la consola para ver el mensaje</div>;
};

export default MensajeConsola;
