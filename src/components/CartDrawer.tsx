import { useEffect, useState } from "react";
import { ShoppingBag, Minus, Plus, Trash2, ArrowRight, Loader2 } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/stores/cartStore";
import { formatPrice } from "@/lib/shopify";

export const CartDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { items, isLoading, isSyncing, updateQuantity, removeItem, getCheckoutUrl, syncCart } =
    useCartStore();

  const totalItems = items.reduce((s, i) => s + i.quantity, 0);
  const totalPrice = items.reduce((s, i) => s + parseFloat(i.price.amount) * i.quantity, 0);
  const currency = items[0]?.price.currencyCode || "BRL";

  useEffect(() => {
    if (isOpen) syncCart();
  }, [isOpen, syncCart]);

  const handleCheckout = () => {
    const url = getCheckoutUrl();
    if (url) {
      window.open(url, "_blank");
      setIsOpen(false);
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <button
          className="relative p-2 text-background/80 hover:text-background transition-colors"
          aria-label="Sacola"
        >
          <ShoppingBag className="h-5 w-5" strokeWidth={1.25} />
          {totalItems > 0 && (
            <span className="absolute -top-0.5 -right-0.5 h-4 w-4 rounded-full bg-background text-foreground text-[10px] font-medium flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md flex flex-col bg-background">
        <SheetHeader className="flex-shrink-0 pb-6 border-b border-border">
          <SheetTitle className="font-display text-2xl font-normal tracking-tight">
            Sua sacola
          </SheetTitle>
          <p className="text-xs tracking-editorial text-muted-foreground">
            {totalItems === 0
              ? "Vazia"
              : `${totalItems} ${totalItems === 1 ? "peça" : "peças"}`}
          </p>
        </SheetHeader>

        <div className="flex flex-col flex-1 min-h-0">
          {items.length === 0 ? (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center px-8">
                <ShoppingBag
                  className="h-10 w-10 text-muted-foreground/40 mx-auto mb-4"
                  strokeWidth={1}
                />
                <p className="font-display text-xl mb-2">Sua sacola está vazia</p>
                <p className="text-sm text-muted-foreground">
                  Explore a coleção e comece a compor seu look.
                </p>
              </div>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto py-6">
                <div className="space-y-6">
                  {items.map((item) => (
                    <div key={item.variantId} className="flex gap-4">
                      <div className="w-20 h-28 bg-surface overflow-hidden flex-shrink-0">
                        {item.product.node.images?.edges?.[0]?.node && (
                          <img
                            src={item.product.node.images.edges[0].node.url}
                            alt={item.product.node.title}
                            className="w-full h-full object-cover"
                          />
                        )}
                      </div>
                      <div className="flex-1 min-w-0 flex flex-col">
                        <div className="flex justify-between items-start gap-2">
                          <h4 className="font-display text-base leading-tight truncate">
                            {item.product.node.title}
                          </h4>
                          <button
                            onClick={() => removeItem(item.variantId)}
                            className="text-muted-foreground hover:text-foreground transition-colors flex-shrink-0"
                            aria-label="Remover"
                          >
                            <Trash2 className="h-3.5 w-3.5" strokeWidth={1.25} />
                          </button>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">
                          {item.selectedOptions.map((o) => o.value).join(" • ")}
                        </p>
                        <div className="flex justify-between items-end mt-auto pt-3">
                          <div className="inline-flex items-center border border-border">
                            <button
                              className="w-7 h-7 flex items-center justify-center hover:bg-surface transition-colors"
                              onClick={() => updateQuantity(item.variantId, item.quantity - 1)}
                            >
                              <Minus className="h-3 w-3" strokeWidth={1.25} />
                            </button>
                            <span className="w-8 text-center text-sm">{item.quantity}</span>
                            <button
                              className="w-7 h-7 flex items-center justify-center hover:bg-surface transition-colors"
                              onClick={() => updateQuantity(item.variantId, item.quantity + 1)}
                            >
                              <Plus className="h-3 w-3" strokeWidth={1.25} />
                            </button>
                          </div>
                          <p className="text-sm font-medium">
                            {formatPrice(
                              parseFloat(item.price.amount) * item.quantity,
                              item.price.currencyCode,
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex-shrink-0 border-t border-border pt-6 pb-2 space-y-4">
                <div className="flex justify-between items-baseline">
                  <span className="text-xs tracking-editorial text-muted-foreground">
                    Subtotal
                  </span>
                  <span className="font-display text-2xl">
                    {formatPrice(totalPrice, currency)}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Frete e impostos calculados no checkout.
                </p>
                <Button
                  onClick={handleCheckout}
                  disabled={isLoading || isSyncing}
                  className="w-full h-12 rounded-none bg-foreground text-background hover:bg-primary-hover text-xs tracking-editorial"
                >
                  {isLoading || isSyncing ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <>
                      Finalizar compra <ArrowRight className="w-4 h-4 ml-2" strokeWidth={1.5} />
                    </>
                  )}
                </Button>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};
