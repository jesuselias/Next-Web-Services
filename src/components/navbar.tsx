import React from "react";
import Image from "next/image";
import {
  Navbar as MTNavbar,
  Collapse,
  IconButton,
  Typography,
  Button,
  Avatar,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}
function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <Typography
        placeholder=""
        as="a"
        href={href || "#"}
        target={href ? "_blank" : "_self"}
        variant="small"
        className="font-medium"
      >
        {children}
      </Typography>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);

  function handleOpen() {
    setOpen((cur) => !cur);
  }

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  React.useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <MTNavbar
      fullWidth
      shadow={false}
      blurred={false}
      color={isScrolling ? "white" : "transparent"}
      className="fixed top-0 z-50 border-0"
    >
      <div className="container mx-auto flex items-center justify-between">
        <Avatar src="logos/logo-je-blue.png" className="mb-3" size="lg" />
        <ul
          className={`ml-10 hidden items-center gap-6 lg:flex ${
            isScrolling ? "text-gray-900" : "text-white"
          }`}
        >
          <NavItem>Inicio</NavItem>
          <NavItem>Servicios</NavItem>
          <NavItem>Contactanos</NavItem>
          {/* <NavItem href="https://www.material-tailwind.com/docs/react/installation">
            Docs
          </NavItem> */}
        </ul>
        <div className="hidden gap-2 lg:flex lg:items-center">
          <a href="https://github.com/jesuselias" target="_blank">
            <IconButton
              variant="text"
              color={isScrolling ? "gray" : "white"}
              size="sm"
            >
              <i className="fa-brands fa-github text-base" />
            </IconButton>
          </a>
          <a href="https://www.linkedin.com/in/jesus-e-elias-s-8b0345148/" target="_blank">
            <IconButton
              variant="text"
              color={isScrolling ? "gray" : "white"}
              size="sm"
            >
              <i className="fa-brands fa-linkedin text-base" />
            </IconButton>
          </a>
          <a href="https://www.youtube.com/watch?v=3jwGbwSr4WE&t=12s" target="_blank">
          <IconButton
            variant="text"
            color={isScrolling ? "gray" : "white"}
            size="sm"
          >
            <i className="fa-brands fa-youtube text-base" />
          </IconButton>
          </a>
          <a href="https://www.material-tailwind.com/blocks" target="_blank">
            <Button 
              size="sm"  // Cambiado a "sm" para un botón más pequeño
              color="white"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
              className="flex justify-center items-center gap-1 border border-blue-gray-50"
            >
              <Image
                width={64}  // Reducido de 128 a 64
                height={64} // Reducido de 128 a 64
                className="w-3 h-3" // Ajustado para mantener las proporciones
                alt="Material Tailwind"
                src="https://www.material-tailwind.com/favicon.png"
              />{" "}
              Ejemplos
            </Button>
          </a>
          
        </div>
        <IconButton
          variant="text"
          color={isScrolling ? "gray" : "white"}
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-4 rounded-lg border-t border-blue-gray-50 bg-white px-6 py-5">
          <ul className="flex flex-col gap-4 text-blue-gray-900">
            <NavItem>Home</NavItem>
            <NavItem>About Us</NavItem>
            <NavItem>Contact Us</NavItem>
            <NavItem href="https://www.material-tailwind.com/docs/react/installation">
              Docs
            </NavItem>
          </ul>
          <div className="mt-4 flex items-center gap-2">
            <IconButton variant="text" color="gray" size="sm">
              <i className="fa-brands fa-twitter text-base" />
            </IconButton>
            <IconButton variant="text" color="gray" size="sm">
              <i className="fa-brands fa-facebook text-base" />
            </IconButton>
            <IconButton variant="text" color="gray" size="sm">
              <i className="fa-brands fa-instagram text-base" />
            </IconButton>
            <a href="https://www.material-tailwind.com/blocks" target="_blank">
              <Button color="gray" size="sm" className="ml-auto">
                Blocks
              </Button>
            </a>
          </div>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
