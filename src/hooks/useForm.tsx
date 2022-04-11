import { useState, ChangeEvent } from "react";


export const useForm = <T extends Object>  ( initState: T ) => {


    const [formulario, setFormulario] = useState(initState);
    
      const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target;
    
        setFormulario({
          ...formulario,
          [name]: value,
        });

    };

    return {
        formulario,
        handleInputChange
    }
}