import { Link } from "react-router-dom";
import { Search, User } from "lucide-react";
import { CartDrawer } from "./CartDrawer";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/85 backdrop-blur-md border-b border-border/60">
      <div className="grid grid-cols-3 items-center h-16 px-6 lg:px-10">
        <nav className="hidden md:flex items-center gap-8 text-xs tracking-editorial">
          <Link to="/" className="hover:text-accent transition-colors">
            Coleção
          </Link>
          <a
            href="#featured"
            className="hover:text-accent transition-colors"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("featured")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Destaques
          </a>
          <Link to="/about/our-story" className="hover:text-accent transition-colors">
            Sobre
          </Link>
        </nav>

        <div className="col-start-1 md:col-start-2 flex justify-start md:justify-center">
          <Link
            to="/"
            className="font-sans text-2xl md:text-[1.75rem] tracking-[0.4em] font-light leading-none pl-[0.4em]"
            aria-label="RITZ"
          >
            RITZ
          </Link>
        </div>

        <div className="flex items-center justify-end gap-1 md:gap-2">
          <button
            className="hidden md:block p-2 text-foreground hover:text-accent transition-colors"
            aria-label="Buscar"
          >
            <Search className="h-5 w-5" strokeWidth={1.25} />
          </button>
          <button
            className="hidden md:block p-2 text-foreground hover:text-accent transition-colors"
            aria-label="Conta"
          >
            <User className="h-5 w-5" strokeWidth={1.25} />
          </button>
          <CartDrawer />
        </div>
      </div>
    </header>
  );
};
