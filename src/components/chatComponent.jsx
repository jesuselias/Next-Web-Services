import React, { useState, useEffect } from "react";
import axios from "axios";

const ChatComponent = ({ setIsChatOpen }) => {
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

  const formatText = (text) => {
    if (!text) return "";

    return text.split("\n").map((line, index) => {
      if (line.startsWith("- ") || line.startsWith("• ")) {
        return <li key={index}>{line.replace(/^- |• /, "")}</li>;
      }
      return <p key={index} className="mb-1">{line}</p>;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

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
        { headers: { Authorization: `Bearer ${API_KEY}` } }
      );

      const aiMessage = response.data.choices?.[0]?.message?.content || "No se obtuvo respuesta.";

      setMessages((prevMessages) => [
        ...prevMessages,
        { text: aiMessage, type: "ai", timestamp: new Date().toISOString() },
      ]);
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "Lo siento, hubo un error al obtener la respuesta.", type: "ai" },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-16 right-4 w-80 h-1/2 bg-gray-800 border border-gray-600 rounded-lg shadow-lg flex flex-col">
      {/* Header */}
      <div className="bg-gray-700 p-3 border-b border-gray-500 flex justify-between items-center">
        <span className="text-white">Asistente de IA</span>
        <button className="text-white text-lg font-bold hover:text-red-400" onClick={() => setIsChatOpen(false)}>
          &times;
        </button>
      </div>

      {/* Mensajes */}
      <div className="chat-body flex-grow p-3 overflow-y-auto text-white space-y-2">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`p-2 rounded-lg max-w-[90%] ${
              message.type === "user" ? "bg-blue-600 ml-auto" : "bg-gray-900 mr-auto"
            }`}
          >
            {message.type === "ai" ? formatText(message.text) : message.text}
          </div>
        ))}
        {isLoading && <div className="text-center text-gray-400">Cargando respuesta...</div>}
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="p-3 border-t border-gray-500 flex">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Escribe un mensaje..."
          disabled={isLoading}
          className="flex-grow p-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none"
        />
        <button
          type="submit"
          className="ml-2 px-4 py-2 bg-blue-500 rounded-lg text-white hover:bg-blue-600 disabled:bg-gray-500"
          disabled={isLoading}
        >
          ➤
        </button>
      </form>
    </div>
  );
};

export default ChatComponent;
