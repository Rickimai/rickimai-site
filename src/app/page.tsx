export default function Home() {
  const cards = [
    { title: "Basin FinOps & Retention", metric: "$10M+/yr", metricLabel: "avoided cost • 76 PB deleted" },
    { title: "IOC Detection Platform", metric: "24 hr → 30 sec", metricLabel: "investigation time" },
    { title: "LLM Cost Simulator", metric: "3 wks → 15 min", metricLabel: "financial analysis cycle" },
    { title: "P&L Automation Platform", metric: "Day 12 → Day 7", metricLabel: "month-end close (MEC)" },
    { title: "CMMI Maturity Uplift", metric: "+0.76", metricLabel: "maturity score increase" },
    { title: "Cloud Cost Governance", metric: "$50M+/yr", metricLabel: "budget governed" },
  ];

  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <div className="mx-auto max-w-4xl px-6 py-16 space-y-10">
        {/* Hero */}
        <section className="space-y-3">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h1 className="text-5xl font-semibold tracking-tight">Rick Imai</h1>

            <div className="flex gap-4">
              <a
                href="/resumes/Rick_Imai_Resume_Infrastructure_Governance_FinOps.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-neutral-900 px-5 py-2 text-white hover:bg-neutral-800"
              >
                Download Resume (PDF)
              </a>

              <a
                href="https://linkedin.com/in/rick-imai"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border px-5 py-2"
              >
                LinkedIn
              </a>
            </div>
          </div>
          <p className="text-xl text-neutral-600">
            Staff Technical Program Manager | Director, Technical Program Management
          </p>
          <div className="inline-flex items-center rounded-md bg-neutral-50 px-3 py-1 text-sm text-neutral-800">
            Currently: Open to Staff/Senior TPM and Director TPM roles in infrastructure governance, security platforms, and FinOps
          </div>
        </section>
        {/* What I Bring */}
        <section>
          <h2 className="mb-3 text-2xl font-semibold">What I Bring</h2>
          <div className="mt-2 mb-5 border-t border-neutral-200" />
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Senior TPM Leadership",
                desc: "20+ years leading security, data, and infrastructure across enterprise environments",
              },
              {
                title: "Cross-Org Program Ownership",
                desc: "End-to-end ownership of complex initiatives with multi-year roadmaps and executive visibility",
              },
              {
                title: "Platform Modernization",
                desc: "Legacy-to-cloud transformations across architecture, migration, and governance",
              },
              {
                title: "Cybersecurity & Risk Programs",
                desc: "Breach remediation, security data platforms, and regulated delivery across threat, identity, and protection domains"
              },
              {
                title: "Platform Scaling & Governance",
                desc: "Turning fragmented systems into scalable, well-governed platforms",
              },
              {
                title: "FinOps & Cloud Cost Control",
                desc: "Governed $50M+ annual cloud spend via allocation, showback, and optimization",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-neutral-200 bg-neutral-50 p-5 h-full"
              >
                <h3 className="mb-2 text-lg font-semibold text-neutral-900">
                  {item.title}
                </h3>
                <p className="text-sm leading-snug text-neutral-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
        {/* Selected Work & Impact */}
        <section>
          <h2 className="mb-2 text-2xl font-semibold">Selected Work & Impact</h2>
          <div className="mt-2 mb-5 border-t border-neutral-200" />
          <p className="mb-6 text-sm text-neutral-500">
            Representative programs across security, finance, and infrastructure, each paired with measurable outcomes.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {cards.map((card) => (
              <div
                key={card.title}
                className="flex h-full min-w-0 flex-col rounded-lg border border-neutral-200 bg-neutral-50 p-5 transition-shadow hover:shadow-sm"

              >
                <h3 title={card.title} className="min-h-[28px] line-clamp-1 text-lg font-semibold text-neutral-900">
                  {card.title}
                </h3>

                <div className="mt-4">
                  <div className="flex h-[2.25rem] items-end md:h-[2.75rem]">
                    <p className="whitespace-nowrap text-2xl font-semibold leading-none tracking-[-0.02em] text-primary-600 tabular-nums md:text-3xl">
                      {card.metric}
                    </p>
                  </div>
                  <p className="mt-3 text-sm leading-snug text-neutral-600">{card.metricLabel}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* What I'm Looking For */}
        <section>
          <h2 className="mb-3 text-2xl font-semibold">What I&apos;m Looking For</h2>
          <div className="mt-2 mb-5 border-t border-neutral-200" />
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Infrastructure Governance & FinOps",
                desc: "Roles owning cost, scale, and reliability across large cloud platforms",
              },
              {
                title: "Security Data Platforms",
                desc: "Programs supporting compliance, detection, and security operations at scale",
              },
              {
                title: "Portfolio / Program Leadership",
                desc: "Staff- or Director-level ownership across multiple initiatives and teams",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-neutral-200 bg-neutral-50 p-5 h-full"
              >
                <h3 className="mb-2 text-lg font-semibold text-neutral-900">
                  {item.title}
                </h3>
                <p className="text-sm leading-snug text-neutral-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-4 max-w-3xl text-sm text-neutral-600">
            Ideal fit: Organizations building large-scale data platforms or formalizing governance and FinOps at enterprise scale.
          </p>
        </section>

        {/* Philosophy */}
        <section>
          <h2 className="mb-3 text-2xl font-semibold">How I Work</h2>
          <div className="mt-2 mb-5 border-t border-neutral-200" />
          <p className="max-w-2xl text-neutral-700">
            I treat cost, reliability, and scale as design inputs — not after-the-fact optimizations. Strong programs start with clear
            ownership, measurable outcomes, and simple systems engineers can operate confidently.
          </p>
        </section>
      </div>
    </main>
  );
}
