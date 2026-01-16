
import React, { useState } from 'react';
import { MessageSquare, Send, X, Bot } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { useLanguage } from '../context/LanguageContext';

const AIChat: React.FC = () => {
  const { t } = useLanguage();
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

    const apiKey = process.env.API_KEY || (window as any).process?.env?.API_KEY;

    if (!apiKey) {
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          role: 'bot', 
          text: t.aiChat.errorKey
        }]);
        setIsLoading(false);
      }, 1000);
      return;
    }

    try {
      const ai = new GoogleGenAI({ apiKey });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: t.aiChat.systemPrompt
        }
      });
      
      setMessages(prev => [...prev, { role: 'bot', text: response.text || "¡No te detengas! Sigue entrenando duro." }]);
    } catch (error) {
      console.error("Error de IA:", error);
      setMessages(prev => [...prev, { role: 'bot', text: t.aiChat.errorGen }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[200]">
      {isOpen ? (
        <div className="w-80 md:w-96 h-[500px] glass-card rounded-3xl flex flex-col shadow-2xl border border-[#ff4d00]/20 animate-in zoom-in duration-300">
          <div className="p-4 border-b border-white/10 flex justify-between items-center bg-black/40 rounded-t-3xl">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#ff4d00] rounded-full flex items-center justify-center">
                <Bot size={18} className="text-white" />
              </div>
              <span className="font-bold text-sm">{t.aiChat.botName}</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors"><X size={20} /></button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4 text-sm">
            {messages.length === 0 && (
              <div className="text-center text-gray-500 mt-10 px-4">
                <Bot className="mx-auto mb-4 opacity-20" size={48} />
                <p>{t.aiChat.initial}</p>
              </div>
            )}
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl ${m.role === 'user' ? 'bg-[#ff4d00] text-white rounded-tr-none' : 'bg-white/5 text-gray-300 rounded-tl-none border border-white/5'}`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/5 p-3 rounded-2xl rounded-tl-none text-[#ff4d00]">
                  <div className="flex gap-1">
                    <span className="animate-bounce">.</span>
                    <span className="animate-bounce [animation-delay:0.2s]">.</span>
                    <span className="animate-bounce [animation-delay:0.4s]">.</span>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="p-4 bg-black/20">
            <div className="relative">
              <input 
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyPress={e => e.key === 'Enter' && handleSend()}
                type="text" 
                placeholder={t.aiChat.placeholder}
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 pr-12 focus:outline-none focus:border-[#ff4d00] transition-all text-white placeholder-gray-600"
              />
              <button 
                onClick={handleSend} 
                disabled={isLoading}
                className="absolute right-2 top-2 p-1.5 bg-[#ff4d00] rounded-lg text-white hover:bg-[#e64500] disabled:opacity-50 transition-all shadow-lg shadow-[#ff4d00]/20"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 bg-[#ff4d00] rounded-full flex items-center justify-center shadow-lg shadow-[#ff4d00]/40 hover:scale-110 active:scale-95 transition-all text-white relative group"
        >
          <MessageSquare size={24} />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full animate-ping"></span>
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full"></span>
        </button>
      )}
    </div>
  );
};

export default AIChat;
