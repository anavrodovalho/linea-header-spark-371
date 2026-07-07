import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="border-t border-border mt-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <p className="font-sans text-3xl tracking-[0.4em] font-light mb-4">RITZ</p>
            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed mb-6">
              Estilo se constrói nos detalhes. Peças pensadas para mulheres que
              vestem intenção.
            </p>
            <div className="flex gap-6 text-xs tracking-editorial text-muted-foreground">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-foreground transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://wa.me/5564992332760"
                target="_blank"
                rel="noreferrer"
                className="hover:text-foreground transition-colors"
              >
                WhatsApp
              </a>
              <a
                href="mailto:contato@ritzoficial.com.br"
                className="hover:text-foreground transition-colors"
              >
                E-mail
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs tracking-editorial mb-4">A Marca</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/about/our-story" className="hover:text-foreground transition-colors">
                  Nossa História
                </Link>
              </li>
              <li>
                <Link to="/about/sustainability" className="hover:text-foreground transition-colors">
                  Sustentabilidade
                </Link>
              </li>
              <li>
                <Link to="/about/store-locator" className="hover:text-foreground transition-colors">
                  Lojas
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-editorial mb-4">Ajuda</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/about/customer-care" className="hover:text-foreground transition-colors">
                  Atendimento
                </Link>
              </li>
              <li>
                <Link to="/about/size-guide" className="hover:text-foreground transition-colors">
                  Guia de Tamanhos
                </Link>
              </li>
              <li>
                <Link to="/about/customer-care" className="hover:text-foreground transition-colors">
                  Trocas e Devoluções
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} RITZ. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-foreground transition-colors">
              Privacidade
            </Link>
            <Link to="/terms" className="hover:text-foreground transition-colors">
              Termos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
