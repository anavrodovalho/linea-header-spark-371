import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitting(true);
    // Front-end only por enquanto — não há provedor de e-mail conectado.
    setTimeout(() => {
      toast.success("Inscrição recebida", {
        description: "Obrigada! Em breve você recebe nossas novidades.",
      });
      setEmail("");
      setSubmitting(false);
    }, 400);
  };

  return (
    <section className="bg-background text-foreground border-t border-border">
      <div className="max-w-3xl mx-auto px-6 py-24 text-center">
        <p className="text-xs tracking-editorial text-muted-foreground mb-6">Newsletter</p>
        <h2 className="font-display text-3xl md:text-4xl leading-tight mb-4">
          Entre para a lista RITZ
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-10 max-w-md mx-auto">
          Novidades, lançamentos e condições exclusivas — direto no seu e-mail.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex items-center gap-3 max-w-md mx-auto border-b border-border focus-within:border-foreground transition-colors pb-2"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Seu melhor e-mail"
            aria-label="E-mail"
            className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none py-2"
          />
          <button
            type="submit"
            disabled={submitting}
            aria-label="Inscrever"
            className="inline-flex items-center gap-2 text-xs tracking-editorial shrink-0 hover:text-accent transition-colors disabled:opacity-50"
          >
            Inscrever <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
          </button>
        </form>

        <p className="text-[0.7rem] text-muted-foreground mt-6">
          Ao se inscrever, você concorda em receber e-mails da RITZ. Cancele quando quiser.
        </p>
      </div>
    </section>
  );
};
