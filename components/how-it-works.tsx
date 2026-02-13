import { MessageSquare, Sparkles, UserCheck } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Request via Chat",
    description:
      "Describe your care needs through our AI triage chatbot. Available 24/7, it takes under 60 seconds.",
    step: "01",
  },
  {
    icon: Sparkles,
    title: "Instant AI Matching",
    description:
      "Our proprietary algorithm matches you with the ideal nurse based on specialization, proximity, and availability.",
    step: "02",
  },
  {
    icon: UserCheck,
    title: "Care Arrives",
    description:
      "A verified, certified nurse arrives at your home. Track their arrival in real-time through the app.",
    step: "03",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24">
      {/* Subtle divider glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            How It Works
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Three steps to premium home care
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            From request to arrival, our AI-driven platform ensures you receive
            world-class care with unparalleled speed.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.step}
              className="group relative rounded-2xl border border-border/50 bg-card p-8 transition-colors hover:border-primary/30 hover:bg-primary/[0.03]"
            >
              <span className="text-5xl font-bold text-primary/10">
                {step.step}
              </span>

              <div className="mt-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                <step.icon className="h-6 w-6" />
              </div>

              <h3 className="mt-5 text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
