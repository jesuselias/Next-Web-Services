"use client";

import Image from "next/image";
import { Button, Typography } from "@material-tailwind/react";

function Hero() {
  return (
    <div className="relative min-h-screen w-full">
      <header className="grid !min-h-[49rem] bg-gray-900 px-8">
        <div className="container mx-auto mt-32 grid h-full w-full grid-cols-1 place-items-center lg:mt-14 lg:grid-cols-2">
          <div className="col-span-1">
            <Typography 
              variant="h1" 
              color="white" 
              className="mb-4" 
              placeholder=""
              onPointerEnterCapture={() => {}} 
              onPointerLeaveCapture={() => {}}>
              Desarrollo Digital<br /> Web y Móvil Profesional
            </Typography>
            <Typography
              placeholder=""
              onPointerEnterCapture={() => {}} 
              onPointerLeaveCapture={() => {}}
              variant="lead"
              className="mb-7 !text-white md:pr-16 xl:pr-28"
            >
             Creamos soluciones digitales personalizadas para tu negocio.
            </Typography>
            <Typography
              placeholder=""
              onPointerEnterCapture={() => {}} 
              onPointerLeaveCapture={() => {}} 
              className="mb-4" 
              color="white" 
              variant="h6">
              Trayectoria
            </Typography>
            <div className="flex flex-col gap-2 md:mb-2 md:w-10/12 md:flex-row">
              <a href="https://jesuselias.github.io/Portafolio/" target="_blank">
              <Button
                size="lg"
                color="white"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
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
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
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
          <Image
            width={470}
            height={576}
            src="/image/iphones-desing-mobile.png"
            alt="team work"
            className="col-span-1 my-20 h-full max-h-[30rem] -translate-y-32 md:max-h-[36rem] lg:my-0 lg:ml-auto lg:max-h-[40rem] lg:translate-y-0"
          />
        </div>
      </header>
      <div className="mx-8 lg:mx-16 -mt-24 rounded-xl bg-white p-5 md:p-14 shadow-md">
        <div>
          <Typography
            placeholder=""
            onPointerEnterCapture={() => {}} 
            onPointerLeaveCapture={() => {}} 
            variant="h3" 
            color="blue-gray" 
            className="mb-3"
          >
            Soluciones Profesionales
          </Typography>
          <Typography
            placeholder=""
            onPointerEnterCapture={() => {}} 
            onPointerLeaveCapture={() => {}}
            variant="paragraph"
            className="font-normal !text-gray-500 lg:w-5/12"
          >
            Brindamos soluciones web profesionales para empresas y particulares. 
            Nuestros servicios están adaptados para satisfacer diferentes necesidades y presupuestos. 
            Ofrecemos soluciones web profesionales que pueden variar desde un portafolio personal hasta un portal empresarial completo.
          </Typography>
        </div>
      </div>
    </div>
  );
}
export default Hero;