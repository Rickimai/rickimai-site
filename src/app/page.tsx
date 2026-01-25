export default function Home() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <div className="mx-auto max-w-4xl px-6 py-20 space-y-24">

        {/* Hero */}
        <section className="space-y-6">
          <h1 className="text-5xl font-semibold tracking-tight">
            Rick Imai
          </h1>

          <p className="text-xl text-neutral-600">
            Staff Technical Program Manager | Director, Technical Program Management
          </p>

          <p className="text-lg text-neutral-700 max-w-2xl">
            Data Platforms • Security • FinOps
          </p>

          <p className="text-lg text-neutral-700 max-w-2xl">
            I lead large-scale data and security programs that handle petabytes to exabytes
            of telemetry, reduce infrastructure cost, and improve reliability for engineering
            and security teams.
          </p>

          <div className="flex gap-4 pt-4">
            <a href="/resumes/Rick_Imai_Resume_Infrastructure_Governance_FinOps.pdf" className="px-5 py-2 rounded-md border">
              Resume
            </a>
            <a href="https://linkedin.com" className="px-5 py-2 rounded-md border">
              LinkedIn
            </a>
          </div>
        </section>


        {/* Impact */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Impact</h2>

          <ul className="space-y-3 text-neutral-700 font-mono text-sm">
            <li>• Reduced detection latency from 144 minutes → 30 seconds</li>
            <li>• Delivered $10M+ annual storage savings through retention strategy</li>
            <li>• Governed $50M+ AWS fleets across ingestion, compute, and storage</li>
            <li>• Deleted 600+ PB of unused data through lifecycle automation</li>
            <li>• Scaled platforms supporting billions of daily events</li>
          </ul>
        </section>


        {/* Work */}
        <section>
          <h2 className="text-2xl font-semibold mb-8">Selected Work</h2>

          <div className="grid gap-6">
            <div className="border rounded-lg p-6 space-y-2">
              <h3 className="font-semibold">Basin Data Lake — FinOps & Retention</h3>
              <p className="text-neutral-600">
                Led cost governance and lifecycle strategy for an exabyte-scale security telemetry
                platform. Built showback, forecasting, and retention controls that bent the cost curve
                while improving query performance.
              </p>
            </div>

            <div className="border rounded-lg p-6 space-y-2">
              <h3 className="font-semibold">IOC Detection Platform</h3>
              <p className="text-neutral-600">
                Reduced investigation time from hours to seconds by redesigning data pipelines
                and query patterns, enabling near-real-time detection.
              </p>
            </div>

            <div className="border rounded-lg p-6 space-y-2">
              <h3 className="font-semibold">Experian Security Modernization</h3>
              <p className="text-neutral-600">
                Led post-breach transformation across detection, governance, and metrics with
                clear ownership and measurable maturity improvements.
              </p>
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
