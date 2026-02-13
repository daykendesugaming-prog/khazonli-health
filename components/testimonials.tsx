import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Margaret W.",
    role: "Post-Surgery Recovery",
    quote:
      "Within 20 minutes of my request, a highly qualified nurse was at my door. The level of professionalism and care exceeded every expectation.",
    rating: 5,
  },
  {
    name: "Richard H.",
    role: "Ongoing Elder Care",
    quote:
      "Khazonli Health has been invaluable for my mother's care. The AI matching found nurses who specialize in exactly what she needs. Remarkable service.",
    rating: 5,
  },
  {
    name: "Elena S.",
    role: "Pediatric Support",
    quote:
      "The privacy and discretion are unmatched. As a public figure, I needed a service I could trust completely. Khazonli delivers every single time.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Testimonials
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Trusted by discerning clients
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Hear from individuals who trust Khazonli Health for their most
            important care decisions.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="group flex flex-col rounded-2xl border border-border/50 bg-card p-8 transition-colors hover:border-primary/30"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-primary text-primary"
                  />
                ))}
              </div>

              <blockquote className="mt-4 flex-1 text-pretty leading-relaxed text-muted-foreground">
                {`"${t.quote}"`}
              </blockquote>

              <div className="mt-6 flex items-center gap-3 border-t border-border/50 pt-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {t.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
