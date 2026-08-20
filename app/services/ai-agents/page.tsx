'use client'

import { useMemo, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Check, Instagram, Mail, MessageCircle, Plus } from 'lucide-react'
import { agents, agentCategories, agentIconTiles, contactLinks } from '@/lib/ai-agents'

function activeUsersFor(agentName: string) {
  const seed = Array.from(agentName).reduce((total, character) => total + character.charCodeAt(0), 0)
  return 20 + (seed % 31)
}

export default function AIAgentsPage() {
  const [category, setCategory] = useState<(typeof agentCategories)[number]>('All')
  const [expandedAgent, setExpandedAgent] = useState<string | null>(null)
  const previousScrollY = useRef(0)
  const filteredAgents = useMemo(() => category === 'All' ? agents : agents.filter((agent) => agent.category === category), [category])

  return (
    <main className="bg-background">
      <section className="relative isolate min-h-[620px] overflow-hidden bg-primary text-primary-foreground sm:min-h-[600px] md:min-h-[680px]">
        <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zF3sXAPZhq2o46Q5MA0tvfNQpKsV3W.png" alt="AI automation workflow with connected nodes and an automated email reply on a computer" fill priority sizes="100vw" className="object-cover object-top" />
        <div className="absolute inset-0 bg-primary/35" />
        <div className="relative mx-auto flex min-h-[620px] max-w-7xl flex-col justify-start gap-5 px-6 py-20 sm:min-h-[600px] md:min-h-[680px] md:px-10 md:py-28 lg:px-16">
          <p className="flex w-fit items-center gap-2 rounded-md bg-primary/35 px-3 py-1 text-sm font-semibold uppercase tracking-[0.18em] text-accent drop-shadow-sm"><span aria-hidden="true">✣</span> Remote Minds Solutions</p>
          <h1 className="max-w-4xl text-balance text-4xl font-bold tracking-tight text-primary-foreground drop-shadow-[0_2px_3px_rgba(0,0,0,0.55)] sm:text-5xl md:text-7xl">AI Agents &amp; Automation</h1>
          <p className="max-w-2xl text-pretty text-lg leading-8 text-primary-foreground drop-shadow-[0_2px_3px_rgba(0,0,0,0.55)] md:text-2xl">Smarter workflows. Instant responses. Happier customers.</p>
          <div className="flex flex-wrap gap-3 pt-3"><a href={contactLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-secondary px-5 py-3 font-semibold text-secondary-foreground transition-colors hover:bg-secondary/90"><MessageCircle className="size-5" /> WhatsApp</a><a href="https://www.instagram.com/remote_minds?igsh=MWxpMWhhNmlxOHprbQ==" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 font-semibold text-accent-foreground transition-colors hover:bg-accent/90"><Instagram className="size-5" /> Instagram</a></div>
        </div>
      </section>
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 py-16 sm:px-6 lg:px-8">
        <header className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl"><p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">Meet your AI team</p><p className="text-pretty text-lg leading-7 text-muted-foreground">Hire an agent to work your inbox, calendar, reviews, content, and pipeline — no code required.</p></div>
          <p className="font-mono text-sm text-muted-foreground">{filteredAgents.length} agents available</p>
        </header>

        <div className="flex flex-wrap gap-3" aria-label="Filter agents by category">
          {agentCategories.map((item) => (
            <button key={item} type="button" onClick={() => setCategory(item)} aria-pressed={category === item} className={`rounded-full border px-5 py-2 text-sm font-semibold transition-colors ${category === item ? 'border-primary/30 bg-primary/10 text-primary' : 'border-border bg-card text-foreground hover:border-primary/40 hover:text-primary'}`}>
              {item}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredAgents.map((agent) => {
            const Icon = agent.icon
            return <article key={agent.name} className="group flex min-h-[270px] flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
              <div className="flex items-start justify-between gap-4">
                <div className={`flex size-11 items-center justify-center rounded-xl ${agentIconTiles[agent.category]}`}><Icon aria-hidden="true" /></div>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600"><span className="size-2 rounded-full bg-emerald-500" />{activeUsersFor(agent.name)} active users</span>
              </div>
              <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{agent.category}</p>
              <h2 className="mt-1 line-clamp-2 text-xl font-bold text-foreground">{agent.name}</h2>
              <p className="mt-2 flex-1 leading-6 text-muted-foreground">{agent.blurb}</p>
              {expandedAgent === agent.name ? (
                <div className="mt-5 border-t border-border pt-4">
                  <div className="flex flex-col gap-4 text-sm leading-6">
                    <div><h3 className="font-bold text-foreground">Overview</h3><p className="text-muted-foreground">{agent.blurb} This agent keeps the work moving while your team stays focused on higher-value decisions.</p></div>
                    <div><h3 className="font-bold text-foreground">How It Works</h3><ul className="mt-1 flex flex-col gap-1 text-muted-foreground">{agent.workflow.map((step) => <li key={step} className="flex gap-2"><Check className="mt-1 size-4 shrink-0 text-primary" />{step}</li>)}</ul></div>
                    <div><h3 className="font-bold text-foreground">Key Benefits</h3><ul className="mt-1 flex flex-col gap-1 text-muted-foreground">{agent.benefits.map((benefit) => <li key={benefit} className="flex gap-2"><Check className="mt-1 size-4 shrink-0 text-primary" />{benefit}</li>)}</ul></div>
                    <div><h3 className="font-bold text-foreground">Perfect For</h3><p className="text-muted-foreground">{agent.perfectFor}</p></div>
                    <div className="flex flex-wrap gap-3 border-t border-border pt-4">
                      <a href={contactLinks.email} className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-card px-4 py-3 font-semibold text-primary transition-colors hover:bg-muted"><Mail className="size-4" />Email</a>
                      <a href={contactLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-4 py-3 font-semibold text-accent-foreground transition-colors hover:bg-accent/90"><MessageCircle className="size-4" />WhatsApp</a>
                    </div>
                    <button type="button" onClick={() => {
                        setExpandedAgent(null)
                        requestAnimationFrame(() => window.scrollTo({ top: previousScrollY.current, behavior: 'auto' }))
                      }} className="flex items-center justify-between border-t border-border pt-4 text-left font-semibold text-primary">
                      View less <ArrowUpRight aria-hidden="true" className="rotate-[-90deg]" />
                    </button>
                  </div>
                </div>
              ) : (
                <button type="button" onClick={() => {
                  previousScrollY.current = window.scrollY
                  setExpandedAgent(agent.name)
                }} className="mt-5 flex w-full items-center justify-between border-t border-border pt-4 text-left text-sm font-semibold text-primary">
                  View profile <ArrowUpRight aria-hidden="true" />
                </button>
              )}
            </article>
          })}
          <div className="flex min-h-[270px] flex-col items-center justify-center rounded-2xl border border-dashed border-primary/30 bg-muted/30 p-6 text-center transition-colors hover:bg-primary/5">
            <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary"><Plus aria-hidden="true" /></span>
            <h2 className="mt-4 text-xl font-bold text-foreground">Request an agent</h2>
            <p className="mt-2 text-muted-foreground">Tell us the task you want automated.</p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <a href={contactLinks.email} className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-muted"><Mail className="size-4" />Email</a>
              <a href={contactLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"><MessageCircle className="size-4" />WhatsApp</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
