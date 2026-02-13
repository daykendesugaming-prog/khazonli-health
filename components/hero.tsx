"use client"; // Importante para que el bot cargue en el navegador

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Send } from "lucide-react";
import { Standard } from "@typebot.io/react"; // 1. Importamos la librería del bot

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28"
    >
      {/* Background glow effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute top-20 right-0 h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 lg:flex-row lg:items-start lg:gap-16">
        {/* Left Content */}
        <div className="flex max-w-xl flex-1 flex-col items-center text-center lg:items-start lg:text-left">
          <Badge
            variant="outline"
            className="mb-6 border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium tracking-wider text-primary"
          >
            AI-POWERED HEALTHCARE STAFFING
          </Badge>

          <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Certified Nurses at Your Home in{" "}
            <span className="text-primary">Minutes.</span>
          </h1>

          <p className="mt-6 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
            AI-Powered matching. Verified professionals. 24/7 Availability.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button size="lg" className="gap-2 px-8" asChild>
              <a href="#how-it-works">
                Learn More
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 border-border/60 text-foreground hover:bg-secondary hover:text-foreground bg-transparent"
            >
              Call 24/7 Hotline
            </Button>
          </div>

          {/* Trust bar */}
          <div className="mt-12 flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
              Available Now
            </div>
            <div className="h-4 w-px bg-border" />
            <span>500+ Verified Nurses</span>
            <div className="h-4 w-px bg-border" />
            <span>HIPAA Compliant</span>
          </div>
        </div>

        {/* Right Side - EL TYPEBOT REAL */}
        <div className="w-full max-w-md flex-1 lg:max-w-lg">
          <div className="relative rounded-2xl border border-white/10 bg-white/5 p-1 shadow-2xl backdrop-blur-xl">
            <div className="rounded-xl border border-white/5 bg-white/[0.03] backdrop-blur-md overflow-hidden">
              {/* Header */}
              <div className="flex items-center gap-3 border-b border-white/10 px-5 py-4 bg-background/50">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/20">
                  <Bot className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Start Triage Now
                  </p>
                  <p className="text-xs text-muted-foreground">
                    AI-assisted care matching
                  </p>
                </div>
                <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-400">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                  Online
                </span>
              </div>

              {/* Contenedor del Bot - Reemplaza todo el body y el input anterior */}
              <div className="w-full" style={{ height: "450px" }}>
                <Standard 
                  typebot="enfermeras-demo-ujspfvo" 
                  style={{ width: "100%", height: "100%" }} 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}