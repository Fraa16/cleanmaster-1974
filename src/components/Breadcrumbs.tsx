import Link from "next/link";
import { JsonLd } from "@/components/ui";
import { absoluteUrl } from "@/lib/site";

export interface Crumb {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const all: Crumb[] = [{ label: "Startseite", href: "/" }, ...items];
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      ...(c.href ? { item: absoluteUrl(c.href) } : {}),
    })),
  };

  return (
    <nav aria-label="Brotkrumen" className="mb-6">
      <JsonLd data={schema} />
      <ol className="flex flex-wrap items-center gap-1.5 text-xs font-medium text-navy-400">
        {all.map((c, i) => (
          <li key={c.label} className="flex items-center gap-1.5">
            {i > 0 && <span aria-hidden="true">/</span>}
            {c.href && i < all.length - 1 ? (
              <Link
                href={c.href}
                className="transition-colors hover:text-sky-600"
              >
                {c.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-navy-600">
                {c.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
