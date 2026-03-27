import { useMemo, useState } from 'react';
import { AlertTriangle, Check, Linkedin, Loader2 } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
  const phone = import.meta.env.VITE_CONTACT_PHONE ?? '';
  const linkedinUrlRaw = import.meta.env.VITE_LINKEDIN_URL ?? '';
  const formAction = import.meta.env.VITE_CONTACT_FORM_ACTION ?? '';

  const whatsappPhone = useMemo(() => String(phone || '').replace(/[^\d]/g, ''), [phone]);
  const whatsappUrl = useMemo(() => (whatsappPhone ? `https://wa.me/${whatsappPhone}` : ''), [whatsappPhone]);

  const linkedinUrl = useMemo(() => {
    const value = String(linkedinUrlRaw || '').trim();
    if (!value) return '';
    if (/^https?:\/\//i.test(value)) return value;
    return `https://${value}`;
  }, [linkedinUrlRaw]);

  const hasDirectContact = Boolean(phone || linkedinUrl);

  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const canSubmit = useMemo(() => {
    if (status.state === 'sending') return false;
    return Boolean(form.name.trim() && form.email.trim() && form.message.trim());
  }, [form, status.state]);

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus({ state: 'sending', message: '' });

    try {
      if (!formAction) {
        throw new Error('MISSING_FORM_ACTION');
      }

      const response = await fetch(formAction, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      if (!response.ok) {
        throw new Error('REQUEST_FAILED');
      }

      setStatus({ state: 'success', message: 'Mensaje enviado. Te respondo a la brevedad.' });
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      const message =
        error instanceof Error && error.message === 'MISSING_FORM_ACTION'
          ? 'Falta configurar el envío del formulario. Revisá el archivo .env (VITE_CONTACT_FORM_ACTION).'
          : 'No pude enviar el mensaje. Probá de nuevo en unos segundos.';

      setStatus({ state: 'error', message });
    }
  }

  return (
    <section id="contact" className="relative z-10 w-full px-4 py-32 md:px-8">
      <div className="anime-reveal mb-16 text-center">
        <h2 className="inline-block pb-4 text-5xl font-bold text-white md:text-6xl">
          ¿Iniciamos un <span className="bg-gradient-to-r from-magenta to-pink-500 bg-clip-text text-transparent text-glow-magenta">proyecto?</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-text-muted">
          Actualmente estoy disponible para nuevas oportunidades. Ya sea para un puesto full-time, part-time o un proyecto freelance.
        </p>
      </div>

      <div className="glass-panel anime-reveal relative w-full overflow-hidden p-8 md:p-12">
        <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-magenta/10 blur-[100px] mix-blend-screen" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-cyan/10 blur-[100px] mix-blend-screen" />

        <div className="relative z-10 grid items-start gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white md:text-3xl">Contacto directo</h3>
              <p className="leading-relaxed text-text-muted">
                Si preferís algo rápido, acá tenés mis datos. Si no, dejame un mensaje y te respondo.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {phone ? (
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="glass-panel glass-panel-hover group rounded-2xl border-border-glow/60 p-5 hover:border-cyan"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan/20 bg-cyan/10 shadow-[0_0_30px_rgba(0,244,255,0.12)]">
                      <FaWhatsapp className="h-5 w-5 text-cyan" />
                    </div>

                    <div className="min-w-0">
                      <div className="text-sm font-semibold text-white/80">WhatsApp</div>
                      <div className="truncate text-lg text-white transition-all group-hover:text-glow-cyan">{phone}</div>
                      <div className="mt-1 text-xs text-text-muted">Abrir WhatsApp</div>
                    </div>
                  </div>
                </a>
              ) : null}

              {linkedinUrl ? (
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="glass-panel glass-panel-hover group rounded-2xl border-border-glow/60 p-5 hover:border-magenta"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-magenta/20 bg-magenta/10 shadow-[0_0_30px_rgba(255,0,85,0.12)]">
                      <Linkedin className="h-5 w-5 text-magenta" />
                    </div>

                    <div className="min-w-0">
                      <div className="text-sm font-semibold text-white/80">LinkedIn</div>
                      <div className="truncate text-lg text-white transition-all group-hover:text-glow-magenta">Ver perfil</div>
                      <div className="mt-1 text-xs text-text-muted">Conectemos</div>
                    </div>
                  </div>
                </a>
              ) : null}

              {!hasDirectContact ? (
                <div className="glass-panel rounded-2xl border-border-glow/40 p-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border-glass bg-white/5">
                      <AlertTriangle className="h-5 w-5 text-white/70" />
                    </div>

                    <div>
                      <div className="text-sm font-semibold text-white/80">Faltan tus datos</div>
                      <div className="mt-1 text-sm text-text-muted">
                        Configurá <span className="text-white/80">VITE_CONTACT_PHONE</span> y <span className="text-white/80">VITE_LINKEDIN_URL</span> en tu <span className="text-white/80">.env</span>.
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="group flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-semibold text-white/70 transition-colors group-focus-within:text-cyan">Nombre completo</label>
                <input
                  type="text"
                  id="name"
                  value={form.name}
                  onChange={(event) => setForm((previous) => ({ ...previous, name: event.target.value }))}
                  className="rounded-t-lg border-b border-border-glass bg-obsidian-light/50 px-4 py-3 text-white outline-none transition-all focus:border-cyan focus:bg-obsidian focus:shadow-[0_4px_20px_rgba(0,244,255,0.1)]"
                  placeholder="Ej: Nombre"
                  autoComplete="name"
                  required
                />
              </div>

              <div className="group flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-semibold text-white/70 transition-colors group-focus-within:text-magenta">Correo electrónico</label>
                <input
                  type="email"
                  id="email"
                  value={form.email}
                  onChange={(event) => setForm((previous) => ({ ...previous, email: event.target.value }))}
                  className="rounded-t-lg border-b border-border-glass bg-obsidian-light/50 px-4 py-3 text-white outline-none transition-all focus:border-magenta focus:bg-obsidian focus:shadow-[0_4px_20px_rgba(255,0,85,0.1)]"
                  placeholder="mail@dominio.com"
                  autoComplete="email"
                  inputMode="email"
                  required
                />
              </div>
            </div>

            <div className="group flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-semibold text-white/70 transition-colors group-focus-within:text-white">Contame sobre tu proyecto</label>
              <textarea
                id="message"
                rows="5"
                value={form.message}
                onChange={(event) => setForm((previous) => ({ ...previous, message: event.target.value }))}
                className="resize-none rounded-lg border border-border-glass bg-obsidian-light/50 p-4 text-white outline-none transition-all focus:border-white focus:bg-obsidian focus:shadow-[0_4px_20px_rgba(255,255,255,0.1)]"
                placeholder="Objetivo, alcance, presupuesto (si aplica), tiempos..."
                required
              />
            </div>

            {status.state !== 'idle' ? (
              <div
                className={[
                  'flex items-start gap-3 rounded-2xl border px-4 py-4 text-sm',
                  status.state === 'success'
                    ? 'border-cyan/20 bg-cyan/10 text-white'
                    : status.state === 'error'
                      ? 'border-magenta/20 bg-magenta/10 text-white'
                      : 'border-border-glass bg-white/5 text-white/90',
                ].join(' ')}
                role="status"
                aria-live="polite"
              >
                {status.state === 'success' ? (
                  <Check className="mt-0.5 h-5 w-5 text-cyan" />
                ) : status.state === 'error' ? (
                  <AlertTriangle className="mt-0.5 h-5 w-5 text-magenta" />
                ) : (
                  <Loader2 className="mt-0.5 h-5 w-5 animate-spin text-white/80" />
                )}

                <div className="leading-relaxed">
                  {status.state === 'sending' ? 'Enviando...' : status.message}
                </div>
              </div>
            ) : null}

            <div className="mt-2 flex justify-center">
              <button
                type="submit"
                disabled={!canSubmit}
                className={[
                  'group relative w-full overflow-hidden rounded-full border bg-obsidian px-10 py-4 font-syne text-lg font-bold shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300 md:w-auto',
                  canSubmit
                    ? 'border-border-glow hover:border-magenta hover:shadow-[0_0_30px_rgba(255,0,85,0.3)]'
                    : 'cursor-not-allowed border-border-glass opacity-60',
                ].join(' ')}
              >
                <span className="relative z-10 flex items-center justify-center gap-2 transition-colors duration-300 group-hover:text-white">
                  {status.state === 'sending' ? (
                    <>
                      Enviando
                      <Loader2 className="h-5 w-5 animate-spin" />
                    </>
                  ) : (
                    <>
                      Enviar mensaje
                      <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">→</span>
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-magenta/20 to-cyan/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </button>
            </div>

            <div className="text-center text-xs text-text-muted">
              {formAction ? (
                <span>Tu mensaje se envía de forma segura mediante un endpoint externo.</span>
              ) : (
                <span>Para que el formulario funcione, configurá <span className="text-white/70">VITE_CONTACT_FORM_ACTION</span> en tu <span className="text-white/70">.env</span>.</span>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
