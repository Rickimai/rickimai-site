export default function Home() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <div className="mx-auto max-w-4xl px-6 py-20 space-y-24">

        {/* Hero */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <h1 className="text-5xl font-semibold tracking-tight">
              Rick Imai
            </h1>

            <div className="flex gap-4">
              <a
                href="/resumes/Rick_Imai_Resume_Infrastructure_Governance_FinOps.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-md bg-neutral-900 text-white hover:bg-neutral-800"
              >
                Download Resume (PDF)
              </a>
              <a
                href="https://linkedin.com/in/rick-imai"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-md border"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="mt-1 inline-flex items-center gap-3">
            <p className="text-xl text-neutral-600">
              Staff Technical Program Manager | Director, Technical Program Management
            </p>
          </div>

          <div className="mt-4 inline-flex items-center rounded-md bg-neutral-50 px-3 py-1 text-sm text-neutral-800">
            Currently: Open to Staff/Senior TPM and Director TPM roles in infrastructure governance, security platforms, and FinOps
          </div>

          <p className="text-lg text-neutral-700 max-w-2xl">
            Data Platforms • Security • FinOps
          </p>

          <p className="text-lg text-neutral-700 max-w-2xl">
            I lead large-scale data and security programs that handle petabytes to exabytes
            of telemetry, reduce infrastructure cost, and improve reliability for engineering
            and security teams.
          </p>
        </section>


        {/* What I&apos;m Looking For */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">What I&apos;m Looking For</h2>
          <div className="text-neutral-700 max-w-3xl">
            <p>
              I&apos;m exploring Staff TPM and Director TPM opportunities in:
            </p>
            <ul className="mt-3 list-disc pl-5 space-y-2">
              <li>Infrastructure governance & FinOps optimization</li>
              <li>Security data platforms & compliance programs</li>
              <li>Portfolio/program leadership roles</li>
            </ul>

            <p className="mt-3">
              Ideal fit: Organizations building large-scale data platforms, managing complex cloud
              infrastructure, or establishing FinOps governance at enterprise scale.
            </p>
          </div>
        </section>

        


        {/* Work */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Selected Work & Impact</h2>
          <p className="text-sm text-neutral-500 mb-6">Representative programs across security, finance, and infrastructure, each paired with measurable outcomes.</p>

          <div className="grid gap-6">
            <div className="rounded-lg border p-6 hover:shadow-sm transition-shadow">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                <div className="sm:max-w-[72%]">
                  <h3 className="text-lg font-semibold">Basin Data Lake — FinOps &amp; Retention</h3>
                  <p className="mt-2 text-neutral-600">
                    Led cost governance and lifecycle strategy for an exabyte-scale security telemetry platform. Built showback, forecasting, and retention controls that bent the cost curve while improving query performance. Partnered with engineering, finance, and security leadership to establish unit-economics tracking and automated controls across distributed systems.
                  </p>
                </div>

                <div className="shrink-0 sm:w-64 text-left sm:text-right">
                  <div className="text-3xl font-semibold tracking-tight text-primary-600 transition-transform transition-colors duration-200 hover:scale-[1.03] hover:text-primary-500">$10M+ / yr</div>
                  <div className="mt-2 text-sm text-neutral-500">Cost savings</div>
                </div>
              </div>
            </div>

            <div className="rounded-lg border p-6 hover:shadow-sm transition-shadow">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                <div className="sm:max-w-[72%]">
                  <h3 className="text-lg font-semibold">IOC Detection Platform</h3>
                  <p className="mt-2 text-neutral-600">
                    Reduced investigation time from hours to seconds by redesigning data pipelines
                    and query patterns, enabling near-real-time detection. Consolidated 24 redundant
                    queries into a single automated workflow, reducing operational overhead and
                    improving detection coverage.
                  </p>
                </div>

                <div className="shrink-0 sm:w-64 text-left sm:text-right">
                  <div className="text-3xl font-semibold tracking-tight text-primary-600 transition-transform transition-colors duration-200 hover:scale-[1.03] hover:text-primary-500">144m → 30s</div>
                  <div className="mt-2 text-sm text-neutral-500">Detection latency</div>
                </div>
              </div>
            </div>

            <div className="rounded-lg border p-6 hover:shadow-sm transition-shadow">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                <div className="sm:max-w-[72%]">
                  <h3 className="text-lg font-semibold">FinTech Forecasting &amp; LLM-Driven Analytics</h3>
                  <p className="mt-2 text-neutral-600">
                    Built predictive analytics and automation for finance teams by integrating ML-driven KPI forecasting into planning and analysis workflows. Partnered with Finance and Engineering to replace manual analysis with automated, executive-ready outputs.
                  </p>
                </div>

                <div className="shrink-0 sm:w-64 text-left sm:text-right">
                  <div className="text-3xl font-semibold tracking-tight text-primary-600 transition-transform transition-colors duration-200 hover:scale-[1.03] hover:text-primary-500">3 weeks → 15 min</div>
                  <div className="mt-2 text-sm text-neutral-500">Financial analysis cycle</div>
                </div>
              </div>
            </div>

            <div className="rounded-lg border p-6 hover:shadow-sm transition-shadow">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                <div className="sm:max-w-[72%]">
                  <h3 className="text-lg font-semibold">AB P&amp;L Automation (MEC Acceleration)</h3>
                  <p className="mt-2 text-neutral-600">
                    Led end-to-end automation of Amazon Business P&L generation, replacing manual and semi-automated workflows with a scalable data pipeline. Improved data quality, reduced operational risk, and enabled faster executive reporting through standardized processing and controls.
                  </p>
                </div>

                <div className="shrink-0 sm:w-64 text-left sm:text-right">
                  <div className="text-3xl font-semibold tracking-tight text-primary-600 transition-transform transition-colors duration-200 hover:scale-[1.03] hover:text-primary-500">12 days → 7 days</div>
                  <div className="mt-2 text-sm text-neutral-500">Monthly close timeline</div>
                </div>
              </div>
            </div>

            <div className="rounded-lg border p-6 hover:shadow-sm transition-shadow">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                <div className="sm:max-w-[72%]">
                  <h3 className="text-lg font-semibold">Experian Security Modernization</h3>
                  <p className="mt-2 text-neutral-600">
                    Led post-breach transformation across detection, governance, and metrics with clear ownership and measurable maturity improvements.
                  </p>
                </div>

                <div className="shrink-0 sm:w-64 text-left sm:text-right">
                  <div className="text-3xl font-semibold tracking-tight text-primary-600 transition-transform transition-colors duration-200 hover:scale-[1.03] hover:text-primary-500">+0.76</div>
                  <div className="mt-2 text-sm text-neutral-500">Delivery maturity improvement (CMMI)</div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Philosophy */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">How I Work</h2>
          <p className="text-neutral-700 max-w-2xl">
            I treat cost, reliability, and scale as design inputs — not after-the-fact optimizations.
            Strong programs start with clear ownership, measurable outcomes, and simple systems
            engineers can operate confidently.
          </p>
        </section>

      </div>
    </main>
  )
}
