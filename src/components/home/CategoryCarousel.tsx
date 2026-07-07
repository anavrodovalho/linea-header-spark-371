import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { fetchFeaturedCollections, type ShopifyCollection } from "@/lib/shopify";

const CategoryCard = ({ collection }: { collection: ShopifyCollection }) => (
  <Link
    to={`/category/${collection.handle}`}
    className="group block shrink-0 w-44 sm:w-52 lg:w-60 snap-start"
  >
    <div className="relative aspect-[3/4] bg-surface overflow-hidden mb-3">
      {collection.image && (
        <img
          src={collection.image}
          alt={collection.title}
          className="absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-500 group-hover:opacity-0"
          loading="lazy"
        />
      )}
      {collection.hoverImage ? (
        <img
          src={collection.hoverImage}
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover object-top opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          loading="lazy"
        />
      ) : (
        collection.image && (
          <img
            src={collection.image}
            alt=""
            aria-hidden
            className="absolute inset-0 w-full h-full object-cover object-top opacity-0 transition-transform duration-700 group-hover:opacity-100 group-hover:scale-105"
            loading="lazy"
          />
        )
      )}
    </div>
    <p className="text-center text-xs tracking-editorial group-hover:text-accent transition-colors">
      {collection.title}
    </p>
  </Link>
);

export const CategoryCarousel = () => {
  const [collections, setCollections] = useState<ShopifyCollection[]>([]);
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetchFeaturedCollections()
      .then((c) => setCollections(c.filter((x) => x.image)))
      .finally(() => setLoading(false));
  }, []);

  const scrollBy = (dir: 1 | -1) => {
    scrollRef.current?.scrollBy({ left: dir * 320, behavior: "smooth" });
  };

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-24">
      <div className="flex items-end justify-between mb-10 gap-4">
        <div>
          <p className="text-xs tracking-editorial text-muted-foreground mb-3">
            Navegue por
          </p>
          <h2 className="font-display text-3xl md:text-4xl leading-tight">
            Categorias
          </h2>
        </div>
        <div className="hidden md:flex gap-2">
          <button
            onClick={() => scrollBy(-1)}
            aria-label="Anterior"
            className="p-2 border border-border hover:border-foreground transition-colors"
          >
            <ChevronLeft className="h-4 w-4" strokeWidth={1.5} />
          </button>
          <button
            onClick={() => scrollBy(1)}
            aria-label="Próximo"
            className="p-2 border border-border hover:border-foreground transition-colors"
          >
            <ChevronRight className="h-4 w-4" strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {loading ? (
        <div className="flex gap-5 overflow-hidden">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="shrink-0 w-44 sm:w-52 lg:w-60 animate-pulse">
              <div className="aspect-[3/4] bg-surface mb-3" />
              <div className="h-3 bg-surface w-2/3 mx-auto" />
            </div>
          ))}
        </div>
      ) : (
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-none -mx-6 px-6 lg:mx-0 lg:px-0"
          style={{ scrollbarWidth: "none" }}
        >
          {collections.map((c) => (
            <CategoryCard key={c.handle} collection={c} />
          ))}
        </div>
      )}
    </section>
  );
};
