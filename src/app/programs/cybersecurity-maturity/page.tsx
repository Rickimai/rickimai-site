// src/app/programs/experian-cybersecurity-maturity/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/breadcrumbs";

export const metadata: Metadata = {
  title: "Cybersecurity Maturity | Rick Imai",
  description:
    "A durability-first cybersecurity maturity program that measures whether controls stick: coverage, metrics, automation, and process — with roll-up scoring from objective to domain to enterprise.",
};

/**
 * Board-level framing:
 * - Do not over-index on “coverage.” Coverage is necessary but not sufficient.
 * - A capability is not “mature” unless it is measurable, automated, and operationally embedded.
 * - Scores roll up Objective → Domain → Enterprise. Weak dimensions cap maturity.
 */
type Dim = "Coverage" | "Metrics" | "Tech / Automation" | "Process";
type Kind = "Enterprise" | "Domain" | "Objective";

type ScoreRow = {
  id: string;
  parentId?: string;
  kind: Kind;
  label: string;
  dims: Record<Dim, number>; // 1..5
};

/* ---------- scoring helpers ---------- */

const avg = (nums: number[]) =>
  nums.length ? nums.reduce((a, b) => a + b, 0) / nums.length : 0;

const overallScore = (dims: Record<Dim, number>) =>
  avg(Object.values(dims));

/* ---------- table helpers ---------- */

const indentClass = (kind: Kind) => {
  switch (kind) {
    case "Enterprise":
      return "pl-2";
    case "Domain":
      return "pl-8";
    case "Objective":
      return "pl-14";
    default:
      return "";
  }
};


function Pill({
  children,
  tone = "neutral",
}: {
  children: React.ReactNode;
  tone?: "neutral" | "low" | "med" | "high";
}) {
  const base =
    "inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium";
  const toneCls =
    tone === "low"
      ? "border-red-200 bg-red-50 text-red-800"
      : tone === "med"
      ? "border-amber-200 bg-amber-50 text-amber-800"
      : tone === "high"
      ? "border-emerald-200 bg-emerald-50 text-emerald-800"
      : "border-accent bg-white text-neutral-700";
  return <span className={`${base} ${toneCls}`} style={{ borderColor: 'var(--accent)' }}>{children}</span>;
}

function Card({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="h-full rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-neutral-900">{title}</h2>
        {subtitle ? (
          <p className="mt-1 text-sm text-neutral-600">{subtitle}</p>
        ) : null}
      </div>
      {children}
    </section>
  );
}

function ScoreTable({
  caption,
  rows,
}: {
  caption: string;
  rows: ScoreRow[];
}) {
  const dims: Dim[] = ["Coverage", "Metrics", "Tech / Automation", "Process"];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-[860px] w-full border-collapse rounded-xl">
        <caption className="mb-3 text-left text-sm font-medium text-neutral-700">
          {caption}
        </caption>
        <thead>
          <tr className="border-b border-neutral-200 bg-neutral-50">
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-neutral-600">
              Level
            </th>
            {dims.map((d) => (
              <th
                key={d}
                className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-neutral-600"
              >
                {d}
              </th>
            ))}
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-neutral-600">
              Maturity
            </th>
          </tr>
        </thead>
        <tbody>
        {rows.map((r) => (
            <tr key={r.id} className="border-b border-neutral-100">
            {/* 👇 THIS is where your snippet goes */}
            <td className={`px-4 py-3 text-sm ${indentClass(r.kind)}`}>
                <span
                className={
                    r.kind === "Enterprise"
                    ? "font-semibold text-neutral-900"
                    : "text-neutral-900"
                }
                >
                {r.label}
                </span>
                {r.kind !== "Enterprise" ? (
                <span className="ml-2 text-xs text-neutral-500">{r.kind}</span>
                ) : null}
            </td>

            {/* dimension columns */}
            {dims.map((d) => (
                <td key={d} className="px-4 py-3 text-sm text-neutral-700">
                {r.dims[d].toFixed(1)}
                </td>
            ))}

            {/* overall */}
            <td className="px-4 py-3 text-sm font-medium text-neutral-900">
                {overallScore(r.dims).toFixed(2)}
            </td>
            </tr>
        ))}
        </tbody>
      </table>
      
      <p className="mt-3 text-xs text-neutral-500">
        Roll-up rule: maturity is capped by weak dimensions — strong coverage
        cannot compensate for missing metrics, automation, or process.
      </p>
    </div>
  );
}

