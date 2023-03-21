// import React from 'react';
// import Navigation from '../components/Navigation';

// function Login(props) {
//     return (
//         <div>
//             <Navigation/>
//             Vous êtes sur la page login
//         </div>
//     );
// }

// export default Login;

import React, { useState } from "react";
import Navigation from '../components/Navigation';


function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();

    // Vérifier si les champs sont valides
    if (!username || !password) {
      setError("Veuillez remplir tous les champs");
      return;
    }

    // Effectuer la vérification de l'authentification ici
    // ...

    // Si l'authentification est valide, rediriger vers la page principale
    alert(username);
    alert(password);
    // window.location.href = "/home";
  };

  return (
    <div>
     <Navigation/>

      <h1>Page de connexion</h1>
      {error && <div>{error}</div>}
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Nom d'utilisateur :</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Mot de passe :</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Connexion</button>
      </form>
    </div>
  );
}

export default Login;
