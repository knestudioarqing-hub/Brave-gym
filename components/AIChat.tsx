
import React, { useState } from 'react';
import { MessageSquare, Send, X, Bot } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'bot', text: string}[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMsg = input;
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: "Eres 'BraveBot', el asistente experto de Brave Gym. Tu tono es motivador y profesional. Brave Gym abre de 5am a 11pm."
        }
      });
      
      setMessages(prev => [...prev, { role: 'bot', text: response.text || "Lo siento, tengo un problema técnico." }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'bot', text: "No pude conectarme con la central motivacional." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[200]">
      {isOpen ? (
        <div className="w-80 md:w-96 h-[500px] glass-card rounded-3xl flex flex-col shadow-2xl border border-[#ff4d00]/20">
          <div className="p-4 border-b border-white/10 flex justify-between items-center bg-black/40 rounded-t-3xl">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#ff4d00] rounded-full flex items-center justify-center">
                <Bot size={18} className="text-white" />
              </div>
              <span className="font-bold text-sm">BraveBot</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white"><X size={20} /></button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4 text-sm">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl ${m.role === 'user' ? 'bg-[#ff4d00] text-white' : 'bg-white/5 text-gray-300'}`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && <div className="text-[#ff4d00] animate-pulse">Pensando...</div>}
          </div>
          <div className="p-4">
            <div className="relative">
              <input 
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyPress={e => e.key === 'Enter' && handleSend()}
                type="text" 
                placeholder="Pregunta lo que quieras..."
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 focus:outline-none focus:border-[#ff4d00]"
              />
              <button onClick={handleSend} className="absolute right-2 top-2 p-1.5 bg-[#ff4d00] rounded-lg text-white">
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 bg-[#ff4d00] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all text-white"
        >
          <MessageSquare size={24} />
        </button>
      )}
    </div>
  );
};

export default AIChat;
