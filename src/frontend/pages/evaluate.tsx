import Head from 'next/head'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useMutation } from '@tanstack/react-query'
import { api, type ScriptSubmission, type EvaluationResult } from '@/lib/api'
import { Loader2, ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/router'
import EvaluationResults from '@/components/EvaluationResults'

const scriptSchema = z.object({
  content: z.string().min(50, 'Script must be at least 50 words').max(5000, 'Script too long'),
  scriptType: z.string().min(1, 'Please select a script type'),
  buyerPersona: z.string().optional(),
  productContext: z.string().optional(),
})

type ScriptFormData = z.infer<typeof scriptSchema>

export default function Evaluate() {
  const router = useRouter()
  const [evaluation, setEvaluation] = useState<EvaluationResult | null>(null)
  
  const { register, handleSubmit, formState: { errors }, watch } = useForm<ScriptFormData>({
    resolver: zodResolver(scriptSchema),
    defaultValues: {
      scriptType: 'general',
    }
  })

  const content = watch('content')
  const wordCount = content ? content.trim().split(/\s+/).length : 0

  const evaluateMutation = useMutation({
    mutationFn: (data: ScriptSubmission) => api.evaluateScript(data),
    onSuccess: (data) => {
      setEvaluation(data)
    },
  })

  const onSubmit = (data: ScriptFormData) => {
    evaluateMutation.mutate(data)
  }

  if (evaluation) {
    return <EvaluationResults evaluation={evaluation} originalScript={content} onBack={() => setEvaluation(null)} />
  }

  return (
    <>
      <Head>
        <title>Evaluate Script | AI Sales Script Evaluator</title>
      </Head>
      
      <div className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <button
            onClick={() => router.push('/')}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>

          <div className="mb-8">
            <h1 className="font-display text-4xl font-bold mb-2">Evaluate Your Script</h1>
            <p className="text-muted-foreground">
              Paste your sales script below and get instant AI-powered feedback
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Script Content */}
            <div>
              <label htmlFor="content" className="block text-sm font-medium mb-2">
                Your Script *
              </label>
              <textarea
                id="content"
                {...register('content')}
                rows={12}
                className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring resize-none font-mono text-sm"
                placeholder="Paste your sales script here..."
              />
              <div className="flex justify-between items-center mt-2">
                <p className="text-sm text-muted-foreground">
                  {wordCount} words {wordCount < 50 && '(minimum 50 words)'}
                </p>
                {errors.content && (
                  <p className="text-sm text-destructive">{errors.content.message}</p>
                )}
              </div>
            </div>

            {/* Script Type */}
            <div>
              <label htmlFor="scriptType" className="block text-sm font-medium mb-2">
                Script Type *
              </label>
              <select
                id="scriptType"
                {...register('scriptType')}
                className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="general">General Sales Script</option>
                <option value="cold-call">Cold Call Opener</option>
                <option value="discovery">Discovery Call</option>
                <option value="demo">Demo Script</option>
                <option value="objection">Objection Handling</option>
                <option value="closing">Closing Script</option>
                <option value="email">Email Outreach</option>
                <option value="voicemail">Voicemail Script</option>
              </select>
            </div>

            {/* Optional Fields */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="buyerPersona" className="block text-sm font-medium mb-2">
                  Buyer Persona (Optional)
                </label>
                <input
                  id="buyerPersona"
                  type="text"
                  {...register('buyerPersona')}
                  className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="e.g., IT Director, VP Sales"
                />
              </div>

              <div>
                <label htmlFor="productContext" className="block text-sm font-medium mb-2">
                  Product/Service (Optional)
                </label>
                <input
                  id="productContext"
                  type="text"
                  {...register('productContext')}
                  className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="e.g., CRM software, Marketing automation"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={evaluateMutation.isPending}
              className="w-full py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {evaluateMutation.isPending ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Evaluating...
                </>
              ) : (
                'Evaluate Script'
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  )
}