import { useState } from "react"; // Importa el hook useState
import Image from "next/image"; // Importa el componente Image de Next.js
import { Button } from "@material-tailwind/react"; // Importa el componente Button de Material Tailwind
import ChatComponent from "./ChatComponent"; // Importa el componente ChatComponent

export function FixedPlugin() {
  const [isChatOpen, setIsChatOpen] = useState(false); // Estado para controlar si el chat está abierto o cerrado

  // Función para alternar el estado de apertura y cierre del chat
  const toggleChat = () => {
    setIsChatOpen(!isChatOpen); // Alterna el valor de isChatOpen
  };

  return (
    <div>
      {/* Botón que al hacer clic abre o cierra el chat */}
      <Button
        color="white"
        size="sm"
        className="!fixed bottom-4 right-4 flex gap-1 pl-2 items-center border border-blue-gray-50"
        onClick={toggleChat}
      >
        <Image
          width={128}
          height={128}
          className="w-5 h-5"
          alt="Material Tailwind"
          src="https://www.material-tailwind.com/favicon.png"
        />
        Asistente IA
      </Button>

      {/* Coloca el chat en la parte superior derecha */}
      {isChatOpen && (
        <div className="!fixed bottom-4 right-4 flex gap-1 pl-2 items-center border border-blue-gray-50">
          {/* Pasamos setIsChatOpen a ChatComponent */}
          <ChatComponent setIsChatOpen={setIsChatOpen} />
        </div>
      )}
    </div>
  );
}
