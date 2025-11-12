/* eslint-disable react/no-unescaped-entities */
export default function Page() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pt-16 pb-20 md:flex md:items-center md:gap-10">
        <div className="md:w-1/2">
          <p className="inline-flex items-center gap-2 rounded-full bg-slate-900/5 px-3 py-1 text-xs font-medium text-slate-900 mb-6">
            Clinical AI · Dental Imaging · Signal Processing
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
            AI that clinicians can actually use.
          </h1>
          <p className="mt-5 text-base text-slate-600 md:text-lg">
            S-Class Lab builds AI-assisted diagnostic software for real clinics. We combine medical imaging,
            signal processing, and 3D reconstruction to generate explainable reports that doctors can confirm.
          </p>
          <div className="mt-8 flex gap-3">
            <a
              href="#contact"
              className="rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Request clinical demo
            </a>
            <a
              href="#inception"
              className="rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-100"
            >
              Inception alignment
            </a>
          </div>
          <p className="mt-5 text-xs text-slate-500">
            Based in Incheon, Republic of Korea · Preparing NVIDIA Inception application
          </p>
        </div>
        {/* hero card */}
        <div className="mt-10 rounded-2xl bg-white p-5 shadow-lg ring-1 ring-slate-100 md:mt-0 md:w-1/2">
          <div className="rounded-xl bg-gradient-to-br from-teal-50 to-cyan-50 p-5">
            <p className="text-xs font-semibold text-slate-500 mb-3">
              Clinical AI Report Builder
            </p>
            <div className="space-y-3">
              <div className="rounded-lg bg-white/80 px-4 py-3">
                <p className="text-xs text-slate-500">Input</p>
                <p className="text-sm font-semibold text-slate-900">
                  CBCT / dental X-ray / ultrasound signal
                </p>
              </div>
              <div className="rounded-lg bg-white/80 px-4 py-3">
                <p className="text-xs text-slate-500">Processing</p>
                <p className="text-sm font-semibold text-slate-900">
                  3D reconstruction · lesion candidate detection
                </p>
              </div>
              <div className="rounded-lg bg-slate-900 px-4 py-3">
                <p className="text-xs text-slate-200">Output</p>
                <p className="text-sm font-semibold text-white">
                  Doctor-confirmable diagnostic report
                </p>
              </div>
            </div>
          </div>
          <p className="mt-5 text-xs text-slate-400">
            Validated in S-Class Dental Clinic workflows
          </p>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-semibold text-slate-900">About S-Class Lab</h2>
          <p className="mt-4 max-w-3xl text-slate-600">
            We are a research-driven medical AI startup focusing on diagnostic assistance for dentistry and
            outpatient clinical environments. Because we operate an actual dental clinic, we can collect
            real-world data, design realistic AI workflows, and ship tools that physicians can adopt immediately.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-100 bg-slate-50/50 p-6">
              <h3 className="text-sm font-semibold text-slate-900">Clinic-first design</h3>
              <p className="mt-2 text-sm text-slate-600">
                Built on real patient cases, chair-time constraints, and doctor communication patterns.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50/50 p-6">
              <h3 className="text-sm font-semibold text-slate-900">Medical imaging + signals</h3>
              <p className="mt-2 text-sm text-slate-600">
                Dental X-ray, CBCT and ultrasound signal processing combined with 3D reconstruction.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50/50 p-6">
              <h3 className="text-sm font-semibold text-slate-900">Patent-backed R&D</h3>
              <p className="mt-2 text-sm text-slate-600">
                Feature-stabilized learning (ε-constrained random layers) and medical AI IP in progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Solutions */}
      <section id="solutions" className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-2xl font-semibold text-slate-900">Medical AI Solutions</h2>
            <p className="text-sm text-slate-500">From dental clinics to multi-modal R&D</p>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {/* Cure & Care AI */}
            <div className="flex flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold text-cyan-500 mb-2">01 · Diagnostic Assistant</p>
              <h3 className="text-base font-semibold text-slate-900">Cure & Care AI</h3>
              <p className="mt-2 text-sm text-slate-600">
                AI engine that highlights suspicious regions, suggests probable conditions, and formats a
                doctor-facing report.
              </p>
              <p className="mt-auto text-xs text-slate-400">TensorRT-ready · for chairside usage</p>
            </div>
            {/* Dental Imaging AI */}
            <div className="flex flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold text-teal-500 mb-2">02 · Dental Imaging</p>
              <h3 className="text-base font-semibold text-slate-900">Dental Imaging AI</h3>
              <p className="mt-2 text-sm text-slate-600">
                Automated assessment for periapical lesions, bone level changes, and implant follow-up.
              </p>
              <p className="mt-auto text-xs text-slate-400">Designed for dentists</p>
            </div>
            {/* Signal Processing Lab */}
            <div className="flex flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold text-slate-500 mb-2">03 · Signal & 3D Lab</p>
              <h3 className="text-base font-semibold text-slate-900">Medical Signal Processing Lab</h3>
              <p className="mt-2 text-sm text-slate-600">
                Research environment for ultrasound, 3D reconstruction, and real-time video streams from
                multi-camera or scope devices.
              </p>
              <p className="mt-auto text-xs text-slate-400">Multi-GPU · real-time capable</p>
            </div>
          </div>
        </div>
      </section>

      {/* NVIDIA Inception Appeal */}
      <section id="inception" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-semibold text-slate-900">Why NVIDIA Inception</h2>
          <p className="mt-4 max-w-3xl text-slate-600">
            Our models are multi-modal (image + signal), 3D, and sometimes real-time — all of which benefit
            directly from NVIDIA’s GPU ecosystem. We plan to optimize inference with TensorRT and explore DGX
            Cloud for large-scale training.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-100 bg-slate-50/50 p-6">
              <p className="text-xs font-semibold text-slate-500">NVIDIA Stack</p>
              <p className="mt-2 text-sm text-slate-700">
                CUDA, cuDNN, TensorRT, Omniverse (for 3D visualization of medical data)
              </p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50/50 p-6">
              <p className="text-xs font-semibold text-slate-500">Clinical workloads</p>
              <p className="mt-2 text-sm text-slate-700">
                We need low-latency inference to run AI at the point of care — GPU acceleration is essential.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50/50 p-6">
              <p className="text-xs font-semibold text-slate-500">Globalization</p>
              <p className="mt-2 text-sm text-slate-700">
                Inception’s partner ecosystem helps us reach hospitals, imaging vendors, and investors faster.
              </p>
            </div>
          </div>
          <p className="mt-6 text-sm text-slate-500">
            We are an incorporated, AI-focused startup with active clinical environment — fitting Inception's
            criteria for developer + business contacts, real website, and GPU-focused AI products.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="rounded-2xl bg-slate-900 px-6 py-10 text-white md:flex md:items-center md:justify-between md:gap-8">
            <div>
              <h2 className="text-2xl font-semibold">Clinical / partnership inquiries</h2>
              <p className="mt-3 text-sm text-slate-200">
                We collaborate with clinics, imaging device companies, and AI research groups.
                Email us to discuss PoC, data partnerships, or NVIDIA Inception follow-up.
              </p>
              <p className="mt-4 text-sm font-mono">
                ceo@sclasslab.com · dev@sclasslab.com
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <a
                href="mailto:ceo@sclasslab.com"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100"
              >
                Contact
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <p className="mt-6 text-center text-xs text-slate-400">
            © {new Date().getFullYear()} S-Class Lab Inc. All rights reserved.
          </p>
        </div>
      </section>
    </div>
  );
}
