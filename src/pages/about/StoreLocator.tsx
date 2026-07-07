import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import PageHeader from "../../components/about/PageHeader";
import ContentSection from "../../components/about/ContentSection";
import StoreMap from "../../components/about/StoreMap";
import { Button } from "../../components/ui/button";
import AboutSidebar from "../../components/about/AboutSidebar";

const StoreLocator = () => {
  const stores = [
    {
      name: "RITZ Itumbiara",
      address: "Centro, Itumbiara — GO",
      phone: "(64) 99233-2760",
      hours: "Seg-Sex: 9h-18h · Sáb: 9h-13h",
      services: ["Provador", "Atendimento personalizado", "Retirada de pedidos", "Trocas"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="flex">
        <div className="hidden lg:block">
          <AboutSidebar />
        </div>

        <main className="w-full lg:w-[70vw] lg:ml-auto px-6">
        <PageHeader
          title="Nossas Lojas"
          subtitle="Venha nos visitar para uma experiência de compra completa"
        />

        <ContentSection title="Onde estamos">
          <StoreMap />
        </ContentSection>

        <ContentSection title="Nossa loja">
          <div className="grid gap-8">
            {stores.map((store, index) => (
              <div key={index} className="bg-background p-8 border border-border">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-light text-foreground">{store.name}</h3>
                    <div className="space-y-2 text-muted-foreground">
                      <p>{store.address}</p>
                      <p>{store.phone}</p>
                      <p>{store.hours}</p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 pt-4">
                      <a
                        href="https://www.google.com/maps?q=Itumbiara,GO,Brasil"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Button variant="outline" className="rounded-none w-full sm:w-auto">
                          Como chegar
                        </Button>
                      </a>
                      <a href="https://wa.me/5564992332760" target="_blank" rel="noreferrer">
                        <Button className="rounded-none w-full sm:w-auto">
                          Falar no WhatsApp
                        </Button>
                      </a>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-light text-foreground">O que você encontra</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {store.services.map((service, serviceIndex) => (
                        <li key={serviceIndex} className="text-sm text-muted-foreground flex items-center">
                          <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></span>
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ContentSection>

        <ContentSection title="Prefere comprar online?">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Todo o nosso acervo também está disponível na loja online, com envio para todo o Brasil e frete grátis nas compras acima de R$399. Se precisar de ajuda para escolher, é só chamar no WhatsApp.
            </p>

            <div className="pt-2">
              <a href="https://wa.me/5564992332760" target="_blank" rel="noreferrer">
                <Button size="lg" className="rounded-none">
                  Atendimento pelo WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </ContentSection>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default StoreLocator;
