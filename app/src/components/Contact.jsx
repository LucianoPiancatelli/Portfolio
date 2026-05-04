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
        <h2 className="inline-block pb-4 text-5xl font-bold text-text-main md:text-6xl">
          <span className="typewriter">¿Iniciamos un </span>
          <span className="typewriter bg-gradient-to-r from-magenta to-pink-500 bg-clip-text text-transparent text-glow-magenta">proyecto?</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-xl text-text-main">
          Actualmente estoy disponible para nuevas oportunidades. Ya sea para un puesto full-time, part-time o un proyecto freelance.
        </p>
      </div>

      <div className="glass-panel anime-reveal tilt-md relative w-full overflow-hidden p-8 md:p-12">
        <div className="relative z-10 grid items-start gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-3xl font-bold text-text-main md:text-4xl">Contacto directo</h3>
              <p className="text-lg leading-relaxed text-text-main">
                Si preferís algo rápido, acá tenés mis datos. Si no, dejame un mensaje y te respondo.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {phone ? (
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="glass-panel glass-panel-hover tilt-l group p-5"
                >
                  <div className="flex items-start gap-4">
                    <div className="draw-on-view no-draw-fill flex h-12 w-12 items-center justify-center rounded-xl border-2 border-text-main text-cyan">
                      <FaWhatsapp className="h-6 w-6" />
                    </div>

                    <div className="min-w-0">
                      <div className="text-base font-semibold text-text-main/80">WhatsApp</div>
                      <div className="truncate text-xl text-text-main transition-colors group-hover:text-magenta">{phone}</div>
                      <div className="mt-1 text-sm text-text-main/60">Abrir WhatsApp</div>
                    </div>
                  </div>
                </a>
              ) : null}

              {linkedinUrl ? (
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="glass-panel glass-panel-hover tilt-r alt group p-5"
                >
                  <div className="flex items-start gap-4">
                    <div className="draw-on-view flex h-12 w-12 items-center justify-center rounded-xl border-2 border-text-main text-magenta">
                      <Linkedin className="h-6 w-6" />
                    </div>

                    <div className="min-w-0">
                      <div className="text-base font-semibold text-text-main/80">LinkedIn</div>
                      <div className="truncate text-xl text-text-main transition-colors group-hover:text-cyan">Ver perfil</div>
                      <div className="mt-1 text-sm text-text-main/60">Conectemos</div>
                    </div>
                  </div>
                </a>
              ) : null}

              {!hasDirectContact ? (
                <div className="glass-panel tilt-l p-5">
                  <div className="flex items-start gap-4">
                    <div className="draw-on-view flex h-12 w-12 items-center justify-center rounded-xl border-2 border-text-main text-text-main">
                      <AlertTriangle className="h-6 w-6" />
                    </div>

                    <div>
                      <div className="text-base font-semibold text-text-main">Faltan tus datos</div>
                      <div className="mt-1 text-base text-text-main/80">
                        Configurá <span className="text-magenta">VITE_CONTACT_PHONE</span> y <span className="text-magenta">VITE_LINKEDIN_URL</span> en tu <span className="text-magenta">.env</span>.
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
                <label htmlFor="name" className="font-syne text-lg text-text-main transition-colors group-focus-within:text-magenta">Nombre completo</label>
                <input
                  type="text"
                  id="name"
                  value={form.name}
                  onChange={(event) => setForm((previous) => ({ ...previous, name: event.target.value }))}
                  className="sketch-input text-lg text-text-main"
                  placeholder="Ej: Nombre"
                  autoComplete="name"
                  required
                />
              </div>

              <div className="group flex flex-col gap-2">
                <label htmlFor="email" className="font-syne text-lg text-text-main transition-colors group-focus-within:text-cyan">Correo electrónico</label>
                <input
                  type="email"
                  id="email"
                  value={form.email}
                  onChange={(event) => setForm((previous) => ({ ...previous, email: event.target.value }))}
                  className="sketch-input text-lg text-text-main"
                  placeholder="mail@dominio.com"
                  autoComplete="email"
                  inputMode="email"
                  required
                />
              </div>
            </div>

            <div className="group flex flex-col gap-2">
              <label htmlFor="message" className="font-syne text-lg text-text-main transition-colors group-focus-within:text-magenta">Contame sobre tu proyecto</label>
              <textarea
                id="message"
                rows="5"
                value={form.message}
                onChange={(event) => setForm((previous) => ({ ...previous, message: event.target.value }))}
                className="sketch-input resize-none text-lg text-text-main"
                placeholder="Objetivo, alcance, presupuesto (si aplica), tiempos..."
                required
              />
            </div>

            {status.state !== 'idle' ? (
              <div
                className={[
                  'flex items-start gap-3 border-2 px-4 py-4 text-base',
                  status.state === 'success'
                    ? 'border-text-main bg-cyan/15 text-text-main'
                    : status.state === 'error'
                      ? 'border-text-main bg-magenta/15 text-text-main'
                      : 'border-text-main bg-obsidian-light text-text-main',
                ].join(' ')}
                style={{ borderRadius: '20px 6px 22px 6px / 6px 22px 6px 20px' }}
                role="status"
                aria-live="polite"
              >
                <span className={`draw-on-view mt-0.5 inline-flex ${status.state === 'success' ? 'text-cyan' : status.state === 'error' ? 'text-magenta' : 'text-text-main'}`}>
                  {status.state === 'success' ? (
                    <Check className="h-5 w-5" />
                  ) : status.state === 'error' ? (
                    <AlertTriangle className="h-5 w-5" />
                  ) : (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  )}
                </span>

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
                  'sketch-btn px-10 py-3 text-xl',
                  canSubmit ? 'sketch-btn-accent' : 'opacity-60 cursor-not-allowed',
                ].join(' ')}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
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
              </button>
            </div>

            <div className="text-center text-sm text-text-main/70">
              {formAction ? (
                <span>Tu mensaje se envía de forma segura mediante un endpoint externo.</span>
              ) : (
                <span>Para que el formulario funcione, configurá <span className="text-magenta">VITE_CONTACT_FORM_ACTION</span> en tu <span className="text-magenta">.env</span>.</span>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
