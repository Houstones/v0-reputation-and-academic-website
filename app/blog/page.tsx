import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, CalendarDays } from 'lucide-react'
import { blogPosts } from '@/lib/blog'

export const metadata = { title: 'Blog | Remote Minds Solutions', description: 'Ideas, research, and practical insights on AI, automation, and digital growth.' }

export default function BlogPage() {
  return <main className="bg-background">
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8"><div className="grid gap-10 lg:grid-cols-2">{blogPosts.map((post) => <article key={post.slug} className="group overflow-hidden border border-border bg-card"><Link href={`/blog/${post.slug}`}><div className="relative aspect-[16/9] overflow-hidden"><Image src={post.cover} alt="Agentic AI adoption workflow graphic" fill sizes="(max-width: 1024px) 100vw, 60vw" className="object-cover transition-transform duration-500 group-hover:scale-105" /></div><div className="flex flex-col gap-5 p-6 md:p-8"><p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">{post.category}</p><h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">{post.title}</h2><p className="text-lg leading-8 text-muted-foreground">{post.excerpt}</p><div className="flex items-center justify-between border-t border-border pt-5 text-sm text-muted-foreground"><span className="inline-flex items-center gap-2"><CalendarDays className="size-4" />{post.date}</span><span className="inline-flex items-center gap-2 font-semibold text-primary">Read story <ArrowUpRight className="size-4" /></span></div></div></Link></article>)}</div></section>
  </main>
}
