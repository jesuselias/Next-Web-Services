import React from "react";
import { Typography, Card, CardBody } from "@material-tailwind/react";

interface InfoCardProps {
  title: string;
  children: React.ReactNode;
  price?: string;
  initial?: string;
}

export function InfoCard({ title, children, price, initial }: InfoCardProps) {
  const content = children ?? 'Contenido predeterminado';

  return (
    <Card 
    className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition-all hover:shadow-lg"
    placeholder=""
    onPointerEnterCapture={() => {}} 
    onPointerLeaveCapture={() => {}}>
      <CardBody 
        className="p-6"
        placeholder=""
        onPointerEnterCapture={() => {}} 
        onPointerLeaveCapture={() => {}}>
        <div className="mb-6 flex items-center">
          <div className="flex-1 text-center">
            <Typography placeholder="" onPointerEnterCapture={() => {}} 
          onPointerLeaveCapture={() => {}}
          variant="h5" color="blue-gray" className="mb-2">
              {title}
            </Typography>
          </div>
        </div>
        <Typography placeholder="" onPointerEnterCapture={() => {}} 
          onPointerLeaveCapture={() => {}}
          className="font-normal !text-gray-500">
          {content}
        </Typography>
        {price && (
          <div className="mt-6 border-t border-gray-200 pt-6">
            <Typography placeholder="" onPointerEnterCapture={() => {}} 
          onPointerLeaveCapture={() => {}}
          className="mb-2 text-lg font-bold text-blue-gray-900">
              {price}
            </Typography>
            {initial && (
              <Typography placeholder="" onPointerEnterCapture={() => {}} 
              onPointerLeaveCapture={() => {}}
              className="text-sm text-gray-500">
                Pago inicial: {initial}
              </Typography>
            )}
          </div>
        )}
      </CardBody>
    </Card>
  );
}

export default InfoCard;