import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { fetchProducts, type ShopifyProduct } from "@/lib/shopify";

const Catalog = () => {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts(undefined, 50)
      .then(setProducts)
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        <section className="max-w-7xl mx-auto px-6 lg:px-10 pt-12 pb-10 md:pt-16 md:pb-14">
          <nav className="text-xs tracking-editorial text-muted-foreground mb-6">
            <Link to="/" className="hover:text-foreground transition-colors">
              Início
            </Link>
            <span className="mx-3">/</span>
            <span className="text-foreground">Catálogo</span>
          </nav>
          <h1 className="font-display text-4xl md:text-5xl leading-tight">Catálogo</h1>
          {!loading && (
            <p className="text-sm text-muted-foreground mt-3">
              {products.length} {products.length === 1 ? "peça" : "peças"}
            </p>
          )}
        </section>

        <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-24">
          {loading ? (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-14">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="aspect-[3/4] bg-surface mb-4" />
                  <div className="h-4 bg-surface w-3/4 mb-2" />
                  <div className="h-3 bg-surface w-1/3" />
                </div>
              ))}
            </div>
          ) : products.length === 0 ? (
            <div className="text-center py-24">
              <p className="font-display text-2xl mb-3">Nenhuma peça encontrada</p>
              <p className="text-sm text-muted-foreground">
                Volte em instantes — novas peças chegando.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-14">
              {products.map((product) => (
                <ProductCard key={product.node.id} product={product} />
              ))}
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Catalog;
