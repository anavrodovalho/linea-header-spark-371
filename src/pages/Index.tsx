import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { CategoryCarousel } from "@/components/home/CategoryCarousel";
import { PromoBanner } from "@/components/home/PromoBanner";
import { Newsletter } from "@/components/home/Newsletter";
import { fetchFeaturedProducts, type ShopifyProduct } from "@/lib/shopify";
import { ArrowRight } from "lucide-react";

// Foto editorial (vestido preto) — enquadramento com folga acima da cabeça.
const HERO_IMAGE =
  "https://cdn.shopify.com/s/files/1/0903/3836/1631/files/foto-12-02-2022-23-25-25_1600x2000_ea700a19-af37-4d0c-932e-6c6a3bc042a0.webp";
// Look claro (conjunto praia) para o banner promocional.
const PROMO_IMAGE =
  "https://cdn.shopify.com/s/files/1/0903/3836/1631/files/img-5431-original_1600x2000_4eadac3c-08c7-4987-88e7-b2e6af3f3ead.webp";

const Index = () => {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFeaturedProducts()
      .then(setProducts)
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero — banner preto, texto branco */}
      <section className="relative bg-foreground text-background">
        <div className="relative min-h-[85vh] md:min-h-[90vh] flex items-end">
          <img
            src={HERO_IMAGE}
            alt="Coleção RITZ"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: "center 12%" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/40" />
          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 pb-16 md:pb-24">
            <div className="max-w-xl">
              <p className="text-xs tracking-editorial text-background/80 mb-6">
                Coleção Atemporal
              </p>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.95] mb-6">
                Estilo se <em className="italic">constrói</em>
                <br />
                nos detalhes.
              </h1>
              <p className="text-base text-background/85 leading-relaxed mb-9 max-w-md">
                Peças pensadas para mulheres que vestem intenção. Cortes precisos,
                tecidos nobres, silhuetas que atravessam estações.
              </p>
              <a
                href="#featured"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("featured")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-3 text-xs tracking-editorial border-b border-background pb-1 hover:text-background/70 hover:border-background/70 transition-colors"
              >
                Explorar coleção <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Carrossel de categorias */}
      <CategoryCarousel />

      {/* Segundo banner */}
      <PromoBanner
        image={PROMO_IMAGE}
        eyebrow="Nova estação"
        title={
          <>
            Verão em
            <br />
            movimento.
          </>
        }
        text="Linhas fluidas e tecidos leves para os dias mais quentes. Descubra os looks da nova coleção."
        ctaLabel="Ver novidades"
        ctaTo="/category/novidades-1"
        objectPosition="center 18%"
      />

      {/* Produtos em destaque */}
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

      {/* Newsletter */}
      <Newsletter />

      <Footer />
    </div>
  );
};

export default Index;
