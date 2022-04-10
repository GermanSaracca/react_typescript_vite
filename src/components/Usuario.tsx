import { useState } from "react";

interface User {
  uid: string;
  name: string;
}

const Usuario = () => {
  const [user, setUser] = useState<User>();

  const login = () => {
    setUser({
      uid: "okadoaksdok231",
      name: "German",
    });
  };

  return (
    <div>
      <h3>Usuario</h3>
      <button className="btn btn-outline-primary" onClick={login}>
        Login
      </button>
      {!user ? <p>No hay usuario</p> : <pre>{JSON.stringify(user, null, 2)}</pre>}
    </div>
  );
};

export default Usuario;
