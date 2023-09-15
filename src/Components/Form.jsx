import React, { useState } from "react";

const Form = ({ onAddUsuario }) => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (nombre.length > 5 && email.length > 4) {
      onAddUsuario({ nombre, email });
      setNombre("");
      setEmail("");
      alert(`Gracias ${nombre}, te contactaremos lo antes posible vía mail.`);
    } else if (nombre.length <= 5) {
      alert("El nombre debe tener más de 5 caracteres.");
    } else if (email.length <= 4) {
      alert("El email debe tener el formato completo.");
    } else {
      alert("Por favor verifique su información nuevamente.");
    }

    console.log("Usuario Registrado");
    console.log(nombre, email);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingrese su Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        ></input>
        <input
          type="email"
          placeholder="Ingrese su Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <button type="submit">enviar</button>
      </form>
    </div>
  );
};

export default Form;
