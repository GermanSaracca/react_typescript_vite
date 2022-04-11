
import { useForm } from "../hooks/useForm";

interface FormData {
  email: string;
  name: string;
  age: number;
}


const Form = () => {

  const {formulario, handleInputChange} = useForm<FormData>({
    email: "gersara@temp.co",
    name: "ger",
    age: 32
  })

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
          value={formulario.email}
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
          value={formulario.name}
          className="form-control"
          onChange={handleInputChange}
        />
      </div>
      <pre>{JSON.stringify(formulario)}</pre>
    </form>
  );
};

export default Form;
