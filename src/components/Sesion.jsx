import { useState } from "react";
import Login from "./Login";
import Logout from "./Logout";

const Sesion = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? <Logout /> : <Login />}
      <button onClick={() => setisLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Cerrar Sesión" : "Iniciar Sesión"}
      </button>
    </div>
  );
};

export default Sesion;
