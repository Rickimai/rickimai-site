import Link from "next/link";

interface Crumb {
  label: string;
  href?: string; // last item can be undefined (current page)
}

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav className="text-sm text-neutral-500">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;

          return (
            <li key={i} className="flex items-center gap-2">
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="hover:text-neutral-900 transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-neutral-900 font-medium">
                  {item.label}
                </span>
              )}

              {!isLast && <span className="text-neutral-300">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
