"use client";
import Image from "next/image";
import { Typography, IconButton, Button } from "@material-tailwind/react";

const LINKS = ["Inicio", "Servicios", "Contactanos"];
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-10 bg-gray-900 px-8 pt-12">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-8 md:justify-between">
          <div className="text-center md:text-left">
            <Typography
            placeholder=""
             onPointerEnterCapture={() => {}} 
             onPointerLeaveCapture={() => {}}
              as="a"
              href="https://www.material-tailwind.com"
              target="_blank"
              variant="h5"
              color="white"
              className="mb-4"
            >
              Desarrollo de Aplicaciones Web y Móviles
            </Typography>
            <Typography
            placeholder=""
             onPointerEnterCapture={() => {}} 
             onPointerLeaveCapture={() => {}}
            color="white" className="mb-12 font-normal">
              Agradecemos su visita. ¡Estamos a su disposición!
            </Typography>
            <ul className="flex flex-wrap items-center justify-center md:justify-start">
              {LINKS.map((link, idx) => (
                <li key={link}>
                  <Typography
                  placeholder=""
                   onPointerEnterCapture={() => {}} 
                   onPointerLeaveCapture={() => {}}
                    as="a"
                    href="#"
                    color="white"
                    className={`py-1 font-medium transition-colors ${
                      idx === 0 ? "pr-3" : "px-3"
                    }`}
                  >
                    {link}
                  </Typography>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8 w-full md:mt-0 md:w-auto">
            <Typography
            placeholder=""
             onPointerEnterCapture={() => {}} 
             onPointerLeaveCapture={() => {}} 
            variant="h6" color="white" className="mb-3">
              Trayectoria
            </Typography>
            <div className="flex flex-col gap-2">
            <a href="https://jesuselias.github.io/Portafolio/" target="_blank">
                <Button
                  size="lg"
                  color="white"
                  className="flex justify-center items-center gap-3"
                >
                  <Image
                    width={256}
                    height={256}
                    src="/logos/logo-react.png"
                    alt="metamask"
                    className="w-6 h-6"
                  />
                  Portafolio
              </Button>
              </a>
              <a href="https://jesuselias.github.io/Experiencia/" target="_blank">
                <Button
                  size="lg"
                  color="white"
                  className="flex justify-center items-center gap-3"
                >
                  <Image
                    width={256}
                    height={256}
                    src="/logos/logo-angular.png"
                    alt="metamask"
                    className="w-6 h-6"
                  />
                  Experiencia
                </Button>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 gap-x-8 border-t border-gray-700 py-7 md:justify-between">
          <Typography
          placeholder=""
             onPointerEnterCapture={() => {}} 
             onPointerLeaveCapture={() => {}}
            color="white"
            className="text-center font-normal opacity-75"
          >
            &copy; {CURRENT_YEAR} Hecho con{" "}
            <a href="https://nextjs.org/" target="_blank">
              Next.js
            </a>{" "}
            +{" "}
            <a href="https://www.material-tailwind.com" target="_blank">
              Material Tailwind
              
            </a>
            .
          </Typography>

          <div className="flex gap-2">
            <a href="https://github.com/jesuselias" target="_blank">
              <IconButton
                variant="text"
                color="white"
                size="sm"
              >
                <i className="fa-brands fa-github text-2xl not-italic opacity-75" />
              </IconButton>
            </a>
            <a href="https://www.linkedin.com/in/jesus-e-elias-s-8b0345148/" target="_blank">
              <IconButton
                variant="text"
                color="white"
              >
                <i className="fa-brands fa-linkedin text-2xl not-italic opacity-75" />
              </IconButton>
            </a>
            <a href="https://www.youtube.com/watch?v=3jwGbwSr4WE&t=12s" target="_blank">
              <IconButton
                variant="text"
                color="white"
              >
              <i className="fa-brands fa-youtube text-2xl not-italic opacity-75" />
            </IconButton>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
