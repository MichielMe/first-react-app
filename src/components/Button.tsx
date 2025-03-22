import { useState } from "react";

type ButtonProps = {
  title: string;
  onClick: () => void;
  disabled?: boolean;
  onChange?: (value: number) => void;
  objArr?: ObjArr[];
};

interface ObjArr {
  id: number;
  name: string;
}

export function Button({ title, onClick, disabled }: ButtonProps) {
  const [counter, setCounter] = useState<number>(0);
  const string = disabled ? "disabled" : title + " " + counter;

  function handleClick() {
    onClick();
    setCounter(counter + 1);
  }

  return <button onClick={handleClick}>{string}</button>;
}
