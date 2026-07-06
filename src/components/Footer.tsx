export const Footer = () => {
  return (
    <footer className="border-t border-border mt-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <p className="font-display text-4xl tracking-[0.2em] mb-4">RITZ</p>
            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
              Estilo se constrói nos detalhes. Peças pensadas para mulheres que
              vestem intenção.
            </p>
          </div>

          <div>
            <h4 className="text-xs tracking-editorial mb-4">Loja</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-foreground transition-colors cursor-pointer">
                Novidades
              </li>
              <li className="hover:text-foreground transition-colors cursor-pointer">
                Coleção
              </li>
              <li className="hover:text-foreground transition-colors cursor-pointer">
                Trocas
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-editorial mb-4">Contato</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Instagram</li>
              <li>WhatsApp</li>
              <li>E-mail</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} RITZ. Todos os direitos reservados.</p>
          <p className="tracking-editorial">Made with intention</p>
        </div>
      </div>
    </footer>
  );
};
