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
  const [formData, setFormData] = useState({
    subject: '',
    deadline: '',
    pages: '',
    sources: '',
    formatting: '',
    description: '',
    name: '',
    email: '',
  })
  const [files, setFiles] = useState<File[]>([])
  const [loading, setLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const totalCost = formData.pages ? parseInt(formData.pages) * COST_PER_PAGE : 0

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate required fields
    if (!formData.subject || !formData.deadline || !formData.pages || !formData.sources || !formData.formatting || !formData.name || !formData.email || !formData.description) {
      alert('Please fill in all required fields')
      return
    }
    
    setLoading(true)

    try {
      const formDataToSend = new FormData()
      
      // Add text fields
      formDataToSend.append('subject', formData.subject)
      formDataToSend.append('deadline', formData.deadline)
      formDataToSend.append('pages', formData.pages)
      formDataToSend.append('sources', formData.sources)
      formDataToSend.append('formatting', formData.formatting)
      formDataToSend.append('description', formData.description)
      formDataToSend.append('name', formData.name)
      formDataToSend.append('email', formData.email)
      formDataToSend.append('totalCost', totalCost.toString())

      // Add files
      files.forEach((file) => {
        formDataToSend.append('files', file)
      })

      const response = await fetch('/api/academic-writing', {
        method: 'POST',
        body: formDataToSend,
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          subject: '',
          deadline: '',
          pages: '',
          sources: '',
          formatting: '',
          description: '',
          name: '',
          email: '',
        })
        setFiles([])
        setTimeout(() => setSubmitStatus('idle'), 5000)
      } else {
        setSubmitStatus('error')
        setTimeout(() => setSubmitStatus('idle'), 5000)
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Status Messages */}
        {submitStatus === 'success' && (
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
            Your request has been submitted successfully! We&apos;ll review it and contact you shortly.
          </div>
        )}
        {submitStatus === 'error' && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
            There was an error submitting your request. Please try again or contact us directly.
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Subject */}
          <div className="space-y-2">
            <Label htmlFor="subject">Subject *</Label>
            <Select value={formData.subject} onValueChange={(value) => handleSelectChange('subject', value)}>
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
              name="deadline"
              value={formData.deadline}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Pages */}
          <div className="space-y-2">
            <Label htmlFor="pages">Number of Pages *</Label>
            <Input
              type="number"
              name="pages"
              min="1"
              value={formData.pages}
              onChange={handleInputChange}
              placeholder="Enter number of pages"
              required
            />
            {formData.pages && (
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
              name="sources"
              min="0"
              value={formData.sources}
              onChange={handleInputChange}
              placeholder="Enter number of sources"
              required
            />
          </div>

          {/* Formatting Style */}
          <div className="space-y-2">
            <Label htmlFor="formatting">Formatting Style *</Label>
            <Select value={formData.formatting} onValueChange={(value) => handleSelectChange('formatting', value)}>
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
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Provide details about your assignment..."
            className="min-h-32"
            required
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
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your name"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your@email.com"
                required
              />
            </div>
          </div>
        </div>

        {/* Cost Summary */}
        {formData.pages && (
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
          disabled={loading}
          className="w-full bg-accent hover:bg-accent/90 text-accent-foreground transition-colors"
          size="lg"
        >
          {loading ? 'Submitting...' : 'Submit Request'}
        </Button>

        <p className="text-xs text-foreground/60 text-center">
          All submissions will be sent to houston@remotemindssolutions.com for review
        </p>
      </form>
    </Card>
  )
}

export default AcademicWritingForm
