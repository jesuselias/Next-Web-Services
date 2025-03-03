"use client";

import React from "react";
import { Typography, Card, CardBody, Avatar } from "@material-tailwind/react";
import { UserIcon } from "@heroicons/react/24/solid";
import TestimonialCard from "../components/testimonial-card";


const TESTIMONIALS = [
  {
    local: "Venezuela - Estado Lara",
    telefono: "+58 416-1234976",
    correo1:"	eddimarsuarez09@gmail.com",
    correo2:"ecsp5b2012@gmail.com",
    feedback:
      "It has been a game-changer for my business. Their dedication, expertise, and attention to detail have truly set them apart. I highly recommend their services!",
    client: "Eddimar Suarez",
    title: "Lic. en Contaduría",
    img: "/image/eddimar-foto-perfil.jpg",
  },
  {
    local: "Venezuela - Estado Lara",
    telefono: "+58 412-8514586",
    correo1:"jesus.e.elias.s@gmail.com",
    correo2:"jesus_e1992@hotmail.com",
    feedback:
      "It understood my unique needs and delivered a tailored solution promptly. Their customer support is top-notch, and I appreciate their commitment.",
    client: "Jesus Elias",
    title: "Ing. Informática, Full Stack, Mobile Developer",
    img: "/image/jesus-foto-perfil.jpg",
  },

];

export function Testimonials() {
  return (
<section className="px-10 !py-20">
  <div className="container mx-auto">
    <div className="mb-20 flex w-full flex-col items-center">
      <div className="mb-10 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-900 text-white">
        <UserIcon className="h-6 w-6" />
      </div>
      <Typography placeholder="" onPointerEnterCapture={() => {}} 
          onPointerLeaveCapture={() => {}} variant="h2" color="blue-gray" className="mb-2">
        Contactanos:
      </Typography>
    </div>
    <div className="flex flex-col md:flex-row gap-8">
      <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:px-25 flex-grow">
        {TESTIMONIALS.map((props, key) => (
          <TestimonialCard key={key} {...props} />
        ))}
      </div>
      <div className="hidden md:block ml-[-40px] max-w-[400px]">
        <Avatar src={"/image/full-stack.png"} className="w-full h-auto mb-3" size="lg"
         placeholder="Loading..." 
         onPointerEnterCapture={() => {}} 
         onPointerLeaveCapture={() => {}} />
      </div>
    </div>
  </div>
</section>
  );
}
export default Testimonials;




