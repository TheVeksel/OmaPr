import { useEffect, useRef, useState } from "react";
import Button from "../../Button/Button";
import HamburgerContent from "./HamburgerContent";

export default function Hamburger(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const hamburgerRef = useRef<HTMLDivElement>(null);

  const handleClick = (bool: boolean) => {
    setIsOpen(bool);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (hamburgerRef.current && !hamburgerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={hamburgerRef}> 
      {isOpen === false ? (
        <Button className="hamburger" onClick={() => handleClick(true)}>
          <img src="/photo/latau.webp.webp" alt="img" />
        </Button>
      ) : (
        <Button className="hamburger__cross" onClick={() => handleClick(false)}>
          <div className="hamburger__cross">
            <img src="/photo/14b139a9eb23f9e86e42e4528879bbdb.png" alt="img" />
          </div>
        </Button>
      )}
      {isOpen && <HamburgerContent onClose={() => handleClick(false)} />}
    </div>
  );
}
