import type { ReactNode } from 'react'

const siteUrl = 'https://www.remotemindssolutions.com'
const logoUrl = `${siteUrl}/logo.png`

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${siteUrl}/#organization`,
  name: 'Remote Minds Solutions',
  url: siteUrl,
  logo: logoUrl,
  sameAs: ['https://www.instagram.com/remote_minds?igsh=MWxpMWhhNmlxOHprbQ=='],
}

export function StructuredData({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }): ReactNode {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }} />
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  return <StructuredData data={{ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: items.map((item, position) => ({ '@type': 'ListItem', position: position + 1, name: item.name, item: item.url })) }} />
}

export { siteUrl }
