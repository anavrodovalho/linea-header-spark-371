import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import PageHeader from "../../components/about/PageHeader";
import ContentSection from "../../components/about/ContentSection";
import AboutSidebar from "../../components/about/AboutSidebar";

const Sustainability = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="flex">
        <div className="hidden lg:block">
          <AboutSidebar />
        </div>

        <main className="w-full lg:w-[70vw] lg:ml-auto px-6">
        <PageHeader
          title="Sustentabilidade"
          subtitle="Moda feita com consciência, para durar e vestir com propósito"
        />

        <ContentSection title="Nosso compromisso">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <h3 className="text-xl font-light text-foreground">Produção consciente</h3>
              <p className="text-muted-foreground leading-relaxed">
                Trabalhamos com coleções enxutas e produção sob demanda sempre que possível, evitando desperdício e estoques excessivos. Cada peça é pensada para ter vida longa no seu guarda-roupa.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-light text-foreground">Tecidos e parcerias</h3>
              <p className="text-muted-foreground leading-relaxed">
                Priorizamos tecidos de qualidade e fornecedores parceiros que compartilham do nosso cuidado com pessoas e processos, valorizando a mão de obra local e o comércio justo.
              </p>
            </div>
          </div>

          <div className="bg-surface p-8">
            <h3 className="font-display text-2xl text-foreground mb-6">Nossas metas</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-light text-foreground mb-2">100%</div>
                <p className="text-sm text-muted-foreground">Embalagens recicláveis ou reutilizáveis</p>
              </div>
              <div>
                <div className="text-3xl font-light text-foreground mb-2">0</div>
                <p className="text-sm text-muted-foreground">Desperdício de tecido enviado ao lixo comum</p>
              </div>
              <div>
                <div className="text-3xl font-light text-foreground mb-2">+</div>
                <p className="text-sm text-muted-foreground">Valorização da produção e do trabalho local</p>
              </div>
            </div>
          </div>
        </ContentSection>

        <ContentSection title="Peças que duram">
          <div className="space-y-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Acreditamos no consumo consciente: comprar melhor e com menos frequência. Por isso criamos peças versáteis e atemporais, feitas para serem usadas, cuidadas e amadas por muitas estações.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-light text-foreground">Cuidado que prolonga</h3>
                <p className="text-muted-foreground">
                  Cada peça acompanha orientações de cuidado para que dure ainda mais — porque uma roupa bem cuidada é a escolha mais sustentável.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-light text-foreground">Menos, porém melhor</h3>
                <p className="text-muted-foreground">
                  Curadoria em vez de excesso: preferimos oferecer peças-chave, coringas do guarda-roupa, a inundar o armário com o que não será usado.
                </p>
              </div>
            </div>
          </div>
        </ContentSection>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default Sustainability;
