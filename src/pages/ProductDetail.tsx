import { useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Loader2, Check } from "lucide-react";
import { toast } from "sonner";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { fetchProductByHandle, formatPrice, type ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";

type ProductNode = ShopifyProduct["node"];

const ProductDetail = () => {
  const { handle } = useParams<{ handle: string }>();
  const [product, setProduct] = useState<ProductNode | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});
  const [activeImage, setActiveImage] = useState(0);
  const addItem = useCartStore((s) => s.addItem);
  const isLoading = useCartStore((s) => s.isLoading);

  useEffect(() => {
    if (!handle) return;
    setLoading(true);
    fetchProductByHandle(handle)
      .then((p) => {
        setProduct(p);
        if (p) {
          const defaults: Record<string, string> = {};
          const firstAvailable = p.variants.edges.find((v) => v.node.availableForSale)?.node
            || p.variants.edges[0]?.node;
          firstAvailable?.selectedOptions.forEach((o) => (defaults[o.name] = o.value));
          setSelectedOptions(defaults);
        }
      })
      .finally(() => setLoading(false));
  }, [handle]);

  const selectedVariant = useMemo(() => {
    if (!product) return null;
    return (
      product.variants.edges.find((v) =>
        v.node.selectedOptions.every((o) => selectedOptions[o.name] === o.value),
      )?.node ?? null
    );
  }, [product, selectedOptions]);

  const handleAddToCart = async () => {
    if (!product || !selectedVariant) return;
    await addItem({
      product: { node: product },
      variantId: selectedVariant.id,
      variantTitle: selectedVariant.title,
      price: selectedVariant.price,
      quantity: 1,
      selectedOptions: selectedVariant.selectedOptions,
    });
    toast.success("Adicionado à sacola", {
      description: product.title,
      position: "top-center",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
          <p className="font-display text-3xl mb-3">Peça não encontrada</p>
          <Link to="/" className="text-xs tracking-editorial border-b border-foreground pb-1">
            Voltar à coleção
          </Link>
        </div>
      </div>
    );
  }

  const images = product.images.edges;
  const price = selectedVariant?.price || product.priceRange.minVariantPrice;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs tracking-editorial text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-3.5 w-3.5" strokeWidth={1.5} /> Coleção
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Gallery */}
          <div className="space-y-3">
            <div className="aspect-[3/4] bg-surface overflow-hidden">
              {images[activeImage] && (
                <img
                  src={images[activeImage].node.url}
                  alt={images[activeImage].node.altText || product.title}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            {images.length > 1 && (
              <div className="grid grid-cols-5 gap-2">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`aspect-[3/4] overflow-hidden border transition-colors ${
                      activeImage === i ? "border-foreground" : "border-transparent"
                    }`}
                  >
                    <img
                      src={img.node.url}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <p className="text-xs tracking-editorial text-muted-foreground mb-3">RITZ</p>
            <h1 className="font-display text-4xl md:text-5xl leading-tight mb-4">
              {product.title}
            </h1>
            <p className="text-xl mb-8">
              {formatPrice(price.amount, price.currencyCode)}
            </p>

            {product.description && (
              <p className="text-sm text-muted-foreground leading-relaxed mb-10">
                {product.description}
              </p>
            )}

            {/* Options */}
            <div className="space-y-6 mb-10">
              {product.options.map((option) => {
                if (option.values.length === 1 && option.values[0] === "Default Title") return null;
                return (
                  <div key={option.name}>
                    <div className="flex justify-between items-baseline mb-3">
                      <span className="text-xs tracking-editorial">{option.name}</span>
                      <span className="text-xs text-muted-foreground">
                        {selectedOptions[option.name]}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {option.values.map((value) => {
                        const isSelected = selectedOptions[option.name] === value;
                        return (
                          <button
                            key={value}
                            onClick={() =>
                              setSelectedOptions((prev) => ({ ...prev, [option.name]: value }))
                            }
                            className={`min-w-[3rem] h-11 px-4 text-sm border transition-colors ${
                              isSelected
                                ? "border-foreground bg-foreground text-background"
                                : "border-border hover:border-foreground"
                            }`}
                          >
                            {value}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>

            <Button
              onClick={handleAddToCart}
              disabled={!selectedVariant?.availableForSale || isLoading}
              className="w-full h-12 rounded-none bg-foreground text-background hover:bg-primary-hover text-xs tracking-editorial"
            >
              {isLoading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : !selectedVariant?.availableForSale ? (
                "Indisponível"
              ) : (
                <>
                  <Check className="h-4 w-4 mr-2" strokeWidth={1.5} /> Adicionar à sacola
                </>
              )}
            </Button>

            <p className="mt-6 text-xs text-muted-foreground text-center">
              Envio para todo o Brasil. Primeira troca grátis pelos Correios.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
