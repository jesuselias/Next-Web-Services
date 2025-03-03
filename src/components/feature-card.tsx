import {
  Typography,
  Card,
  CardBody,
} from "@material-tailwind/react";

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
  price?: string;
  initial?: string;
}

export function FeatureCard({ 
  icon: Icon, 
  title, 
  children, 
  price, 
  initial 
}: FeatureCardProps) {
  return (
    <Card className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition-all hover:shadow-lg">
      <CardBody className="p-6">
        <div className="mb-6 flex items-center">
          <div className="mr-4 h-12 w-12 flex-shrink-0 rounded-lg bg-gray-900 p-2.5 text-white">
            <Icon className="h-6 w-6" />
          </div>
          <div className="flex-1 text-center">
            <Typography  placeholder="" onPointerEnterCapture={() => {}} 
          onPointerLeaveCapture={() => {}} variant="h5" color="blue-gray" className="mb-2">
              {title}
            </Typography>
          </div>
        </div>
        <Typography  placeholder="" onPointerEnterCapture={() => {}} 
          onPointerLeaveCapture={() => {}} className="font-normal !text-gray-500">
          {children}
        </Typography>
        {price && (
          <div className="mt-6 border-t border-gray-200 pt-6">
            <Typography placeholder=""  onPointerEnterCapture={() => {}} 
          onPointerLeaveCapture={() => {}} className="mb-2 text-lg font-bold text-blue-gray-900">
              {price}
            </Typography>
            {initial && (
              <Typography placeholder="" onPointerEnterCapture={() => {}} 
              onPointerLeaveCapture={() => {}} className="text-sm text-gray-500">
                Pago inicial: {initial}
              </Typography>
            )}
          </div>
        )}
      </CardBody>
    </Card>
  );
}

export default FeatureCard;