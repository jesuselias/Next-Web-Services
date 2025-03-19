import React, { useEffect, useState } from "react";
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
  onClick?: () => void;
}

function NavItem({ children, onClick }: NavItemProps) {
  return (
    <li>
      <Typography
        as="a"
        onClick={onClick}
        variant="small"
        className="cursor-pointer font-medium"
        placeholder="" 
        onPointerEnterCapture={() => {}} 
        onPointerLeaveCapture={() => {}}
      >
        {children}
      </Typography>
    </li>
  );
}

const scrollToSection = (sectionId: string, offset: number = 0) => {
  const section = document.getElementById(sectionId);
  if (section) {
    window.scrollTo({
      top: section.offsetTop + offset,
      behavior: "smooth",
    });
  }
};

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const handleOpen = () => setOpen(!open);

  useEffect(() => {
    const handleResize = () => window.innerWidth >= 960 && setOpen(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolling(window.scrollY > 0);
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
      placeholder="" 
      onPointerEnterCapture={() => {}} 
      onPointerLeaveCapture={() => {}}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Avatar 
          src="logos/logo-je-blue.png" 
          className="mb-3" 
          size="lg"
          placeholder="" 
          onPointerEnterCapture={() => {}} 
          onPointerLeaveCapture={() => {}} 
          />
        <ul className={`ml-10 hidden items-center gap-6 lg:flex ${isScrolling ? "text-gray-900" : "text-white"}`}>
          <NavItem onClick={() => scrollToSection("hero-section", -100)}>Inicio</NavItem>
          <NavItem onClick={() => scrollToSection("feature-section", -100)}>Servicios</NavItem>
          <NavItem onClick={() => scrollToSection("testimonials-section", -100)}>Contacto</NavItem>
        </ul>
        <div className="hidden gap-2 lg:flex lg:items-center">
          <a href="https://github.com/jesuselias" target="_blank">
            <IconButton 
            variant="text" 
            color={isScrolling ? "gray" : "white"} 
            size="sm"
            placeholder="" 
            onPointerEnterCapture={() => {}} 
            onPointerLeaveCapture={() => {}}
            >
              <i className="fa-brands fa-github text-base" />
            </IconButton>
          </a>
          <a href="https://www.linkedin.com/in/jesus-e-elias-s-8b0345148/" target="_blank">
            <IconButton 
            variant="text" 
            color={isScrolling ? "gray" : "white"} 
            size="sm"
            placeholder="" 
            onPointerEnterCapture={() => {}} 
            onPointerLeaveCapture={() => {}}
            >
              <i className="fa-brands fa-linkedin text-base" />
            </IconButton>
          </a>
          <a href="https://www.youtube.com/watch?v=3jwGbwSr4WE&t=12s" target="_blank">
            <IconButton 
            variant="text" 
            color={isScrolling ? "gray" : "white"} 
            size="sm"
            placeholder="" 
            onPointerEnterCapture={() => {}} 
            onPointerLeaveCapture={() => {}}
            >
              <i className="fa-brands fa-youtube text-base" />
            </IconButton>
          </a>
          <a href="https://www.tiktok.com/@jesuseliasdev" target="_blank">
            <IconButton 
            variant="text" 
            color={isScrolling ? "gray" : "white"} 
            size="sm"
            placeholder="" 
            onPointerEnterCapture={() => {}} 
            onPointerLeaveCapture={() => {}}
            >
              <i className="fa-brands fa-tiktok text-base" />
            </IconButton>
          </a>
          <a href="https://www.instagram.com/jesuseliasdev/" target="_blank">
            <IconButton 
            variant="text" 
            color={isScrolling ? "gray" : "white"} 
            size="sm"
            placeholder="" 
            onPointerEnterCapture={() => {}} 
            onPointerLeaveCapture={() => {}}
            >
              <i className="fa-brands fa-instagram text-base" />
            </IconButton>
          </a>
        </div>
        <IconButton
          variant="text"
          color={isScrolling ? "gray" : "white"}
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
          placeholder="" 
          onPointerEnterCapture={() => {}} 
          onPointerLeaveCapture={() => {}}
        >
          {open ? <XMarkIcon strokeWidth={2} className="h-6 w-6" /> : <Bars3Icon strokeWidth={2} className="h-6 w-6" />}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-4 rounded-lg border-t border-blue-gray-50 bg-white px-6 py-5">
          <ul className="flex flex-col gap-4 text-blue-gray-900">
            <NavItem onClick={() => scrollToSection("hero-section", -100)}>Inicio</NavItem>
            <NavItem onClick={() => scrollToSection("feature-section", -100)}>Servicios</NavItem>
            <NavItem onClick={() => scrollToSection("testimonials-section", -100)}>Contacto</NavItem>
          </ul>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
