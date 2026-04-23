'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'

const AcademicWritingForm = () => {
  const [subject, setSubject] = useState('')
  const [deadline, setDeadline] = useState('')
  const [pages, setPages] = useState('')
  const [sources, setSources] = useState('')
  const [formatting, setFormatting] = useState('')
  const [description, setDescription] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const totalCost = pages ? parseInt(pages) * 8 : 0

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Simple check - if any field is empty, show alert
    if (!subject || !deadline || !pages || !formatting || !name || !email || !description) {
      alert('Please fill in all required fields')
      return
    }

    // Sources can be 0, so allow it
    if (sources === '') {
      alert('Please fill in all required fields')
      return
    }

    // Build message
    const msg = `*ACADEMIC WRITING REQUEST*

*Student Details:*
Name: ${name}
Email: ${email}

*Assignment Details:*
Subject: ${subject}
Deadline: ${deadline}
Pages: ${pages}
Sources: ${sources}
Format: ${formatting}
Cost: $${totalCost}

*Description:*
${description}`

    // Send to WhatsApp
    const encoded = encodeURIComponent(msg)
    window.open(`https://wa.me/18439657071?text=${encoded}`, '_blank')
  }

  return (
    <Card className="p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Subject */}
          <div className="space-y-2">
            <Label>Subject Type *</Label>
            <Select value={subject} onValueChange={setSubject}>
              <SelectTrigger>
                <SelectValue placeholder="Select subject" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Essay">Essay</SelectItem>
                <SelectItem value="Term Paper">Term Paper</SelectItem>
                <SelectItem value="Research Paper">Research Paper</SelectItem>
                <SelectItem value="Data Analysis">Data Analysis</SelectItem>
                <SelectItem value="Mathematics">Mathematics</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Deadline */}
          <div className="space-y-2">
            <Label>Deadline *</Label>
            <Input
              type="datetime-local"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
            />
          </div>

          {/* Pages */}
          <div className="space-y-2">
            <Label>Number of Pages *</Label>
            <Input
              type="number"
              min="1"
              value={pages}
              onChange={(e) => setPages(e.target.value)}
              placeholder="e.g., 5"
            />
            {pages && <p className="text-sm font-semibold text-primary">Cost: ${totalCost}</p>}
          </div>

          {/* Sources */}
          <div className="space-y-2">
            <Label>Cited Sources *</Label>
            <Input
              type="number"
              min="0"
              value={sources}
              onChange={(e) => setSources(e.target.value)}
              placeholder="e.g., 10"
            />
          </div>

          {/* Formatting */}
          <div className="space-y-2">
            <Label>Formatting Style *</Label>
            <Select value={formatting} onValueChange={setFormatting}>
              <SelectTrigger>
                <SelectValue placeholder="Select format" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="APA">APA</SelectItem>
                <SelectItem value="MLA">MLA</SelectItem>
                <SelectItem value="Chicago">Chicago</SelectItem>
                <SelectItem value="Harvard">Harvard</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Name */}
          <div className="space-y-2">
            <Label>Your Name *</Label>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label>Email Address *</Label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
            />
          </div>
        </div>

        {/* Description */}
        <div className="space-y-2">
          <Label>Assignment Description *</Label>
          <Textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe your assignment requirements..."
            className="min-h-32"
          />
        </div>

        {/* Submit */}
        <Button
          type="submit"
          className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
          size="lg"
        >
          Submit to WhatsApp
        </Button>

        {/* Info */}
        <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm text-blue-900">
            All submissions will be sent to WhatsApp for review.
          </p>
        </div>
      </form>
    </Card>
  )
}

export default AcademicWritingForm
