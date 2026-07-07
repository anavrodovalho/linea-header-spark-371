import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface PromoBannerProps {
  image: string;
  eyebrow: string;
  title: React.ReactNode;
  text?: string;
  ctaLabel: string;
  ctaTo: string;
  /** Focal point for the background image so faces aren't cropped out. */
  objectPosition?: string;
}

export const PromoBanner = ({
  image,
  eyebrow,
  title,
  text,
  ctaLabel,
  ctaTo,
  objectPosition = "center 20%",
}: PromoBannerProps) => (
  <section className="relative overflow-hidden">
    <div className="relative min-h-[60vh] md:min-h-[70vh] flex items-center">
      <img
        src={image}
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition }}
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/45" />
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-10">
        <div className="max-w-lg text-background">
          <p className="text-xs tracking-editorial text-background/80 mb-5">{eyebrow}</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[0.98] mb-6">
            {title}
          </h2>
          {text && (
            <p className="text-base text-background/85 leading-relaxed mb-8 max-w-md">
              {text}
            </p>
          )}
          <Link
            to={ctaTo}
            className="inline-flex items-center gap-3 text-xs tracking-editorial border-b border-background pb-1 hover:text-background/70 hover:border-background/70 transition-colors"
          >
            {ctaLabel} <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </div>
  </section>
);
