"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const VARIANTS = {
  c: {
    eyebrow: "text-[#00AADD]/70",
    label: "ey-c",
    focus: "focus:border-[#00AADD]/35 focus:shadow-[0_0_0_3px_rgba(0,170,221,0.05)]",
    cta: "bg-[linear-gradient(135deg,#00AADD,#3370E8)]",
  },
  b: {
    eyebrow: "text-[#6A9AF8]/70",
    focus: "focus:border-[#3770E8]/40 focus:shadow-[0_0_0_3px_rgba(26,77,181,0.06)]",
    cta: "bg-[linear-gradient(135deg,#2258CC,#00AADD)]",
  },
  o: {
    eyebrow: "text-[#FF8840]/70",
    focus: "focus:border-[#FF6B1A]/40 focus:shadow-[0_0_0_3px_rgba(255,107,26,0.05)]",
    cta: "bg-[linear-gradient(135deg,#D95200,#FF6B1A,#FF8840)]",
  },
};

function FieldLabel({ children }) {
  return (
    <label className="mb-1.5 block text-[10px] font-semibold uppercase tracking-[0.12em] text-white/55">
      {children}
    </label>
  );
}

export default function LeadForm({
  profile,
  variant,
  schema,
  fields,
  eyebrow,
  title,
  subtitle,
  ctaLabel,
  footerNote,
  onSuccess,
}) {
  const v = VARIANTS[variant];
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState(null);

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: Object.fromEntries(fields.map((f) => [f.name, ""])),
  });

  async function onSubmit(values) {
    setSubmitting(true);
    setFormError(null);
    try {
      if (typeof window !== "undefined") {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ event: "form_submit_attempt", profile });
      }
      const res = await fetch("/api/landing-fitness-negocios", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ profile, ...values }),
      });
      if (!res.ok) throw new Error("submit failed");
      if (typeof window !== "undefined") {
        window.dataLayer.push({ event: "form_submit_success", profile });
      }
      onSuccess?.();
    } catch (err) {
      console.error(err);
      setFormError("Hubo un error al enviar. Por favor intentá de nuevo.");
    } finally {
      setSubmitting(false);
    }
  }

  const inputCls = `w-full appearance-none rounded-md border border-white/10 bg-[#111826] px-3.5 py-3 font-barlow text-[15px] text-white/85 outline-none transition-all placeholder:text-white/35 ${v.focus}`;

  return (
    <div className="px-6 pb-[60px] pt-8">
      <div className={`mb-1.5 font-barlow-c text-[10px] font-semibold uppercase tracking-[0.2em] ${v.eyebrow}`}>
        {eyebrow}
      </div>
      <h3
        className="mb-2 font-barlow-c text-[32px] font-extrabold leading-[1.05] text-white/90"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <p className="mb-[22px] text-[13.5px] font-light leading-[1.65] text-[#B5C4D6]">{subtitle}</p>

      <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
        {fields.map((f) => {
          const error = form.formState.errors[f.name];
          return (
            <div key={f.name} className="mb-[11px]">
              <FieldLabel>{f.label}</FieldLabel>
              {f.type === "select" ? (
                <select className={inputCls} {...form.register(f.name)} defaultValue="">
                  <option value="" disabled className="text-white/40">
                    {f.placeholder ?? "Seleccioná una opción"}
                  </option>
                  {f.options.map((o) => (
                    <option key={o} value={o} className="bg-[#111826] text-white">
                      {o}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={f.type ?? "text"}
                  placeholder={f.placeholder}
                  className={inputCls}
                  {...form.register(f.name)}
                />
              )}
              {error && (
                <p className="mt-1 text-xs text-red-400">{error.message?.toString()}</p>
              )}
            </div>
          );
        })}

        {formError && (
          <p className="mb-2 text-center text-xs text-red-400">{formError}</p>
        )}

        <button
          type="submit"
          disabled={submitting}
          className={`mt-1.5 w-full rounded-[18px] py-4 font-barlow-c text-[19px] font-extrabold uppercase tracking-[0.06em] text-white transition-all hover:-translate-y-0.5 hover:brightness-110 active:scale-[0.99] disabled:opacity-60 ${v.cta}`}
        >
          {submitting ? "Enviando…" : ctaLabel}
        </button>

        {footerNote}
      </form>
    </div>
  );
}
