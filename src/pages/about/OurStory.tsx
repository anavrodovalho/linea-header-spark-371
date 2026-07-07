import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import PageHeader from "../../components/about/PageHeader";
import ContentSection from "../../components/about/ContentSection";
import ImageTextBlock from "../../components/about/ImageTextBlock";
import AboutSidebar from "../../components/about/AboutSidebar";

const OurStory = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="flex">
        <div className="hidden lg:block">
          <AboutSidebar />
        </div>

        <main className="w-full lg:w-[70vw] lg:ml-auto px-6">
          <PageHeader
            title="Nossa História"
            subtitle="Uma trajetória de intenção, cuidado e elegância atemporal"
          />

          <ContentSection>
            <ImageTextBlock
              image="/founders.png"
              imageAlt="RITZ"
              title="Nascida da intenção"
              content="A RITZ nasceu do desejo de vestir mulheres que enxergam no vestir uma forma de expressão. Em Itumbiara, no coração de Goiás, começamos com uma ideia simples: criar peças que atravessam estações e tendências. Cada coleção é pensada para durar — no armário e na memória de quem veste."
              imagePosition="left"
            />
          </ContentSection>

          <ContentSection title="O que nos move">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-xl font-light text-foreground">Cortes precisos</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Trabalhamos a modelagem com atenção aos detalhes: caimento que valoriza o corpo, acabamentos cuidadosos e tecidos escolhidos a dedo. Acreditamos que a elegância mora na precisão — no corte, no toque e no gesto de quem se veste com intenção.
                </p>
              </div>
              <div className="space-y-6">
                <h3 className="text-xl font-light text-foreground">Moda com propósito</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Preferimos coleções enxutas e atemporais a lançamentos descartáveis. Peças versáteis, que conversam entre si e acompanham a mulher do dia ao entardecer, compondo um guarda-roupa consciente e cheio de personalidade.
                </p>
              </div>
            </div>
          </ContentSection>

          <ContentSection title="Nossos valores">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-light text-foreground">Cuidado</h3>
                <p className="text-muted-foreground">
                  Do primeiro croqui à última costura, buscamos excelência em cada detalhe de cada peça.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-light text-foreground">Autenticidade</h3>
                <p className="text-muted-foreground">
                  Cada peça carrega uma identidade genuína e conta uma história de estilo e intenção.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-light text-foreground">Atemporalidade</h3>
                <p className="text-muted-foreground">
                  Criamos para durar — silhuetas que permanecem bonitas muito além da estação em que nasceram.
                </p>
              </div>
            </div>
          </ContentSection>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default OurStory;
