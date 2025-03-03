import React from "react";
import { Typography, Card, CardBody, Avatar } from "@material-tailwind/react";

interface TestimonialCardProps {
  img: string;
  feedback: string;
  client: string;
  title: string;
  local?: string;
  telefono?: string;
  correo1?: string;
  correo2?: string;
}

export function TestimonialCard({
  img,
  feedback,
  client,
  title,
  local,
  telefono,
  correo1,
  correo2,
}: TestimonialCardProps) {
  return (
    <Card shadow={false} className="items-center text-center">
      <CardBody>
        <Avatar src={img} className="mb-3" alt={client} size="lg" />
        <Typography placeholder="" onPointerEnterCapture={() => {}} 
          onPointerLeaveCapture={() => {}} variant="h6" color="blue-gray">
          {client}
        </Typography>
        <Typography placeholder="" onPointerEnterCapture={() => {}} 
          onPointerLeaveCapture={() => {}}
          variant="small" className="mb-3 font-medium !text-gray-700">
          {title}
        </Typography>
        {(local || telefono || correo1 || correo2) && (
          <div className="mt-6 border-t border-gray-200 pt-6">
            {local && (
              <Typography placeholder="" onPointerEnterCapture={() => {}} 
              onPointerLeaveCapture={() => {}} className="mb-2 text-sm font-medium !text-gray-700">
                <i className="fas fa-map-marker-alt mr-2"></i>
                {local}
              </Typography>
            )}
            {telefono && (
              <Typography placeholder="" onPointerEnterCapture={() => {}} 
              onPointerLeaveCapture={() => {}} className="mb-2 text-sm font-medium !text-gray-700">
                <i className="fas fa-phone mr-2"></i>
                {telefono}
              </Typography>
            )}
            {correo1 && (
              <Typography placeholder="" onPointerEnterCapture={() => {}} 
              onPointerLeaveCapture={() => {}} className="mb-2 text-sm font-medium !text-gray-700">
                <i className="fas fa-envelope mr-2"></i>
                {correo1}
              </Typography>
            )}
            {correo2 && (
              <Typography placeholder="" onPointerEnterCapture={() => {}} 
              onPointerLeaveCapture={() => {}} className="mb-2 text-sm font-medium !text-gray-700">
                <i className="fas fa-envelope mr-2"></i>
                {correo2}
              </Typography>
            )}
          </div>
        )}
      </CardBody>
    </Card>
  );
}

export default TestimonialCard;