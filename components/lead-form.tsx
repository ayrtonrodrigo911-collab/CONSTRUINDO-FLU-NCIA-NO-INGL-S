"use client";

import { LockKeyhole, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import { useState, type FormEvent } from "react";

export default function LeadForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Trigger celebration confetti
      if (typeof window !== "undefined" && (window as any).confetti) {
        (window as any).confetti({
          particleCount: 90,
          spread: 75,
          origin: { y: 0.6 },
          colors: ["#c8102e", "#102454", "#ffd700", "#ffffff"],
        });
      }
    }, 800);
  }

  if (submitted) {
    return (
      <div className="lead-form-success p-6 text-center bg-white/95 rounded-xl shadow-lg border border-green-200 animate-scale-in">
        <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto mb-3 animate-bounce-subtle" />
        <h3 className="font-heading font-extrabold text-lg text-[#102454] mb-1">
          Parabéns, {name.trim()}!
        </h3>
        <p className="text-xs text-[#555] mb-4">
          Seu acesso foi liberado com sucesso. Enviamos as instruções para <strong>{email}</strong>.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setName("");
            setEmail("");
          }}
          className="text-xs text-[#c8102e] font-semibold underline hover:text-[#9e0c24] cursor-pointer"
        >
          Cadastrar outro e-mail
        </button>
      </div>
    );
  }

  return (
    <form id="cadastro" onSubmit={handleSubmit} className="lead-form">
      <p className="lead-form-intro">
        Inscreva-se e saiba como receber o link por e-mail:
      </p>

      <div className="lead-form-fields">
        <div className="relative group">
          <label htmlFor="name" className="sr-only">
            Digite seu primeiro nome
          </label>
          <input
            autoComplete="name"
            className="form-input transition-all duration-200 focus:ring-2 focus:ring-[#c8102e]/30 group-hover:border-[#999]"
            id="name"
            name="name"
            onChange={(event) => setName(event.target.value)}
            placeholder="Digite seu primeiro nome"
            required
            value={name}
          />
        </div>

        <div className="relative group">
          <label htmlFor="email" className="sr-only">
            Insira seu melhor e-mail
          </label>
          <input
            autoComplete="email"
            className="form-input transition-all duration-200 focus:ring-2 focus:ring-[#c8102e]/30 group-hover:border-[#999]"
            id="email"
            name="email"
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Insira seu melhor e-mail"
            required
            type="email"
            value={email}
          />
        </div>
      </div>

      <button
        className="button-primary button-shine relative overflow-hidden group shadow-md hover:shadow-lg transition-all duration-300"
        type="submit"
        disabled={isSubmitting}
      >
        <span className="relative z-10 flex items-center justify-center font-heading font-extrabold tracking-wider">
          {isSubmitting ? (
            <span className="inline-flex items-center gap-2">
              <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              PROCESSANDO...
            </span>
          ) : (
            "QUERO PARTICIPAR GRATUITAMENTE"
          )}
        </span>
      </button>

      <div className="lead-form-badges">
        <p className="privacy-note">
          <ShieldCheck aria-hidden="true" className="w-3.5 h-3.5 text-green-600" />
          <span>Suas informações estão 100% seguras.</span>
        </p>
        <p className="privacy-note privacy-note-sub">
          <LockKeyhole aria-hidden="true" className="w-3 h-3 text-gray-400" />
          <span>A confirmação será enviada por e-mail.</span>
        </p>
      </div>
    </form>
  );
}
