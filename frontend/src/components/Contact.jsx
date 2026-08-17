import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail, Clock, MessageCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import { toast } from "sonner";
import { SectionHeading } from "./SectionHeading";
import { TEAM, SERVICE_OPTIONS, BUDGET_OPTIONS, WHATSAPP_URL } from "../data/site";

const API = process.env.REACT_APP_BACKEND_URL;

console.log("API :{}",API);
const initialForm = {
  name: "",
  business_name: "",
  email: "",
  phone: "",
  service: "",
  budget: "",
  message: "",
};

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 sm:py-3 text-base sm:text-sm text-navy placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-[border-color,box-shadow] duration-200";

const Field = ({ label, error, children, testId }) => (
  <div data-testid={testId}>
    <label className="mb-1.5 block text-sm font-semibold text-navy">{label}</label>
    {children}
    {error && <p className="mt-1.5 text-xs font-medium text-red-500" data-testid={`${testId}-error`}>{error}</p>}
  </div>
);

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const [searchParams] = useSearchParams();
  useEffect(() => {
    const service = searchParams.get("service");
    if (service) setForm((f) => ({ ...f, service }));
  }, [searchParams]);

  const update = (key) => (e) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
    setErrors((er) => ({ ...er, [key]: undefined }));
  };

  const validate = () => {
    const e = {};
    if (form.name.trim().length < 2) e.name = "Please enter your name";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) e.email = "Enter a valid email address";
    if (!/^[+]?[\d\s-]{8,16}$/.test(form.phone.trim())) e.phone = "Enter a valid phone number";
    if (!form.service) e.service = "Please select a service";
    if (form.message.trim().length < 10) e.message = "Tell us a little more about your project (min 10 characters)";
    return e;
  };

  const submit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setSubmitting(true);
    try {

      await axios.post(`${API}/api/enquiries`, form);
      setSuccess(true);
      setForm(initialForm);
      toast.success("Thank you! Your enquiry has been sent successfully.");
    } catch (err) {
          console.log("BACKEND URL:", process.env.REACT_APP_BACKEND_URL);
          console.log("API:", API);
      toast.error("We couldn't send your enquiry right now. Please try again or contact us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" data-testid="contact-section" className="py-24 md:py-32 bg-gradient-to-b from-brand-50/70 via-white to-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <SectionHeading
          badge="Get In Touch"
          title="Let's Build Something Amazing Together."
          subtitle="Tell us about your idea and we'll help turn it into a digital solution."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 rounded-3xl border border-slate-100 bg-white p-7 md:p-10 card-shadow"
          >
            {success ? (
              <div className="py-10 text-center" data-testid="contact-success">
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-500">
                  <CheckCircle2 className="h-8 w-8" />
                </span>
                <h3 className="mt-5 text-2xl font-heading font-bold text-navy">Thank You!</h3>
                <p className="mt-3 text-sm md:text-base text-slate-600 max-w-md mx-auto leading-relaxed">
                  Your enquiry has been sent successfully. Our team will contact you soon.
                </p>
                <button
                  onClick={() => setSuccess(false)}
                  data-testid="contact-send-another-btn"
                  className="mt-7 inline-flex items-center gap-2 rounded-full border border-brand-200 text-brand-600 font-semibold px-6 py-2.5 text-sm hover:bg-brand-50 transition-colors duration-200"
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={submit} noValidate data-testid="contact-form" className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label="Full Name *" error={errors.name} testId="field-name">
                  <input value={form.name} onChange={update("name")} placeholder="Your full name" className={inputClass} data-testid="input-name" />
                </Field>
                <Field label="Business / Organization Name" error={errors.business_name} testId="field-business">
                  <input value={form.business_name} onChange={update("business_name")} placeholder="Your business or organization" className={inputClass} data-testid="input-business" />
                </Field>
                <Field label="Email Address *" error={errors.email} testId="field-email">
                  <input type="email" value={form.email} onChange={update("email")} placeholder="you@example.com" className={inputClass} data-testid="input-email" />
                </Field>
                <Field label="Phone Number *" error={errors.phone} testId="field-phone">
                  <input type="tel" value={form.phone} onChange={update("phone")} placeholder="Your phone number" className={inputClass} data-testid="input-phone" />
                </Field>
                <Field label="Service Required *" error={errors.service} testId="field-service">
                  <select value={form.service} onChange={update("service")} className={inputClass} data-testid="input-service">
                    <option value="">Select a service</option>
                    {SERVICE_OPTIONS.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Budget Range" error={errors.budget} testId="field-budget">
                  <select value={form.budget} onChange={update("budget")} className={inputClass} data-testid="input-budget">
                    <option value="">Select a budget range</option>
                    {BUDGET_OPTIONS.map((b) => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                </Field>
                <div className="sm:col-span-2">
                  <Field label="Project Details *" error={errors.message} testId="field-message">
                    <textarea
                      rows={5}
                      value={form.message}
                      onChange={update("message")}
                      placeholder="Tell us about your project, goals and any specific requirements..."
                      className={`${inputClass} resize-none`}
                      data-testid="input-message"
                    />
                  </Field>
                </div>
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    data-testid="contact-submit-btn"
                    className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-brand-500 hover:bg-brand-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold rounded-full px-9 py-3.5 transition-colors duration-200 shadow-[0_12px_30px_rgba(29,111,242,0.3)]"
                  >
                    {submitting ? (
                      <>Sending Enquiry... <Loader2 className="h-4 w-4 animate-spin" /></>
                    ) : (
                      <>Send Enquiry <ArrowRight className="h-4 w-4" /></>
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-2 space-y-5"
          >
            <div className="rounded-3xl bg-navy p-7 md:p-8 text-white relative overflow-hidden">
              <div className="absolute -top-14 -right-14 h-40 w-40 rounded-full bg-brand-500/30 blur-2xl" aria-hidden="true" />
              <h3 className="relative text-xl font-heading font-bold">Prefer to talk directly?</h3>
              <p className="relative mt-2.5 text-sm text-slate-300 leading-relaxed">
                Call or WhatsApp us — we usually reply within a few hours.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="contact-whatsapp-btn"
                className="relative mt-6 inline-flex items-center gap-2 rounded-full bg-[#25D366] hover:bg-[#1fb857] text-white font-semibold px-6 py-3 text-sm transition-colors duration-200"
              >
                <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
              </a>
              <div className="relative mt-6 flex items-center gap-2.5 text-sm text-slate-300">
                <Clock className="h-4 w-4 text-cyan-300" /> Response within 24 hours, free consultation
              </div>
            </div>

            {TEAM.map((member) => (
              <div key={member.email} className="rounded-3xl border border-slate-100 bg-white p-6 card-shadow" data-testid={`contact-mini-${member.initials.toLowerCase()}`}>
                <div className="flex items-center gap-3.5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-cyan-500 text-white font-heading font-bold text-sm">
                    {member.initials}
                  </span>
                  <div>
                    <p className="font-heading font-bold text-navy text-sm">{member.name}</p>
                    <p className="text-xs text-slate-500">{member.phone}</p>
                  </div>
                  <div className="ml-auto flex gap-2">
                    <a href={`tel:${member.phoneIntl}`} aria-label={`Call ${member.name}`} className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-50 text-brand-600 hover:bg-brand-500 hover:text-white transition-colors duration-200">
                      <Phone className="h-4 w-4" />
                    </a>
                    <a href={`mailto:${member.email}`} aria-label={`Email ${member.name}`} className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-50 text-brand-600 hover:bg-brand-500 hover:text-white transition-colors duration-200">
                      <Mail className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </motion.aside>
        </div>

        <div className="mt-20" data-testid="team-cards-section">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center text-2xl md:text-3xl font-heading font-bold text-navy mb-10"
          >
            Meet the Team Behind <span className="text-gradient">NexBuild</span>
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TEAM.map((member, i) => (
              <motion.div
                key={member.email}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="rounded-3xl border border-slate-100 bg-white p-8 text-center card-shadow hover:card-shadow-hover hover:-translate-y-1.5 transition-[box-shadow,transform] duration-300"
                data-testid={`team-card-${i}`}
              >
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-cyan-500 text-white font-heading font-bold text-xl shadow-[0_10px_25px_rgba(29,111,242,0.35)]">
                  {member.initials}
                </span>
                <h4 className="mt-5 text-lg font-heading font-bold text-navy">{member.name}</h4>
                <p className="mt-3 flex items-center justify-center gap-2 text-sm text-slate-600">
                  <Phone className="h-3.5 w-3.5 text-brand-500" /> {member.phone}
                </p>
                <p className="mt-1.5 flex items-center justify-center gap-2 text-sm text-slate-600 break-all">
                  <Mail className="h-3.5 w-3.5 shrink-0 text-brand-500" /> {member.email}
                </p>
                <div className="mt-6 flex gap-3">
                  <a
                    href={`tel:${member.phoneIntl}`}
                    data-testid={`team-call-${i}`}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full bg-brand-500 hover:bg-brand-600 text-white text-sm font-semibold py-2.5 transition-colors duration-200"
                  >
                    <Phone className="h-3.5 w-3.5" /> Call {member.name.split(" ")[0]}
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    data-testid={`team-email-${i}`}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full border border-slate-200 text-navy hover:border-brand-500 hover:text-brand-600 text-sm font-semibold py-2.5 transition-colors duration-200"
                  >
                    <Mail className="h-3.5 w-3.5" /> Email {member.name.split(" ")[0]}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
