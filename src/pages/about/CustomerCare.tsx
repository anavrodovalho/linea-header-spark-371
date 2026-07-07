import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import PageHeader from "../../components/about/PageHeader";
import ContentSection from "../../components/about/ContentSection";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../components/ui/accordion";
import AboutSidebar from "../../components/about/AboutSidebar";

const CustomerCare = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="flex">
        <div className="hidden lg:block">
          <AboutSidebar />
        </div>

        <main className="w-full lg:w-[70vw] lg:ml-auto px-6">
        <PageHeader
          title="Atendimento"
          subtitle="Estamos aqui para ajudar você em cada detalhe da sua compra"
        />

        <ContentSection title="Fale com a gente">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-light text-foreground">WhatsApp</h3>
              <p className="text-muted-foreground">(64) 99233-2760</p>
              <p className="text-sm text-muted-foreground">Seg-Sex: 9h-18h<br />Sáb: 9h-13h</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-light text-foreground">E-mail</h3>
              <p className="text-muted-foreground">contato@ritzoficial.com.br</p>
              <p className="text-sm text-muted-foreground">Resposta em até 24 horas úteis</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-light text-foreground">Atendimento rápido</h3>
              <a href="https://wa.me/5564992332760" target="_blank" rel="noreferrer">
                <Button variant="outline" className="rounded-none">
                  Iniciar conversa
                </Button>
              </a>
              <p className="text-sm text-muted-foreground">Durante o horário comercial</p>
            </div>
          </div>
        </ContentSection>

        <ContentSection title="Perguntas frequentes">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="envio" className="border border-border px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                Quais são os prazos e o valor do frete?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Oferecemos frete grátis para compras acima de R$399. O prazo de entrega varia conforme a sua região e é informado no checkout. Assim que o pedido é despachado, você recebe o código de rastreio por e-mail e WhatsApp.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="trocas" className="border border-border px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                Como funcionam as trocas e devoluções?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Você tem até 7 dias corridos após o recebimento para desistir da compra (direito de arrependimento) e até 30 dias para trocas. A peça deve estar sem uso, com etiqueta e na embalagem original. É só falar com a gente pelo WhatsApp que orientamos todo o processo.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="pagamento" className="border border-border px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                Quais formas de pagamento vocês aceitam?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Aceitamos cartão de crédito (com opção de parcelamento), Pix e boleto bancário. As opções disponíveis aparecem na finalização da compra.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="tamanho" className="border border-border px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                Como escolho o tamanho certo?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Consulte o nosso Guia de Tamanhos, com a tabela de medidas por peça. Se ficar em dúvida entre dois tamanhos, fale com a gente pelo WhatsApp que ajudamos você a escolher.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="cuidados" className="border border-border px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                Como cuidar das minhas peças RITZ?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Cada peça acompanha as instruções de lavagem na etiqueta. De forma geral, recomendamos lavagem delicada, evitar alvejantes e secar à sombra para preservar cor e caimento por muito mais tempo.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="rastreio" className="border border-border px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                Como acompanho meu pedido?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Após a confirmação do pagamento, você recebe todas as atualizações por e-mail e WhatsApp, incluindo o código de rastreio assim que o pedido é enviado.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </ContentSection>

        <ContentSection title="Envie uma mensagem">
          <div>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-light text-foreground">Nome</label>
                  <Input className="rounded-none" placeholder="Seu nome" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-light text-foreground">Sobrenome</label>
                  <Input className="rounded-none" placeholder="Seu sobrenome" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-light text-foreground">E-mail</label>
                <Input type="email" className="rounded-none" placeholder="seu@email.com" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-light text-foreground">Número do pedido (opcional)</label>
                <Input className="rounded-none" placeholder="Informe se a dúvida for sobre um pedido" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-light text-foreground">Como podemos ajudar?</label>
                <Textarea
                  className="rounded-none min-h-[120px]"
                  placeholder="Descreva a sua dúvida ou mensagem"
                />
              </div>

              <Button type="submit" className="w-full rounded-none">
                Enviar mensagem
              </Button>
            </form>
          </div>
        </ContentSection>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default CustomerCare;
