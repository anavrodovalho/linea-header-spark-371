import { useEffect } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = "Política de Privacidade — RITZ";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-6">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <header className="mb-12 text-center">
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">Política de Privacidade</h1>
            <p className="text-muted-foreground">Última atualização: julho de 2026</p>
          </header>

          <div className="max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-light text-foreground mb-4">Introdução</h2>
              <p className="text-muted-foreground leading-relaxed">
                Na RITZ, respeitamos a sua privacidade e temos o compromisso de proteger os seus dados pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018). Esta Política explica como coletamos, usamos, compartilhamos e protegemos as suas informações quando você visita nosso site, realiza uma compra ou interage com os nossos serviços.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-foreground mb-4">Informações que coletamos</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-light text-foreground mb-2">Dados fornecidos por você</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Podemos coletar informações que você nos fornece diretamente, incluindo:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
                    <li>Nome, e-mail, CPF e informações de contato</li>
                    <li>Endereços de cobrança e de entrega</li>
                    <li>Dados de pagamento (processados com segurança por provedores parceiros)</li>
                    <li>Preferências de conta e de comunicação</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-light text-foreground mb-2">Dados de navegação</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Coletamos automaticamente algumas informações sobre o seu dispositivo e navegação, como endereço IP, tipo de navegador, páginas visitadas e interações, para melhorar nossos serviços e a sua experiência.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-light text-foreground mb-4">Como usamos as suas informações</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Utilizamos as informações coletadas para finalidades como:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Processar e entregar os seus pedidos</li>
                <li>Prestar atendimento e responder às suas solicitações</li>
                <li>Enviar comunicações e ofertas (mediante o seu consentimento)</li>
                <li>Melhorar o funcionamento do site e a experiência de compra</li>
                <li>Prevenir fraudes e garantir a segurança</li>
                <li>Cumprir obrigações legais</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-light text-foreground mb-4">Compartilhamento de dados</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Não vendemos nem alugamos os seus dados pessoais. Podemos compartilhá-los apenas nas seguintes situações:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Com prestadores de serviço que nos ajudam a operar (pagamento, entrega, tecnologia)</li>
                <li>Quando exigido por lei ou para proteger nossos direitos</li>
                <li>Com o seu consentimento explícito</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-light text-foreground mb-4">Segurança dos dados</h2>
              <p className="text-muted-foreground leading-relaxed">
                Adotamos medidas técnicas e organizacionais adequadas para proteger os seus dados contra acesso não autorizado, alteração, divulgação ou destruição. Ainda assim, nenhum método de transmissão pela internet é 100% seguro.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-foreground mb-4">Seus direitos</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Conforme a LGPD, você pode, a qualquer momento:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Confirmar a existência de tratamento e acessar os seus dados</li>
                <li>Corrigir dados incompletos ou desatualizados</li>
                <li>Solicitar a exclusão dos seus dados pessoais</li>
                <li>Solicitar a portabilidade dos dados</li>
                <li>Revogar o consentimento a qualquer momento</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-light text-foreground mb-4">Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                Utilizamos cookies e tecnologias semelhantes para melhorar a sua navegação, analisar o tráfego e personalizar conteúdos. Você pode gerenciar os cookies nas configurações do seu navegador, ciente de que isso pode afetar algumas funcionalidades do site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-foreground mb-4">Alterações nesta Política</h2>
              <p className="text-muted-foreground leading-relaxed">
                Podemos atualizar esta Política periodicamente. Avisaremos sobre mudanças relevantes publicando a nova versão nesta página e atualizando a data de "Última atualização" acima.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-foreground mb-4">Fale conosco</h2>
              <p className="text-muted-foreground leading-relaxed">
                Em caso de dúvidas sobre esta Política ou sobre o tratamento dos seus dados, entre em contato:
              </p>
              <div className="mt-4 text-muted-foreground">
                <p>E-mail: shop.ritzoficial@gmail.com</p>
                <p>WhatsApp: (64) 99233-2760</p>
                <p>Itumbiara — GO, Brasil</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
