import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import PageHeader from "../../components/about/PageHeader";
import ContentSection from "../../components/about/ContentSection";
import { Button } from "../../components/ui/button";
import AboutSidebar from "../../components/about/AboutSidebar";

const SizeGuide = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="flex">
        <div className="hidden lg:block">
          <AboutSidebar />
        </div>

        <main className="w-full lg:w-[70vw] lg:ml-auto px-6">
        <PageHeader
          title="Guia de Tamanhos"
          subtitle="Encontre o caimento perfeito com a nossa tabela de medidas"
        />

        <ContentSection title="Como tirar suas medidas">
          <div className="space-y-8">
            <div className="bg-surface p-8">
              <h3 className="text-xl font-light text-foreground mb-6">Use uma fita métrica</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <h4 className="font-normal text-foreground">Busto</h4>
                  <p className="text-muted-foreground text-sm">
                    Meça a parte mais volumosa do busto, com a fita paralela ao chão e sem apertar.
                  </p>
                </div>
                <div className="space-y-4">
                  <h4 className="font-normal text-foreground">Cintura</h4>
                  <p className="text-muted-foreground text-sm">
                    Meça a parte mais fina da cintura, geralmente na altura do umbigo.
                  </p>
                </div>
                <div className="space-y-4">
                  <h4 className="font-normal text-foreground">Quadril</h4>
                  <p className="text-muted-foreground text-sm">
                    Meça a parte mais larga do quadril, mantendo a fita reta ao redor do corpo.
                  </p>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-border">
                <thead>
                  <tr className="bg-surface">
                    <th className="border border-border p-3 text-left font-light">Tamanho</th>
                    <th className="border border-border p-3 text-left font-light">BR</th>
                    <th className="border border-border p-3 text-left font-light">Busto (cm)</th>
                    <th className="border border-border p-3 text-left font-light">Cintura (cm)</th>
                    <th className="border border-border p-3 text-left font-light">Quadril (cm)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { tam: "PP", br: "36", busto: "80–84", cintura: "60–64", quadril: "86–90" },
                    { tam: "P", br: "38", busto: "84–88", cintura: "64–68", quadril: "90–94" },
                    { tam: "M", br: "40", busto: "88–94", cintura: "68–74", quadril: "94–100" },
                    { tam: "G", br: "42–44", busto: "94–100", cintura: "74–80", quadril: "100–106" },
                    { tam: "GG", br: "46", busto: "100–108", cintura: "80–88", quadril: "106–114" }
                  ].map((size, index) => (
                    <tr key={index} className="hover:bg-surface/60">
                      <td className="border border-border p-3 font-normal">{size.tam}</td>
                      <td className="border border-border p-3">{size.br}</td>
                      <td className="border border-border p-3">{size.busto}</td>
                      <td className="border border-border p-3">{size.cintura}</td>
                      <td className="border border-border p-3">{size.quadril}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </ContentSection>

        <ContentSection title="Ficou entre dois tamanhos?">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-xl font-light text-foreground">Nossa dica</h3>
              <p className="text-muted-foreground leading-relaxed">
                Se suas medidas ficarem entre dois tamanhos, considere o caimento desejado: para um visual mais soltinho e confortável, escolha o tamanho maior; para um caimento mais ajustado ao corpo, opte pelo menor.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-light text-foreground">Modelagens específicas</h3>
              <p className="text-muted-foreground leading-relaxed">
                Alguns modelos têm caimento próprio (oversized, justo ou alfaiataria). Sempre que houver uma observação de tamanho na página do produto, siga a recomendação específica daquela peça.
              </p>
            </div>
          </div>
        </ContentSection>

        <ContentSection title="Precisa de ajuda?">
          <div className="space-y-6">
            <p className="text-muted-foreground">
              Ainda com dúvida sobre o tamanho? Fale com a gente pelo WhatsApp e nossa equipe te ajuda a escolher a peça certa para o seu corpo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/5564992332760" target="_blank" rel="noreferrer">
                <Button className="rounded-none w-full sm:w-auto">
                  Falar no WhatsApp
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

export default SizeGuide;
