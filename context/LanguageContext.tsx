
import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'es' | 'pt';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: any;
}

const translations = {
  es: {
    navbar: {
      offer: "¡OFERTA POR TIEMPO LIMITADO! OBTÉN UN 20% DE DESCUENTO EN TU PRIMER MES DE ENTRENAMIENTO.",
      home: "Inicio",
      pages: "Páginas",
      blog: "Blog",
      contact: "Contáctanos",
      shop: "Tienda",
      join: "ÚNETE AHORA",
      mobileJoin: "Únete Ahora"
    },
    hero: {
      badge: "#1 Instalación de entrenamiento en la ciudad",
      titleLine1: "Sé Atrevido.",
      titleLine2: "Sé Fuerte.",
      titleLine3: "SÉ VALIENTE.",
      description: "Desata tu guerrero interior en Brave Gym. Proporcionamos el entorno de élite, entrenamiento experto y equipamiento de alto rendimiento necesarios para romper tus límites.",
      ctaPrimary: "Prueba Gratuita",
      ctaSecondary: "Ver Programas",
      circleText: "Excelencia Brave Gym • Excelencia Brave Gym • "
    },
    stats: {
      sold: "Productos Vendidos",
      clients: "Clientes Felices",
      quality: "Garantía de Calidad"
    },
    features: {
      subtitle: "Nuestros Programas",
      titleStart: "Diseñado para aquellos que",
      titleEnd: "quieren ganar.",
      f1Title: "Entrenamiento de Fuerza",
      f1Desc: "Equipamiento avanzado y rutinas personalizadas para aumentar la masa muscular.",
      f2Title: "Clases Grupales",
      f2Desc: "Sesiones energéticas que van desde HIIT hasta Yoga con entrenadores expertos.",
      f3Title: "Seguimiento de Rendimiento",
      f3Desc: "Métricas impulsadas por IA para monitorear tu progreso y alcanzar tus objetivos.",
      readMore: "Leer Más"
    },
    gallery: {
      subtitle: "Instalaciones Premium",
      titleStart: "NUESTRO",
      titleEnd: "ESPACIO.",
      img1Title: "Zona de Pesas Libres",
      img1Desc: "Equipamiento de grado competitivo para fuerza máxima.",
      img2Title: "Área de Cardio High-End",
      img2Desc: "Máquinas de última generación con monitoreo de rendimiento.",
      img3Title: "Espacio de Powerlifting",
      img3Desc: "Plataformas profesionales para tus levantamientos más pesados.",
      img4Title: "Estudio de Clases Grupales",
      img4Desc: "Ambiente inmersivo con sonido premium e iluminación dinámica."
    },
    testimonials: {
      titleStart: "Amado por nuestra",
      titleEnd: "comunidad.",
      subtitle: "Únete a más de 20,000 clientes felices que han mejorado su viaje fitness con nosotros.",
      rating: "Calificación promedio 4.9/5",
      r1Content: "La calidad del equipamiento es inigualable. He visto resultados más rápido que con cualquier otro equipo de gimnasio que haya usado.",
      r1Role: "Atleta",
      r2Content: "Brave Gym ha revolucionado la forma en que entreno a mis clientes. Las herramientas de seguimiento del rendimiento cambian las reglas del juego.",
      r2Role: "Entrenadora de Fitness",
      r3Content: "Los mejores productos en su clase. La estética del equipo coincide con la intensidad de mi entrenamiento.",
      r3Role: "Fisicoculturista"
    },
    location: {
      subtitle: "Visítanos",
      titleStart: "TU NUEVA",
      titleEnd: "ZONA DE GUERRA.",
      desc: "Ubicados en el corazón del distrito deportivo, nuestras instalaciones están diseñadas para la victoria.",
      addrTitle: "Dirección Principal",
      phoneTitle: "Línea Directa",
      hoursTitle: "Horario Ininterrumpido",
      hoursDesc: "Lunes a Domingo: 05:00 - 23:00",
      btnMap: "Abrir en Google Maps",
      badgeOpen: "Abierto Ahora"
    },
    footer: {
      desc: "Construyendo campeones y forjando futuros más fuertes a través de una disciplina implacable y entrenamiento de élite.",
      navTitle: "Navegación",
      navLinks: ["Inicio", "Sobre Nosotros", "Programas", "Membresía"],
      resTitle: "Recursos",
      resLinks: ["Blog", "Planes de Entrenamiento", "Guía de Nutrición", "Contacto"],
      newsTitle: "Boletín Brave",
      newsDesc: "Únete al círculo interno para obtener consejos de entrenamiento exclusivos y actualizaciones de la instalación.",
      newsPlaceholder: "Tu correo electrónico",
      copyright: "© 2024 Brave Gym Rendimiento de Élite. Todos los derechos reservados.",
      legalLinks: ["Política de Privacidad", "Términos de Servicio"]
    },
    aiChat: {
      botName: "BraveBot",
      initial: "¡Hola! Soy BraveBot. ¿Listo para romper tus límites hoy?",
      placeholder: "Escribe tu mensaje...",
      errorKey: "¡Hola! Para que pueda responderte, necesitas configurar la API_KEY.",
      errorGen: "He tenido un problema de conexión. ¡Pero que eso no detenga tu entrenamiento!",
      systemPrompt: "Eres 'BraveBot', el asistente virtual motivador de Brave Gym. Tu misión es inspirar a los usuarios a entrenar duro. Conoces todos los horarios (5am-11pm) y servicios de Brave Gym. Responde de forma enérgica y profesional en Español."
    }
  },
  pt: {
    navbar: {
      offer: "OFERTA POR TEMPO LIMITADO! OBTRNHA 20% DE DESCONTO NO SEU PRIMEIRO MÊS DE TREINO.",
      home: "Início",
      pages: "Páginas",
      blog: "Blog",
      contact: "Contacte-nos",
      shop: "Loja",
      join: "JUNTE-SE AGORA",
      mobileJoin: "Junte-se Agora"
    },
    hero: {
      badge: "#1 Instalação de treino na cidade",
      titleLine1: "Seja Ousado.",
      titleLine2: "Seja Forte.",
      titleLine3: "SEJA CORAJOSO.",
      description: "Liberte o seu guerreiro interior no Brave Gym. Fornecemos o ambiente de elite, treino especializado e equipamento de alto desempenho necessários para quebrar os seus limites.",
      ctaPrimary: "Teste Grátis",
      ctaSecondary: "Ver Programas",
      circleText: "Excelência Brave Gym • Excelência Brave Gym • "
    },
    stats: {
      sold: "Produtos Vendidos",
      clients: "Clientes Felizes",
      quality: "Garantia de Qualidade"
    },
    features: {
      subtitle: "Nossos Programas",
      titleStart: "Projetado para aqueles que",
      titleEnd: "querem vencer.",
      f1Title: "Treino de Força",
      f1Desc: "Equipamento avançado e rotinas personalizadas para aumentar a massa muscular.",
      f2Title: "Aulas em Grupo",
      f2Desc: "Sessões energéticas que vão desde HIIT até Yoga com treinadores especializados.",
      f3Title: "Monitoramento de Desempenho",
      f3Desc: "Métricas impulsionadas por IA para monitorar o seu progresso e alcançar os seus objetivos.",
      readMore: "Ler Mais"
    },
    gallery: {
      subtitle: "Instalações Premium",
      titleStart: "NOSSO",
      titleEnd: "ESPAÇO.",
      img1Title: "Zona de Pesos Livres",
      img1Desc: "Equipamento de grau competitivo para força máxima.",
      img2Title: "Área de Cardio High-End",
      img2Desc: "Máquinas de última geração com monitoramento de desempenho.",
      img3Title: "Espaço de Powerlifting",
      img3Desc: "Plataformas profissionais para os seus levantamentos mais pesados.",
      img4Title: "Estúdio de Aulas em Grupo",
      img4Desc: "Ambiente imersivo com som premium e iluminação dinâmica."
    },
    testimonials: {
      titleStart: "Amado pela nossa",
      titleEnd: "comunidade.",
      subtitle: "Junte-se a mais de 20.000 clientes felizes que melhoraram a sua jornada fitness conosco.",
      rating: "Classificação média 4.9/5",
      r1Content: "A qualidade do equipamento é inigualável. Vi resultados mais rápido do que com qualquer outro equipamento de ginásio que já usei.",
      r1Role: "Atleta",
      r2Content: "O Brave Gym revolucionou a forma como treino os meus clientes. As ferramentas de monitoramento de desempenho mudam as regras do jogo.",
      r2Role: "Treinadora de Fitness",
      r3Content: "Os melhores produtos da sua classe. A estética do equipamento coincide com a intensidade do meu treino.",
      r3Role: "Fisiculturista"
    },
    location: {
      subtitle: "Visite-nos",
      titleStart: "A SUA NOVA",
      titleEnd: "ZONA DE GUERRA.",
      desc: "Localizados no coração do distrito desportivo, as nossas instalações são projetadas para a vitória.",
      addrTitle: "Endereço Principal",
      phoneTitle: "Linha Direta",
      hoursTitle: "Horário Ininterrupto",
      hoursDesc: "Segunda a Domingo: 05:00 - 23:00",
      btnMap: "Abrir no Google Maps",
      badgeOpen: "Aberto Agora"
    },
    footer: {
      desc: "Construindo campeões e forjando futuros mais fortes através de uma disciplina implacável e treino de elite.",
      navTitle: "Navegação",
      navLinks: ["Início", "Sobre Nós", "Programas", "Membros"],
      resTitle: "Recursos",
      resLinks: ["Blog", "Planos de Treino", "Guia de Nutrição", "Contato"],
      newsTitle: "Boletim Brave",
      newsDesc: "Junte-se ao círculo interno para obter dicas de treino exclusivas e atualizações da instalação.",
      newsPlaceholder: "O seu e-mail",
      copyright: "© 2024 Brave Gym Desempenho de Elite. Todos os direitos reservados.",
      legalLinks: ["Política de Privacidade", "Termos de Serviço"]
    },
    aiChat: {
      botName: "BraveBot",
      initial: "Olá! Sou o BraveBot. Pronto para quebrar os seus limites hoje?",
      placeholder: "Escreva a sua mensagem...",
      errorKey: "Olá! Para que eu possa responder, você precisa configurar a API_KEY.",
      errorGen: "Tive um problema de conexão. Mas que isso não pare o seu treino!",
      systemPrompt: "Você é 'BraveBot', o assistente virtual motivador do Brave Gym. Sua missão é inspirar os usuários a treinar muito. Você conhece todos os horários (5h às 23h) e serviços do Brave Gym. Responda de forma enérgica e profissional em Português."
    }
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es');

  const value = {
    language,
    setLanguage,
    t: translations[language]
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