function ExecutiveRollupDiagram() {
  /**
   * Single executive visual: Objective → Domain → Enterprise
   * plus 4 dimensions required for maturity.
   */
    const domainRects = [
  { x: 380, y: 44,  w: 260, h: 78 },  // IAM
  { x: 380, y: 124, w: 260, h: 78 },  // Data Protection
  { x: 380, y: 196, w: 260, h: 78 },  // Threat Detection
];

    const enterpriseRect = { x: 700, y: 106, w: 250, h: 88 };

    const cx = (r: { x: number; w: number }) => r.x + r.w / 2;
    const cy = (r: { y: number; h: number }) => r.y + r.h / 2;

    const objectiveRects = [
  { x: 40, y: 60,  w: 280, h: 52 },  // RBAC
  { x: 40, y: 122, w: 280, h: 52 },  // Secrets
  { x: 40, y: 184, w: 280, h: 52 },  // Privileged Access
];

// map each objective to a domain index (0=IAM, 1=Data Protection, 2=Threat Detection)
const objectiveToDomain = [0, 0, 0]; // all three feed IAM (matches your picture)

  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-sm font-semibold text-neutral-900">
            Maturity Roll-Up (Illustrative)
          </h3>
          <p className="mt-1 text-xs text-neutral-600">
            Objective scores roll up to Domain, then Enterprise. Weak dimensions
            cap maturity.
          </p>
        </div>
        <div className="hidden sm:flex gap-2">
          <Pill>Coverage</Pill>
          <Pill>Metrics</Pill>
          <Pill>Tech / Automation</Pill>
          <Pill>Process</Pill>
        </div>
      </div>

      {/* Responsive SVG */}
      <div className="mt-4 overflow-x-hidden">
        <svg
          viewBox="0 0 980 300"
          className="min-w-[980px] w-full h-auto"
          role="img"
          aria-label="Executive diagram showing maturity roll-up from objectives to domains to enterprise"
        >
        {/* Definitions */}
        <defs>
            <marker
                id="arrow"
                viewBox="0 0 8 8"
                refX="8"
                refY="4"
                markerWidth="8"
                markerHeight="8"
                markerUnits="userSpaceOnUse"
                orient="auto"
            >
                <path d="M 0 0 L 8 4 L 0 8 z" fill="#111827" opacity="0.55" />
            </marker>
            </defs>
          {/* Columns headers */}
          <text
            x="70"
            y="28"
            fontSize="14"
            fontWeight="600"
            fill="#111827"
          >
            Objectives (Sub-domains)
          </text>
          <text
            x="418"
            y="28"
            fontSize="14"
            fontWeight="600"
            fill="#111827"
          >
            Domains
          </text>
          <text
            x="740"
            y="28"
            fontSize="14"
            fontWeight="600"
            fill="#111827"
          >
            Enterprise
          </text>

          {/* Objective boxes */}
          {[
            { y: 60, t: "RBAC", s: "Access is role-based and enforced" },
            { y: 122, t: "Secrets", s: "Secrets stored, rotated, audited" },
            {
              y: 184,
              t: "Privileged Access",
              s: "JIT/JEA, approvals, session control",
            },
          ].map((b) => (
            <g key={b.t}>
              <rect
                x="40"
                y={b.y}
                width="280"
                height="52"
                rx="14"
                fill="#ffffff"
                stroke="#e5e7eb"
              />
              <text
                x="56"
                y={b.y + 22}
                fontSize="14"
                fontWeight="600"
                fill="#111827"
              >
                {b.t}
              </text>
              <text x="56" y={b.y + 40} fontSize="12" fill="#6b7280">
                {b.s}
              </text>
            </g>
          ))}

          {/* Domain boxes */}
            {[
            { t: "IAM", s: "Identity & access controls" },
            { t: "Data Protection", s: "Protect data at rest / in motion" },
            { t: "Threat Detection", s: "Detect, triage, respond" },
            ].map((b, i) => {
            const r = domainRects[i];
            return (
                <g key={b.t}>
                <rect
                    x={r.x}
                    y={r.y}
                    width={r.w}
                    height={r.h}
                    rx="16"
                    fill="#ffffff"
                    stroke="#e5e7eb"
                />

                {/* title */}
                <text x={r.x + 16} y={r.y + 22} fontSize="14" fontWeight="600" fill="#111827">
                    {b.t}
                </text>

                {/* subtitle */}
                <text x={r.x + 16} y={r.y + 42} fontSize="12" fill="#6b7280">
                    {b.s}
                </text>

                {/* wrapped line using tspans */}
                <text x={r.x + 16} y={r.y + 58} fontSize="11" fill="#6b7280">
                    <tspan x={r.x + 16} dy="0">Maturity constrained by</tspan>
                    <tspan x={r.x + 16} dy="14">weakest dimension</tspan>
                </text>
                </g>
            );
            })}

          {/* Enterprise box */}
          <g>
            <rect
              x="700"
              y="106"
              width="250"
              height="88"
              rx="18"
              fill="#ffffff"
              stroke="#e5e7eb"
            />
            <text
              x="716"
              y="136"
              fontSize="14"
              fontWeight="600"
              fill="#111827"
            >
              Enterprise Security Maturity
            </text>
            <text x="716" y="156" fontSize="12" fill="#6b7280">
              Portfolio view across domains
            </text>
            <text x="716" y="176" fontSize="12" fill="#6b7280">
              Constrained by weakest critical domain
            </text>
          </g>
          
        {/* Arrows: Domains -> Enterprise (computed) */}
            {/* Arrows: Objectives -> Domains (computed) */}
{objectiveRects.map((o, i) => {
  const d = domainRects[objectiveToDomain[i]];

  const x1 = o.x + o.w; // objective right edge
  const y1 = cy(o);     // objective center

  const x2 = d.x - 6;   // stop just before domain border
  const y2 = cy(d);     // domain center (or tweak if you want a fan-in)

  const c1x = x1 + 22;
  const c1y = y1;
  const c2x = x2 - 22;
  const c2y = y2;

  return (
    <path
      key={`o2d-${i}`}
      d={`M ${x1} ${y1} C ${c1x} ${c1y}, ${c2x} ${c2y}, ${x2} ${y2}`}
      stroke="#9ca3af"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
      markerEnd="url(#arrow)"
      opacity={0.55 - i * 0.1}
    />
  );
})}

            {domainRects.map((d, i) => {
            const x1 = d.x + d.w;            // domain right edge
            const y1 = cy(d);                // domain vertical center

            const x2 = enterpriseRect.x - 4; // stop just before enterprise border
            const y2 = cy(enterpriseRect);   // enterprise vertical center

            const c1x = x1 + 18;
            const c1y = y1;
            const c2x = x2 - 18;
            const c2y = y2;
            
            return (
                <path
                key={i}
                d={`M ${x1} ${y1} C ${c1x} ${c1y}, ${c2x} ${c2y}, ${x2} ${y2}`}
                stroke="#9ca3af"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
                markerEnd="url(#arrow)"
                opacity={0.55 - i * 0.1}
                />
            );
            })}

            </svg>
        </div>

      <div className="mt-4 grid gap-2 sm:hidden">
        <div className="flex flex-wrap gap-2">
          <Pill>Coverage</Pill>
          <Pill>Metrics</Pill>
          <Pill>Tech / Automation</Pill>
          <Pill>Process</Pill>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  const rows: ScoreRow[] = [
    {
      id: "enterprise",
      kind: "Enterprise",
      label: "Enterprise Security Maturity",
      dims: { Coverage: 4, Metrics: 3, "Tech / Automation": 3, Process: 2 },
    },
    {
      id: "iam",
      parentId: "enterprise",
      kind: "Domain",
      label: "IAM",
      dims: { Coverage: 4, Metrics: 3, "Tech / Automation": 3, Process: 2 },
    },
    {
      id: "rbac",
      parentId: "iam",
      kind: "Objective",
      label: "RBAC",
      dims: { Coverage: 5, Metrics: 4, "Tech / Automation": 4, Process: 3 },
    },
    {
      id: "secrets",
      parentId: "iam",
      kind: "Objective",
      label: "Secrets",
      dims: { Coverage: 4, Metrics: 3, "Tech / Automation": 3, Process: 2 },
    },
    {
      id: "priv-access",
      parentId: "iam",
      kind: "Objective",
      label: "Privileged Access",
      dims: { Coverage: 3, Metrics: 2, "Tech / Automation": 2, Process: 2 },
    },
    {
      id: "data-protection",
      parentId: "enterprise",
      kind: "Domain",
      label: "Data Protection",
      dims: { Coverage: 4, Metrics: 3, "Tech / Automation": 3, Process: 3 },
    },
    {
      id: "threat-detection",
      parentId: "enterprise",
      kind: "Domain",
      label: "Threat Detection",
      dims: { Coverage: 3, Metrics: 2, "Tech / Automation": 2, Process: 2 },
    },
  ];

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Programs", href: "/programs" },
          { label: "Cybersecurity Maturity", href: "/programs/experian-cybersecurity-maturity" },
        ]}
      />
      {/* Header */}
      <header className="mt-6">
        <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 relative pb-2">
          Cybersecurity Maturity Program
        </h1>
        <p className="mt-3 text-base text-neutral-700">
          An enterprise maturity initiative built to ensure security capabilities <span className="font-medium text-neutral-900">stick</span> — not just ship. Coverage was treated as table stakes. Maturity required measurable outcomes, automation, and operational embedment.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          <Pill>Coverage</Pill>
          <Pill>Metrics</Pill>
          <Pill>Tech / Automation</Pill>
          <Pill>Process</Pill>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/programs"
            className="rounded-xl border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-800 shadow-sm hover:bg-neutral-50"
          >
            Back to Programs
          </Link>
        </div>
      </header>
      {/* Executive diagram */}
      <div className="mt-10" id="rollup">
        <ExecutiveRollupDiagram />
      </div>
      {/* Narrative cards */}
      <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:items-stretch">
        <Card
          title="Program Summary"
          subtitle="Durability-first maturity model used to assess, prioritize, and sustain security capabilities across the enterprise."
        >
          <p className="text-sm text-neutral-700 leading-6">
            The program established a consistent maturity baseline and a repeatable measurement system. Success was defined by whether a capability was deployed <em>and</em> whether it remained effective over time — through org changes, platform growth, and shifting priorities.
          </p>
        </Card>
        <Card
          title="Operating Principle"
          subtitle="Coverage is necessary. Maturity is earned."
        >
          <ul className="grid gap-2 text-sm text-neutral-700 leading-6">
            <li>
              <span className="font-medium text-neutral-900">Coverage</span> confirms the control exists where required.
            </li>
            <li>
              <span className="font-medium text-neutral-900">Metrics</span> prove it works and trends in the right direction.
            </li>
            <li>
              <span className="font-medium text-neutral-900">Tech / Automation</span> ensures it scales without linear headcount.
            </li>
            <li>
              <span className="font-medium text-neutral-900">Process</span> embeds ownership, workflows, and exception handling.
            </li>
          </ul>
          <p className="mt-4 text-sm text-neutral-700 leading-6">
            A capability was not considered mature unless it demonstrated strength across all four dimensions. Weak dimensions capped maturity to avoid “green dashboards” driven by partial implementation.
          </p>
        </Card>
      </div>
      {/* Tables */}
      <div className="mt-10">
        <Card
          title="Maturity Scorecard (Illustrative)"
          subtitle="Single hierarchical view. Each row is scored 1 to 5 per dimension; overall is the average."
        >
          <ScoreTable caption="Enterprise → Domains → Objectives" rows={rows} />
          {/* Scoring legend */}
          <div className="mt-4 rounded-xl border border-neutral-200 bg-neutral-50 p-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm font-medium text-neutral-900">Scoring scale (1–5)</p>
            </div>
            <div className="mt-3 grid gap-2 text-sm text-neutral-700">
              <div className="flex gap-3">
                <span className="w-10 font-semibold text-neutral-900">1</span>
                <span>Ad hoc — inconsistent, manual, dependent on individuals.</span>
              </div>
              <div className="flex gap-3">
                <span className="w-10 font-semibold text-neutral-900">2</span>
                <span>Developing — exists in pockets; partial coverage or uneven execution.</span>
              </div>
              <div className="flex gap-3">
                <span className="w-10 font-semibold text-neutral-900">3</span>
                <span>Repeatable — defined approach, measured at least quarterly, used operationally.</span>
              </div>
              <div className="flex gap-3">
                <span className="w-10 font-semibold text-neutral-900">4</span>
                <span>Managed — automated where possible, continuous monitoring, clear ownership.</span>
              </div>
              <div className="flex gap-3">
                <span className="w-10 font-semibold text-neutral-900">5</span>
                <span>Optimized — sustained outcomes, self-service + guardrails, continuously improved.</span>
              </div>
            </div>
            <p className="mt-3 text-xs text-neutral-600">
              Apply the scale independently per dimension (Coverage, Metrics, Tech/Automation, Process).
            </p>
          </div>
        </Card>
      </div>
      {/* Close */}
      <footer className="mt-12 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-neutral-900">
          What This Enables
        </h2>
        <ul className="mt-3 grid gap-2 text-sm text-neutral-700 leading-6">
          <li>
            A defensible maturity story that leadership can trust — rooted in evidence, not tooling.
          </li>
          <li>
            Funding decisions anchored to measurable gaps (metrics, automation, and process), not generalized “coverage.”
          </li>
          <li>
            Repeatable mechanisms that survive org churn and reduce reliance on heroics.
          </li>
        </ul>
      </footer>
    </main>
  );
}

