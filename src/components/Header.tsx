import { Link } from "react-router-dom";
import { Search, User } from "lucide-react";
import { CartDrawer } from "./CartDrawer";
import { MainMenu } from "./MainMenu";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-foreground text-background border-b border-white/10">
      <div className="grid grid-cols-3 items-center h-16 px-6 lg:px-10">
        <div className="flex items-center justify-start">
          <MainMenu />
        </div>

        <div className="col-start-1 md:col-start-2 flex justify-start md:justify-center">
          <Link
            to="/"
            className="font-sans text-2xl md:text-[1.75rem] tracking-[0.4em] font-light leading-none pl-[0.4em] text-background"
            aria-label="RITZ"
          >
            RITZ
          </Link>
        </div>

        <div className="flex items-center justify-end gap-1 md:gap-2">
          <button
            className="hidden md:block p-2 text-background/80 hover:text-background transition-colors"
            aria-label="Buscar"
          >
            <Search className="h-5 w-5" strokeWidth={1.25} />
          </button>
          <button
            className="hidden md:block p-2 text-background/80 hover:text-background transition-colors"
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
