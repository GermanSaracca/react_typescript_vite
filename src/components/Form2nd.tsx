
import { useForm } from '../hooks/useForm'

const Form2nd = () => {

    const { formulario, handleInputChange} = useForm({
        city: '',
        country: '',
        email: '',
    })

    const { city, country, email} = formulario

  return (
    <form autoComplete="off">
    <div className="mb-3">
      <label htmlFor="city" className="form-label">
        Ciudad
      </label>
      <input
        type="city"
        name="city"
        id="city"
        value={city}
        className="form-control"
        onChange={handleInputChange}
      />
    </div>

    <div className="mb-3">
      <label htmlFor="country" className="form-label">
        Pais
      </label>
      <input
        type="country"
        name="country"
        id="country"
        value={country}
        className="form-control"
        onChange={handleInputChange}
      />
    </div>
    <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          className="form-control"
          onChange={handleInputChange}
        />
      </div>
    <pre>{JSON.stringify(formulario)}</pre>
  </form>
  )
}

export default Form2nd