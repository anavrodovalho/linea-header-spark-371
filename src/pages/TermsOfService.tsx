import { useEffect } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const TermsOfService = () => {
  useEffect(() => {
    document.title = "Termos de Serviço — RITZ";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-6">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <header className="mb-12 text-center">
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">Termos de Serviço</h1>
            <p className="text-muted-foreground">Última atualização: julho de 2026</p>
          </header>

          <div className="max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-light text-foreground mb-4">Aceitação dos termos</h2>
              <p className="text-muted-foreground leading-relaxed">
                Ao acessar e utilizar o site e os serviços da RITZ, você concorda com estes Termos de Serviço. Eles regem o uso do nosso site, produtos e serviços. Caso não concorde com algum ponto, pedimos que não utilize a plataforma.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-foreground mb-4">Uso do site</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                O conteúdo deste site é disponibilizado para uso pessoal e não comercial. Ao utilizá-lo, você concorda em não:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Copiar ou modificar os materiais sem autorização</li>
                <li>Utilizar o conteúdo para fins comerciais ou exibição pública</li>
                <li>Tentar acessar áreas restritas ou comprometer a segurança do site</li>
                <li>Remover avisos de direitos autorais dos materiais</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-light text-foreground mb-4">Produtos e disponibilidade</h2>
              <p className="text-muted-foreground leading-relaxed">
                Nos esforçamos para exibir informações precisas de produtos, incluindo descrições, preços e disponibilidade. Podem ocorrer eventuais erros; nesses casos, reservamo-nos o direito de corrigir informações e de modificar ou descontinuar produtos sem aviso prévio. As cores podem variar conforme a tela do seu dispositivo.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-foreground mb-4">Pedidos e pagamento</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-light text-foreground mb-2">Confirmação do pedido</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Todos os pedidos estão sujeitos à confirmação de pagamento e à disponibilidade de estoque. Podemos recusar ou cancelar um pedido em caso de indisponibilidade, erro de informação ou suspeita de fraude.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-light text-foreground mb-2">Formas de pagamento</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Aceitamos cartão de crédito (com parcelamento), Pix e boleto bancário. Os valores são apresentados em reais (R$), com impostos já incluídos, conforme exibido na finalização da compra.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-light text-foreground mb-4">Envio e entrega</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Oferecemos frete grátis para compras acima de R$399. Faremos o possível para enviar os pedidos dentro dos prazos informados, mas as datas de entrega são estimativas e podem sofrer atrasos por parte das transportadoras ou por circunstâncias fora do nosso controle.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Após o envio, você recebe o código de rastreio para acompanhar a entrega no endereço informado.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-foreground mb-4">Trocas e devoluções</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                De acordo com o Código de Defesa do Consumidor, você pode:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Desistir da compra em até 7 dias corridos após o recebimento (direito de arrependimento)</li>
                <li>Solicitar troca em até 30 dias, com a peça sem uso, com etiqueta e na embalagem original</li>
                <li>Contar com a nossa ajuda em caso de defeito de fabricação</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                O reembolso é feito pelo mesmo meio de pagamento utilizado na compra.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-foreground mb-4">Propriedade intelectual</h2>
              <p className="text-muted-foreground leading-relaxed">
                Todo o conteúdo deste site — textos, imagens, logotipos e demais materiais — é de propriedade da RITZ e protegido pelas leis de direitos autorais e de marcas. O uso não autorizado é proibido.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-foreground mb-4">Limitação de responsabilidade</h2>
              <p className="text-muted-foreground leading-relaxed">
                A RITZ não se responsabiliza por danos indiretos decorrentes do uso ou da impossibilidade de uso do site, ressalvadas as garantias legais previstas na legislação brasileira aplicável.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-foreground mb-4">Privacidade</h2>
              <p className="text-muted-foreground leading-relaxed">
                A sua privacidade é importante para nós. Consulte a nossa Política de Privacidade, que também rege o uso do site e explica como tratamos os seus dados pessoais.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-foreground mb-4">Legislação aplicável</h2>
              <p className="text-muted-foreground leading-relaxed">
                Estes Termos são regidos pelas leis da República Federativa do Brasil. Fica eleito o foro da comarca de Itumbiara — GO para dirimir eventuais controvérsias.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-foreground mb-4">Alterações destes Termos</h2>
              <p className="text-muted-foreground leading-relaxed">
                Podemos revisar estes Termos de Serviço a qualquer momento. Ao continuar utilizando o site, você concorda com a versão vigente.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-foreground mb-4">Contato</h2>
              <p className="text-muted-foreground leading-relaxed">
                Em caso de dúvidas sobre estes Termos, entre em contato:
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

export default TermsOfService;
