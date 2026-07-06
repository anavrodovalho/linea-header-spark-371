import { Link } from "react-router-dom";
import { formatPrice, type ShopifyProduct } from "@/lib/shopify";

export const ProductCard = ({ product }: { product: ShopifyProduct }) => {
  const p = product.node;
  const image = p.images.edges[0]?.node;
  const secondImage = p.images.edges[1]?.node;
  const price = p.priceRange.minVariantPrice;

  return (
    <Link to={`/product/${p.handle}`} className="group block">
      <div className="relative aspect-[3/4] bg-surface overflow-hidden mb-4">
        {image && (
          <img
            src={image.url}
            alt={image.altText || p.title}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
            loading="lazy"
          />
        )}
        {secondImage ? (
          <img
            src={secondImage.url}
            alt={secondImage.altText || p.title}
            className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            loading="lazy"
          />
        ) : (
          image && (
            <img
              src={image.url}
              alt={image.altText || p.title}
              className="absolute inset-0 w-full h-full object-cover opacity-0 transition-transform duration-700 group-hover:opacity-100 group-hover:scale-105"
              loading="lazy"
            />
          )
        )}
      </div>
      <div className="space-y-1 px-1">
        <h3 className="font-display text-lg leading-snug group-hover:text-accent transition-colors">
          {p.title}
        </h3>
        <p className="text-sm text-muted-foreground">
          {formatPrice(price.amount, price.currencyCode)}
        </p>
      </div>
    </Link>
  );
};
