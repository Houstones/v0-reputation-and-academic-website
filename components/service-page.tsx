import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, MessageCircle, Instagram, Sparkles, Users, Workflow } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { ServiceContent } from '@/lib/service-content'

export default function ServicePage({ service }: { service: ServiceContent }) {
  return (
    <main>
      <section className="relative isolate overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0 -z-10"><Image src={service.image} alt="" fill priority className="object-cover opacity-75" sizes="100vw" /><div className="absolute inset-0 bg-primary/45" /></div>
        <div className="mx-auto flex min-h-[420px] max-w-7xl flex-col justify-center gap-6 px-4 py-20 sm:px-6 lg:px-8">
          <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-accent"><Sparkles className="size-4" /> Remote Minds Solutions</p>
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-balance sm:text-5xl md:text-6xl">{service.title}</h1>
          <p className="max-w-2xl text-lg leading-8 text-primary-foreground/85">{service.tagline}</p>
          <div className="flex flex-wrap gap-3 pt-2"><Button asChild size="lg" variant="secondary"><a href="https://wa.me/18439657071" target="_blank" rel="noopener noreferrer"><MessageCircle data-icon="inline-start" /> WhatsApp</a></Button><Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90"><a href="https://www.instagram.com/remote_minds?igsh=MWxpMWhhNmlxOHprbQ==" target="_blank" rel="noopener noreferrer"><Instagram data-icon="inline-start" /> Instagram</a></Button></div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:py-24"><p className="text-xl leading-9 text-muted-foreground">{service.intro}</p></section>

      <ServiceList title="Our Expertise" items={service.expertise} icon={<CheckCircle2 className="size-5" />} />
      <ServiceList title="Services Include" items={service.includes} icon={<ArrowRight className="size-5" />} muted />

      <section className="bg-primary/5 px-4 py-16 sm:px-6 lg:py-24"><div className="mx-auto max-w-7xl"><div className="mb-10 flex items-center gap-3"><Workflow className="size-7 text-accent" /><h2 className="text-3xl font-bold sm:text-4xl">How It Works</h2></div><div className="grid gap-5 md:grid-cols-4">{service.steps.map(([title, text], index) => <div key={title} className="rounded-2xl border border-primary/10 bg-background p-6 shadow-sm"><div className="mb-5 flex size-10 items-center justify-center rounded-full bg-accent font-bold text-accent-foreground">{index + 1}</div><h3 className="mb-2 font-bold">{title}</h3><p className="text-sm leading-6 text-muted-foreground">{text}</p></div>)}</div></div></section>

      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1.2fr] lg:py-24"><div><div className="mb-5 flex items-center gap-3"><Users className="size-7 text-accent" /><h2 className="text-3xl font-bold">Who This Is For</h2></div><ul className="flex flex-col gap-4">{service.audience.map(item => <li key={item} className="flex gap-3 leading-7 text-muted-foreground"><CheckCircle2 className="mt-1 size-5 shrink-0 text-accent" />{item}</li>)}</ul></div><div className="rounded-2xl border border-dashed border-accent/50 bg-accent/5 p-7"><p className="mb-4 text-sm font-bold uppercase tracking-wider text-accent">Suggested options for review</p><p className="mb-5 text-sm leading-6 text-muted-foreground">These ideas are presented for Houston&apos;s approval and are not published commitments or new pricing.</p><ul className="flex flex-col gap-3">{service.suggestions.map(item => <li key={item} className="flex gap-3 font-medium"><ArrowRight className="mt-1 size-4 shrink-0 text-accent" />{item}</li>)}</ul></div></section>
    </main>
  )
}

function ServiceList({ title, items, icon, muted = false }: { title: string; items: [string, string][]; icon: React.ReactNode; muted?: boolean }) { return <section className={muted ? 'bg-primary/5 px-4 py-16 sm:px-6 lg:py-24' : 'px-4 py-16 sm:px-6 lg:py-24'}><div className="mx-auto max-w-7xl"><h2 className="mb-10 text-3xl font-bold sm:text-4xl">{title}</h2><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{items.map(([title, text]) => <div key={title} className="flex gap-4 rounded-2xl border border-border bg-background p-6 shadow-sm"><div className="shrink-0 text-accent">{icon}</div><div><h3 className="mb-2 font-bold">{title}</h3><p className="text-sm leading-6 text-muted-foreground">{text}</p></div></div>)}</div></div></section> }
