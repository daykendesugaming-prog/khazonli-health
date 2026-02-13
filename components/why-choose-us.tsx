import { ShieldCheck, Clock, Lock } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "VIP Verified Staff",
    description:
      "Every nurse undergoes rigorous background checks, credential verification, and continuous performance reviews.",
  },
  {
    icon: Clock,
    title: "Real-Time Availability",
    description:
      "Our platform shows live nurse availability so you can book instantly, any time of day or night.",
  },
  {
    icon: Lock,
    title: "Bank-Grade Privacy",
    description:
      "All data is encrypted end-to-end. We maintain full HIPAA compliance and never share your personal information.",
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="relative py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Why Choose Us
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            The gold standard in home nursing
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Designed for those who expect the best. Our platform combines
            cutting-edge technology with exceptional human care.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card p-8 transition-colors hover:border-primary/30"
            >
              {/* Subtle corner accent */}
              <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/5 transition-transform group-hover:scale-150" />

              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                  <feature.icon className="h-6 w-6" />
                </div>

                <h3 className="mt-5 text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
