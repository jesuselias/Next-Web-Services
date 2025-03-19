"use client";
import React from "react";
import Image from "next/image";
import InfoCard from "@/components/info-card";
import { Typography, Card, CardBody } from "@material-tailwind/react";

const OPTIONS = [
  {
    title: "Aplicación Sencilla",
    description: "App mobile y funcionalidades básicas",
    price: "$800-$1,500 USD",
    initial: "30% para inicio"
  },
  {
    title: "Aplicación Media",
    description: "Panel de administración y API REST",
    price: "$1,500-$3,000 USD",
    initial: "35% para inicio"
  },
  {
    title: "Aplicación Compleja",
    description: "Microservicios y sistema de roles",
    price: "$3,000-$5,000 USD",
    initial: "40% para inicio"
  },
  {
    title: "Aplicación Enterprise",
    description: "Soporte 24/7 y escalabilidad garantizada",
    price: "$5,000-$10,000 USD",
    initial: "45% para inicio"
  }
];

export function MobileConvenience() {
  return (
    <section className="py-20 px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
        <Image
          width={256}
          height={256}
          src="/image/iphone-lic-contable.png"
          className="col-span-1 w-1/2 mx-auto lg:w-10/12"
          alt="iphone-photo"
        />
        <div className="col-span-1 mx-auto max-w-lg px-4 lg:px-0">
          <Typography placeholder="" onPointerEnterCapture={() => {}} 
          onPointerLeaveCapture={() => {}} variant="h2" color="blue-gray" className="mb-4">
            Servicios Móviles
          </Typography>
          <Typography
          placeholder=""
            onPointerEnterCapture={() => {}} 
            onPointerLeaveCapture={() => {}}
            variant="lead"
            className="mb-5 px-4 text-left text-xl !text-gray-500 lg:px-0"
          >
            Accede a nuestros servicios móviles desde cualquier lugar.
          </Typography>
          <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto items-center">
            {OPTIONS.map((props, idx) => (
              <InfoCard
                key={idx}
                {...props}
                title={props.title}
                price={props.price}
                initial={props.initial}
              >
                {props.description}
              </InfoCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MobileConvenience;