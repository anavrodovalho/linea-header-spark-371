import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

const PRIMARY = [
  { label: "Início", to: "/" },
  { label: "Catálogo", to: "/catalogo" },
];

const CATEGORIES = [
  { label: "Tops", to: "/category/tops" },
  { label: "Blazers e Jaquetas", to: "/category/blazers" },
  { label: "Shorts e Saias", to: "/category/shorts-1" },
  { label: "Calças", to: "/category/calcas" },
  { label: "Conjuntos", to: "/category/conjuntos" },
  { label: "Macacões", to: "/category/macacao" },
  { label: "Vestidos", to: "/category/vestidos" },
];

const MenuLink = ({ to, label }: { to: string; label: string }) => (
  <SheetClose asChild>
    <Link
      to={to}
      className="block font-display text-2xl leading-tight py-3 border-b border-border hover:text-accent transition-colors"
    >
      {label}
    </Link>
  </SheetClose>
);

export const MainMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          className="flex items-center gap-2 text-background/90 hover:text-background transition-colors"
          aria-label="Abrir menu"
        >
          <Menu className="h-5 w-5" strokeWidth={1.5} />
          <span className="hidden sm:inline text-xs tracking-editorial">Menu</span>
        </button>
      </SheetTrigger>

      <SheetContent
        side="left"
        className="w-full sm:max-w-sm bg-background p-0 border-none flex flex-col"
      >
        <SheetTitle className="sr-only">Menu de navegação</SheetTitle>

        <div className="px-8 pt-8 pb-6">
          <span className="font-sans text-xl tracking-[0.4em] font-light">RITZ</span>
        </div>

        <nav className="flex-1 overflow-y-auto px-8 pb-10">
          {PRIMARY.map((item) => (
            <MenuLink key={item.to} {...item} />
          ))}

          <p className="text-[0.7rem] tracking-editorial text-muted-foreground mt-8 mb-1">
            Categorias
          </p>
          {CATEGORIES.map((item) => (
            <MenuLink key={item.to} {...item} />
          ))}

          <div className="mt-10">
            <SheetClose asChild>
              <Link
                to="/about/customer-care"
                className="inline-flex items-center text-xs tracking-editorial border-b border-foreground pb-1 hover:text-accent hover:border-accent transition-colors"
              >
                Entrar em contato
              </Link>
            </SheetClose>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
};
