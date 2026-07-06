import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { fetchFeaturedProducts, type ShopifyProduct } from "@/lib/shopify";
import { ArrowRight } from "lucide-react";

const Index = () => {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFeaturedProducts()
      .then(setProducts)
      .finally(() => setLoading(false));
  }, []);

  const heroImage = products[0]?.node.images.edges[0]?.node.url;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero — editorial split */}
      <section className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-4rem)]">
          <div className="flex items-center px-6 lg:px-16 py-20 order-2 lg:order-1">
            <div className="max-w-lg">
              <p className="text-xs tracking-editorial text-muted-foreground mb-6">
                Coleção Atemporal
              </p>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.95] mb-8">
                Estilo se<br />
                <em className="italic text-accent">constrói</em><br />
                nos detalhes.
              </h1>
              <p className="text-base text-muted-foreground leading-relaxed mb-10 max-w-md">
                Peças pensadas para mulheres que vestem intenção. Cortes precisos,
                tecidos nobres, silhuetas que atravessam estações.
              </p>
              <a
                href="#featured"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("featured")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-3 text-xs tracking-editorial border-b border-foreground pb-1 hover:text-accent hover:border-accent transition-colors"
              >
                Explorar coleção <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          <div className="relative bg-surface order-1 lg:order-2 min-h-[60vh] lg:min-h-0">
            {heroImage ? (
              <img
                src={heroImage}
                alt="Coleção RITZ"
                className="absolute inset-0 w-full h-full object-cover"
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-surface to-surface-strong" />
            )}
            <div className="absolute bottom-8 right-8 text-right">
              <p className="font-display italic text-background/90 text-sm mix-blend-difference">
                Outono / Inverno
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured grid */}
      <section id="featured" className="max-w-7xl mx-auto px-6 lg:px-10 py-24 scroll-mt-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-4">
          <div>
            <p className="text-xs tracking-editorial text-muted-foreground mb-3">
              Selecionadas para você
            </p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              Destaques da estação
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs">
            Seis peças que traduzem a essência da coleção atual.
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="aspect-[3/4] bg-surface mb-4" />
                <div className="h-4 bg-surface w-3/4 mb-2" />
                <div className="h-3 bg-surface w-1/3" />
              </div>
            ))}
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-24">
            <p className="font-display text-2xl mb-2">Nenhum produto encontrado</p>
            <p className="text-sm text-muted-foreground">
              Verifique sua loja Shopify e volte em instantes.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14">
            {products.map((product) => (
              <ProductCard key={product.node.id} product={product} />
            ))}
          </div>
        )}
      </section>

      {/* Brand statement */}
      <section className="border-t border-border bg-surface/40">
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">
          <p className="text-xs tracking-editorial text-muted-foreground mb-6">
            RITZ Manifesto
          </p>
          <p className="font-display text-3xl md:text-4xl leading-tight italic">
            "A elegância não grita. Ela se revela na precisão do corte,
            no toque do tecido, no gesto de quem se veste com intenção."
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
