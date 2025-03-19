"use client";
import React from "react";
import { Typography } from "@material-tailwind/react";
import {
  PowerIcon,
  QrCodeIcon,
  ServerIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/solid";
import FeatureCard from "../components/feature-card";

const FEATURES = [
  {
    icon: PowerIcon,
    title: "Servicio Landing Page",
    children: "Diseño responsive y moderno con hasta 5 secciones personalizables, incluyendo formulario de contacto y SEO básico.",
    price: "$80-$800 USD",
    initial: "30% para inicio"
  },
  {
    icon: QrCodeIcon,
    title: "Servicio Web App Básica",
    children: "Panel de administración personalizable con gestión de contenido, autenticación de usuarios y API REST configurable.",
    price: "$800-$3,000 USD",
    initial: "35% para inicio"
  },
  {
    icon: ServerIcon,
    title: "Servicio Plataforma Empresarial",
    children: "Arquitectura microservicios con sistema de roles avanzado, integraciones múltiples y sistema de pagos integrado.",
    price: "$3,000-$12,000 USD",
    initial: "40% para inicio"
  },
  {
    icon: ShieldCheckIcon,
    title: "Servicio Enterprise",
    children: "Equipo dedicado con soporte 24/7, auditorías de seguridad y escalabilidad garantizada.",
    price: "$12,000-$20,000 USD",
    initial: "45% para inicio"
  }
];

export function Features() {
  return (
    <section className="py-28 px-4">
      <div className="container mx-auto mb-20 text-center">
        <Typography 
          variant="h2" 
          color="blue-gray" 
          className="mb-2"
          placeholder="" 
          onPointerEnterCapture={() => {}} 
          onPointerLeaveCapture={() => {}}
        >
          Servicios
        </Typography>
        <Typography 
          color="blue-gray" 
          className="mb-2 font-bold uppercase" 
          placeholder="" 
          onPointerEnterCapture={() => {}} 
          onPointerLeaveCapture={() => {}}
        >
           Variedad de servicios a tu disposición
        </Typography>
        <Typography 
          color="blue-gray" 
          className="mb-2 font-bold uppercase" 
          placeholder="" 
          onPointerEnterCapture={() => {}} 
          onPointerLeaveCapture={() => {}}
        >
            Ofrecemos diversos servicios para el desarrollo y creación de páginas web y aplicaciones móviles.
          Nuestros servicios se adaptan específicamente a las necesidades de cada proyecto, ajustando la funcionalidad según los requisitos solicitados.
          El valor del servicio varía en función de la complejidad y cantidad de funcionalidades requeridas,
          ya que esto afecta directamente el tiempo y esfuerzo necesario para su implementación. Contamos con una amplia gama de servicios disponibles para satisfacer tus necesidades específicas.
        </Typography>
      </div>
      <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-4 gap-y-12 md:grid-cols-2">
        {FEATURES.map((props, idx) => (
          <FeatureCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
export default Features;