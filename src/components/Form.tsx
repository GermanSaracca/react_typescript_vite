import React, { useState, ChangeEvent } from "react";

const Form = () => {
  const [formulario, setFormulario] = useState({
    email: "",
    name: "",
  });

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;

    setFormulario({
      ...formulario,
      [name]: value,
    });
  };

  return (
    <form autoComplete="off">
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="form-control"
          onChange={handleInputChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Nombre
        </label>
        <input
          type="name"
          name="name"
          id="name"
          className="form-control"
          onChange={handleInputChange}
        />
      </div>
      <pre>{JSON.stringify(formulario)}</pre>
    </form>
  );
};

export default Form;
