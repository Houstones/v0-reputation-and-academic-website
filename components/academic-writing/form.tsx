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

const COST_PER_PAGE = 8

const AcademicWritingForm = () => {
  const [subject, setSubject] = useState('')
  const [deadline, setDeadline] = useState('')
  const [pages, setPages] = useState('')
  const [sources, setSources] = useState('')
  const [formatting, setFormatting] = useState('')
  const [description, setDescription] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [files, setFiles] = useState<File[]>([])

  const totalCost = pages ? parseInt(pages) * COST_PER_PAGE : 0

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate all fields - check for empty strings, not falsy values
    if (
      subject === '' || 
      deadline === '' || 
      pages === '' || 
      sources === '' || 
      formatting === '' || 
      name === '' || 
      email === '' || 
      description === ''
    ) {
      alert('Please fill in all required fields')
      return
    }
    
    // Create formatted WhatsApp message
    const whatsappMessage = `*NEW ACADEMIC WRITING REQUEST*

*Student Information:*
Name: ${name}
Email: ${email}

*Assignment Details:*
Subject: ${subject}
Deadline: ${deadline}
Pages: ${pages}
Cited Sources: ${sources}
Formatting: ${formatting}
Estimated Cost: $${totalCost}

*Description:*
${description}

Files: ${files.length > 0 ? files.map(f => f.name).join(', ') : 'None'}

---
Sent via Remote Minds Academic Writing Form`

    // Encode the message for WhatsApp
    const encodedMessage = encodeURIComponent(whatsappMessage)
    
    // Create WhatsApp link (using the number: 18439657071)
    const whatsappLink = `https://wa.me/18439657071?text=${encodedMessage}`
    
    // Open WhatsApp
    window.open(whatsappLink, '_blank')
  }

  return (
    <Card className="p-8">
      <form onSubmit={handleSubmit} noValidate className="space-y-6">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Subject */}
          <div className="space-y-2">
            <Label htmlFor="subject">Subject *</Label>
            <Select value={subject} onValueChange={setSubject}>
              <SelectTrigger>
                <SelectValue placeholder="Select subject" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="essay">Essay</SelectItem>
                <SelectItem value="term-paper">Term Paper</SelectItem>
                <SelectItem value="research-paper">Research Paper</SelectItem>
                <SelectItem value="data-analysis">Data Analysis</SelectItem>
                <SelectItem value="maths">Maths</SelectItem>
                <SelectItem value="discussion-post">Discussion Post</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Deadline */}
          <div className="space-y-2">
            <Label htmlFor="deadline">Deadline *</Label>
            <Input
              type="datetime-local"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
            />
          </div>

          {/* Pages */}
          <div className="space-y-2">
            <Label htmlFor="pages">Number of Pages *</Label>
            <Input
              type="number"
              min="1"
              value={pages}
              onChange={(e) => setPages(e.target.value)}
              placeholder="Enter number of pages"
            />
            {pages && (
              <p className="text-sm text-primary font-semibold">
                Estimated Cost: ${totalCost}
              </p>
            )}
          </div>

          {/* Sources */}
          <div className="space-y-2">
            <Label htmlFor="sources">Number of Cited Sources *</Label>
            <Input
              type="number"
              min="0"
              value={sources}
              onChange={(e) => setSources(e.target.value)}
              placeholder="Enter number of sources"
            />
          </div>

          {/* Formatting Style */}
          <div className="space-y-2">
            <Label htmlFor="formatting">Formatting Style *</Label>
            <Select value={formatting} onValueChange={setFormatting}>
              <SelectTrigger>
                <SelectValue placeholder="Select formatting style" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="apa">APA</SelectItem>
                <SelectItem value="mla">MLA</SelectItem>
                <SelectItem value="harvard">Harvard</SelectItem>
                <SelectItem value="chicago">Chicago</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Description */}
        <div className="space-y-2">
          <Label htmlFor="description">Assignment Description/Requirements *</Label>
          <Textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Provide details about your assignment..."
            className="min-h-32"
          />
        </div>

        {/* File Upload */}
        <div className="space-y-2">
          <Label htmlFor="files">Attach Files (Optional)</Label>
          <Input
            type="file"
            multiple
            onChange={handleFileChange}
            className="cursor-pointer"
          />
          {files.length > 0 && (
            <div className="mt-2">
              <p className="text-sm font-medium">Files attached:</p>
              <ul className="mt-1 space-y-1">
                {files.map((file, index) => (
                  <li key={index} className="text-sm text-foreground/70">
                    {file.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Personal Info */}
        <div className="border-t pt-6">
          <h3 className="font-semibold mb-4">Your Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
              />
            </div>
          </div>
        </div>

        {/* Cost Summary */}
        {pages && (
          <div className="bg-primary/10 p-4 rounded-lg">
            <div className="flex justify-between items-center">
              <span className="font-semibold">Total Estimated Cost:</span>
              <span className="text-2xl font-bold text-primary">${totalCost}</span>
            </div>
            <p className="text-sm text-foreground/70 mt-2">
              ($8 per page)
            </p>
          </div>
        )}

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full bg-accent hover:bg-accent/90 text-accent-foreground transition-colors"
          size="lg"
        >
          Submit Request
        </Button>

        {/* Disclaimer */}
        <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm text-blue-900">
            ℹ️ All submissions will be sent to WhatsApp for review. You'll be redirected to WhatsApp Web to complete sending your request.
          </p>
        </div>

        <p className="text-xs text-foreground/60 text-center">
          All submissions will be sent to houston@remotemindssolutions.com for review
        </p>
      </form>
    </Card>
  )
}

export default AcademicWritingForm
