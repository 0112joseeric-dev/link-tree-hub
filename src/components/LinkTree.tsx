import { Send } from "lucide-react";
import LinkButton from "./LinkButton";
import backgroundImage from "@/assets/background.jpg";
import profileImage from "@/assets/profile.jpg";

const LinkTree = () => {
  const links = [
    {
      href: "https://t.me/mikabianchbot",
      icon: <Send className="w-5 h-5" />,
      label: "Telegram VIP",
      featured: true,
    },
    {
      href: "https://t.me/mikaelabianch",
      icon: <Send className="w-5 h-5" />,
      label: "Telegram Prévias",
    },
  ];

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-overlay/60" />
      
      {/* Content */}
      <main className="relative z-10 w-full max-w-md px-6 py-12 flex flex-col items-center">
        {/* Profile Section */}
        <div 
          className="mb-8 text-center opacity-0 animate-fade-in"
          style={{ animationDelay: '100ms' }}
        >
          <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-card/20 backdrop-blur-sm border-4 border-card/50 overflow-hidden">
            <img 
              src={profileImage} 
              alt="Mikaely Bianch" 
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-2xl font-bold text-foreground mb-1">Mikaely Bianch</h1>
          <p className="text-foreground/80 text-sm">me veja daquele jeitinho ✨</p>
        </div>

        {/* Links */}
        <div className="w-full space-y-4">
          {links.map((link, index) => (
            <LinkButton
              key={index}
              href={link.href}
              icon={link.icon}
              label={link.label}
              featured={link.featured}
              delay={200 + index * 100}
            />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer 
        className="relative z-10 w-full py-6 px-6 text-center opacity-0 animate-fade-in"
        style={{ animationDelay: '800ms' }}
      >
        <p className="text-foreground/70 text-xs leading-relaxed max-w-sm mx-auto">
          Todos os direitos reservados. Qualquer vazamento de imagens pessoais é considerado crime sob Código Penal (Decreto-Lei 2.848, de 1940)
        </p>
      </footer>
    </div>
  );
};

export default LinkTree;
