import { FC, useState, ChangeEvent } from "react";

interface Props {
  placeholder: string;
}

const TextField: FC<Props> = ({ placeholder }) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input type="text" placeholder={placeholder} onChange={handleInputChange} />
      {inputValue}
    </div>
  );
};

export default TextField;
