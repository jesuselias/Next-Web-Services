import { useState } from "react";
import Image from "next/image";
import { Button } from "@material-tailwind/react";
import downloadIcon from './../../public/image/descarga.png';
import whatsappIcon from './../../public/image/whatssap.png';

export function FixedPlugin() {
  const [isLoading, setIsLoading] = useState(false);

  const downloadCV = () => {
    console.log('Download button clicked');
    setIsLoading(true);

    const pdfUrl = '/CV_Full_Stack_Jesus_Elias.pdf';

    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'CV-Jesus-Elias.pdf';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    console.log('Download started:', pdfUrl);
    setIsLoading(false);
  };

  return (
    <div>
      {/* Contenedor de los botones flotantes */}
      <div className="fixed bottom-4 right-4 flex flex-col gap-3">

        {/* Botón de WhatsApp */}
        <a 
          href="https://api.whatsapp.com/send?phone=584128514586" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 p-3 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition"
        >
          <Image
            width={24}
            height={24}
            className="w-6 h-6"
            alt="WhatsApp"
            src={whatsappIcon}
          />
          WhatsApp
        </a>

        {/* Botón de Descargar CV */}
        <Button
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
          color="white"
          size="sm"
          className="flex gap-2 pl-2 items-center border border-blue-gray-50 shadow-lg hover:shadow-xl transition"
          onClick={downloadCV}
        >
          <Image
            width={20}
            height={20}
            className="w-5 h-5"
            alt="Download"
            src={downloadIcon}
          />
          Descargar CV
        </Button>
      </div>

      {/* Mensaje de carga opcional */}
      {isLoading && (
        <div className="fixed bottom-16 right-4 p-2 bg-gray-800 text-white rounded-md">
          Descargando...
        </div>
      )}
    </div>
  );
}
