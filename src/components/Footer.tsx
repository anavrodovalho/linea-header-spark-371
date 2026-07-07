import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="mt-24 bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <p className="font-sans text-3xl tracking-[0.4em] font-light mb-4 text-background">RITZ</p>
            <p className="text-sm text-background/70 max-w-sm leading-relaxed mb-6">
              Estilo se constrói nos detalhes. Peças pensadas para mulheres que
              vestem intenção.
            </p>
            <div className="flex gap-6 text-xs tracking-editorial text-background/70">
              <a
                href="https://instagram.com/shop.ritz"
                target="_blank"
                rel="noreferrer"
                className="hover:text-background transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://wa.me/5564992332760"
                target="_blank"
                rel="noreferrer"
                className="hover:text-background transition-colors"
              >
                WhatsApp
              </a>
              <a
                href="mailto:shop.ritzoficial@gmail.com"
                className="hover:text-background transition-colors"
              >
                E-mail
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs tracking-editorial mb-4 text-background">A Marca</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <Link to="/about/our-story" className="hover:text-background transition-colors">
                  Nossa História
                </Link>
              </li>
              <li>
                <Link to="/about/sustainability" className="hover:text-background transition-colors">
                  Sustentabilidade
                </Link>
              </li>
              <li>
                <Link to="/about/store-locator" className="hover:text-background transition-colors">
                  Lojas
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-editorial mb-4 text-background">Ajuda</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <Link to="/about/customer-care" className="hover:text-background transition-colors">
                  Atendimento
                </Link>
              </li>
              <li>
                <Link to="/about/size-guide" className="hover:text-background transition-colors">
                  Guia de Tamanhos
                </Link>
              </li>
              <li>
                <Link to="/about/customer-care" className="hover:text-background transition-colors">
                  Trocas e Devoluções
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-background/60">
          <p>© {new Date().getFullYear()} RITZ. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-background transition-colors">
              Privacidade
            </Link>
            <Link to="/terms" className="hover:text-background transition-colors">
              Termos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
