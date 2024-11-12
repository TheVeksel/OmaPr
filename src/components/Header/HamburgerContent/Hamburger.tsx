import { useState } from "react";
import Button from "../../Button/Button";
import HamburgerContent from "./HamburgerContent";

export default function Hamburger(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = (bool: boolean) => {
    setIsOpen(bool);
  };

  return (
    <>
      {isOpen === false ? (
        <Button className="hamburger" onClick={() => handleClick(true)}>
          <img src="/photo/latau.webp.webp" alt="img" />
        </Button>
      ) : (
        <Button className="hamburger__cross" onClick={() => { handleClick(false); }}>
          <div className="hamburger__cross"><img src="/photo/14b139a9eb23f9e86e42e4528879bbdb.png" alt="img" /></div>
        </Button>
      )}
      {isOpen && <HamburgerContent />}
    </>
  );
}
