import React, { useState, useEffect } from "react";
import axios from "axios";

// Eliminar la definición de la interfaz
const ChatComponent = ({ isOpen }) => { // Ahora isOpen es solo una prop normal
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const chatBody = document.querySelector(".chat-body");
    if (chatBody) {
      chatBody.scrollTop = chatBody.scrollHeight;
    }
  }, [messages]);

  const API_KEY = "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";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setMessages((prevMessages) => [...prevMessages, { text: inputValue, type: "user" }]);
      setInputValue("");

      try {
        setIsLoading(true);
        const response = await axios.post(
          `https://openrouter.ai/api/v1/chat/completions`,
          {
            model: "amazon/nova-micro-v1",
            messages: [
              { role: "system", content: "You are an AI assistant." },
              { role: "user", content: inputValue },
            ],
            transforms: ["middle-out"],
            max_tokens: 0,
          },
          {
            headers: {
              Authorization: `Bearer ${API_KEY}`,
            },
          }
        );

        console.log("Response data:", response.data);

        if (Array.isArray(response.data.choices)) {
          const aiMessage = response.data.choices[0]?.message?.content;
          if (aiMessage) {
            setMessages((prevMessages) => [
              ...prevMessages,
              { text: aiMessage, type: "ai", timestamp: new Date().toISOString() },
            ]);
          } else {
            console.log("No se encontró el mensaje del asistente AI");
            setMessages((prevMessages) => [
              ...prevMessages,
              { text: "No se obtuvo respuesta esperada.", type: "ai" },
            ]);
          }
        } else {
          console.log("La estructura de la respuesta no es esperada");
          setMessages((prevMessages) => [
            ...prevMessages,
            { text: "No se obtuvo respuesta esperada.", type: "ai" },
          ]);
        }
      } catch (error) {
        console.error("Error:", error.response?.data || error.message);
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "Lo siento, hubo un error al obtener la respuesta.", type: "ai" },
        ]);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    isOpen && ( // Solo renderiza el chat si isOpen es true
      <div className="fixed bottom-16 right-4 w-80 h-1/2 bg-gray-800 border border-gray-600 rounded-lg shadow-lg flex flex-col">
        <div className="bg-gray-700 p-3 border-b border-gray-500 flex justify-between items-center">
          <span className="text-white">Asistente de IA</span>
          <button
            className="text-white"
            onClick={() => setIsOpen(false)} // Para cerrar el chat
          >
            &times;
          </button>
        </div>
        <div className="chat-body flex-grow p-3 overflow-y-auto text-white">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-3 p-2 rounded-lg ${
                message.type === "user" ? "bg-gray-600 self-end" : "bg-gray-900 self-start"
              }`}
            >
              {message.text}
            </div>
          ))}
          {isLoading && <div className="text-center">Cargando respuesta...</div>}
        </div>
        <form onSubmit={handleSubmit} className="p-3">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Escribe un mensaje..."
            disabled={isLoading}
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none"
          />
        </form>
      </div>
    )
  );
};

export default ChatComponent;
