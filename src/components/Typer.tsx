import { useState, useEffect } from "react";

type TyperProps = {
  message: string;
  shouldAnimate: boolean;
};

const Typer = ({ message, shouldAnimate }: TyperProps) => {
  const [text, setText] = useState("");

  useEffect(() => {
    if (shouldAnimate) {
      let i = 0;
      const typingInterval = setInterval(() => {
        if (i < message.length) {
          setText(message.substring(0, i + 1));
          i++;
        } else {
          clearInterval(typingInterval);
        }
      }, 50);

      return () => clearInterval(typingInterval);
    } else {
      setText(message);
    }
  }, [shouldAnimate, message]);

  return <span>{text}</span>;
};

export default Typer;
