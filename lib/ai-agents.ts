import type { LucideIcon } from 'lucide-react'
import { BarChart3, FolderOpen, Linkedin, Mail, MapPin, MessageCircle, Package, Phone, Star, Video } from 'lucide-react'

export type AgentCategory = 'Sales' | 'Reputation' | 'Operations' | 'Productivity' | 'Content'

export type Agent = {
  name: string
  category: AgentCategory
  icon: LucideIcon
  blurb: string
  perfectFor: string
  benefits: string[]
  workflow: string[]
}

export const agentCategories = ['All', 'Sales', 'Reputation', 'Operations', 'Productivity', 'Content'] as const

export const agents: Agent[] = [
  { name: 'Voice Booking Agent', category: 'Operations', icon: Phone, blurb: 'Answers calls and books appointments straight into your calendar.', perfectFor: 'appointment-based businesses — medical, salons, home services, fitness studios, auto shops.', benefits: ['24/7 call answering', 'real-time calendar sync', 'automated confirmations/reminders', 'reduces no-shows and missed-call losses'], workflow: ['Answers incoming calls with your approved voice and scripts.', 'Checks availability and books appointments in real time.', 'Sends confirmations and reminders automatically.'] },
  { name: 'Listing Sync Agent', category: 'Operations', icon: MapPin, blurb: 'Keeps your name, address, and phone consistent across Yelp, Bing, Apple Maps, and 50+ directories.', perfectFor: 'multi-location businesses, franchises, any business relying on local search.', benefits: ['prevents lost customers from outdated info', 'catches hijacked/incorrect listings fast', 'syncs hours/photos/categories everywhere at once'], workflow: ['Audits your listings across major directories.', 'Flags mismatched or incorrect business details.', 'Publishes approved updates across every location.'] },
  { name: 'Review Response Agent', category: 'Reputation', icon: Star, blurb: 'Drafts and posts replies to new Google and Yelp reviews within minutes.', perfectFor: 'restaurants, retail, healthcare practices, any business with a public review presence.', benefits: ['24/7 monitoring', 'sentiment-aware AI replies', 'escalates negative reviews to a human', 'full audit log of every response'], workflow: ['Monitors new reviews across your connected platforms.', 'Drafts a tone-appropriate response based on sentiment.', 'Publishes approved replies and escalates sensitive feedback.'] },
  { name: 'Feedback Survey Agent', category: 'Reputation', icon: MessageCircle, blurb: 'Sends post-service surveys and routes unhappy customers away from public reviews.', perfectFor: 'e-commerce, SaaS, hospitality, healthcare, any customer-facing business.', benefits: ['protects public star rating', 'routes detractors to private support', 'boosts review volume from happy customers', 'flags at-risk customers early'], workflow: ['Sends a survey after a completed service or purchase.', 'Routes feedback based on sentiment and score.', 'Invites happy customers to share public feedback.'] },
  { name: 'LinkedIn Prospecting Agent', category: 'Sales', icon: Linkedin, blurb: 'Finds leads matching your ideal customer profile and sends the first personalized message.', perfectFor: 'B2B SaaS, agencies, consultants, recruiting/staffing, enterprise sales teams.', benefits: ['personalized outreach at scale', 'respects LinkedIn activity limits', 'books meetings directly on your calendar', 'logs everything to your CRM'], workflow: ['Finds prospects that match your ideal customer profile.', 'Personalizes an initial message using approved context.', 'Logs activity and routes replies to your sales process.'] },
  { name: 'Sales Follow-Up Agent', category: 'Sales', icon: BarChart3, blurb: 'Sends scheduled, personalized follow-ups to leads sitting in your CRM.', perfectFor: "sales teams and agencies using Salesforce who don't want leads going cold.", benefits: ['no lead falls through the cracks', 'tracks opens/clicks/replies', 'escalates hot leads to a rep automatically'], workflow: ['Identifies leads that need a follow-up.', 'Sends scheduled messages with personalized context.', 'Alerts a rep when a lead engages or needs attention.'] },
  { name: 'Email Response Agent', category: 'Productivity', icon: Mail, blurb: 'Drafts context-aware replies to incoming emails, ready for your review.', perfectFor: 'support teams, consultants, agencies, anyone managing high email volume.', benefits: ['cuts response time from hours to minutes', 'references past customer interactions', 'keeps a human-in-the-loop approval step'], workflow: ['Reads incoming messages and relevant conversation context.', 'Drafts a clear reply in your preferred voice.', 'Leaves the final send decision with your team.'] },
  { name: 'Email Classification Agent', category: 'Productivity', icon: FolderOpen, blurb: 'Sorts and labels your inbox automatically as emails arrive.', perfectFor: 'executives, support teams, anyone drowning in inbox clutter.', benefits: ['instant categorization (priority, finance, promo, etc.)', 'works with Gmail or Outlook', 'live in under 2 minutes'], workflow: ['Classifies messages as they arrive.', 'Applies labels and priority rules automatically.', 'Keeps your inbox organized without manual sorting.'] },
  { name: 'Product Description Agent', category: 'Content', icon: Package, blurb: 'Writes SEO-optimized product descriptions for your Shopify catalog.', perfectFor: 'Shopify stores, e-commerce brands, dropshippers.', benefits: ['generates hundreds of descriptions in minutes', 'keyword-optimized for search', 'multiple variations for A/B testing'], workflow: ['Reads product details and your brand voice.', 'Creates optimized descriptions at scale.', 'Prepares variations for review and testing.'] },
  { name: 'Video Content Agent', category: 'Content', icon: Video, blurb: 'Turns long-form video into short clips and publishes them to YouTube.', perfectFor: 'podcasters, coaches, educators, social media teams repurposing long content.', benefits: ['automatic highlight detection', 'captions/branding added automatically', 'hands-off publishing pipeline'], workflow: ['Finds high-value moments in long-form footage.', 'Creates short clips with captions and branding.', 'Prepares and publishes content to your channel.'] },
]

export const agentIconTiles = { Operations: 'bg-emerald-500/10 text-emerald-600', Reputation: 'bg-orange-500/10 text-orange-600', Sales: 'bg-indigo-500/10 text-indigo-600', Productivity: 'bg-sky-500/10 text-sky-600', Content: 'bg-rose-500/10 text-rose-600' } as const

export const contactLinks = { email: 'mailto:info@remotemindssolutions.com', whatsapp: 'https://wa.me/18439657071' }

