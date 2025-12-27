import { Helmet } from "react-helmet-async";
import LinkTree from "@/components/LinkTree";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Meus Links | Árvore de Links</title>
        <meta name="description" content="Encontre todos os meus links em um só lugar. Acesse meu Telegram VIP, Instagram e muito mais." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Helmet>
      <LinkTree />
    </>
  );
};

export default Index;
