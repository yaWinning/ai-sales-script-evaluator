import { useState } from 'react'
import { type EvaluationResult } from '@/lib/api'
import { ArrowLeft, Sparkles, TrendingUp, TrendingDown, AlertCircle, CheckCircle2 } from 'lucide-react'
import { useMutation } from '@tantml:invoke>
import { api } from '@/lib/api'
import RewriteComparison from './RewriteComparison'

interface Props {
  evaluation: EvaluationResult
  originalScript: string
  onBack: () => void
}

export default function EvaluationResults({ evaluation, originalScript, onBack }: Props) {
  const [showRewrite, setShowRewrite] = useState(false)
  
  const rewriteMutation = useMutation({
    mutationFn: () => api.generateRewrite('mock-id'),
    onSuccess: () => {
      setShowRewrite(true)
    },
  })

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600 dark:text-green-400'
    if (score >= 60) return 'text-yellow-600 dark:text-yellow-400'
    return 'text-red-600 dark:text-red-400'
  }

  const getScoreLabel = (score: number) => {
    if (score >= 90) return 'Exceptional'
    if (score >= 75) return 'Strong'
    if (score >= 60) return 'Adequate'
    if (score >= 40) return 'Needs Work'
    return 'Critical Issues'
  }

  if (showRewrite && rewriteMutation.data) {
    return (
      <RewriteComparison
        original={originalScript}
        rewrite={rewriteMutation.data}
        onBack={() => setShowRewrite(false)}
      />
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Editor
        </button>

        {/* Overall Score */}
        <div className="card-shadow bg-card border border-border rounded-lg p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="font-display text-3xl font-bold mb-2">Evaluation Results</h1>
              <p className="text-muted-foreground">Your script has been analyzed across 5 key dimensions</p>
            </div>
            <div className="text-right">
              <div className={`text-5xl font-bold ${getScoreColor(evaluation.overall_score)}`}>
                {evaluation.overall_score}
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                {getScoreLabel(evaluation.overall_score)}
              </div>
            </div>
          </div>

          {/* Dimension Scores */}
          <div className="grid md:grid-cols-5 gap-4">
            {Object.entries(evaluation.dimension_scores).map(([key, score]) => (
              <div key={key} className="bg-muted/50 rounded-lg p-4">
                <div className="text-sm text-muted-foreground mb-2 capitalize">
                  {key.replace('_', ' ')}
                </div>
                <div className={`text-2xl font-bold ${getScoreColor(score)}`}>
                  {score}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Strengths */}
          <div className="card-shadow bg-card border border-border rounded-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
              <h2 className="font-display text-xl font-semibold">Top Strengths</h2>
            </div>
            <div className="space-y-4">
              {evaluation.strengths.map((strength, idx) => (
                <div key={idx} className="border-l-2 border-green-600 dark:border-green-400 pl-4">
                  <div className="text-sm font-mono bg-muted/50 p-2 rounded mb-2">
                    "{strength.excerpt}"
                  </div>
                  <p className="text-sm text-muted-foreground">{strength.explanation}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Improvements */}
          <div className="card-shadow bg-card border border-border rounded-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
              <h2 className="font-display text-xl font-semibold">Improvement Opportunities</h2>
            </div>
            <div className="space-y-4">
              {evaluation.improvements.map((improvement, idx) => (
                <div key={idx} className="border-l-2 border-yellow-600 dark:border-yellow-400 pl-4">
                  <div className="text-sm font-mono bg-muted/50 p-2 rounded mb-2">
                    "{improvement.excerpt}"
                  </div>
                  <p className="text-sm text-destructive mb-1">
                    <strong>Issue:</strong> {improvement.issue}
                  </p>
                  <p className="text-sm text-muted-foreground mb-1">
                    <strong>Recommendation:</strong> {improvement.recommendation}
                  </p>
                  <div className="text-sm font-mono bg-green-50 dark:bg-green-950/20 p-2 rounded mt-2">
                    <strong className="text-green-600 dark:text-green-400">Better:</strong> "{improvement.example}"
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Annotated Script */}
        <div className="card-shadow bg-card border border-border rounded-lg p-6 mb-8">
          <h2 className="font-display text-xl font-semibold mb-4">Annotated Script</h2>
          <div className="bg-muted/50 rounded-lg p-6 font-mono text-sm whitespace-pre-wrap">
            {evaluation.annotations.map((annotation, idx) => {
              const colorClass = 
                annotation.type === 'strength' ? 'bg-green-200 dark:bg-green-900/30' :
                annotation.type === 'improvement' ? 'bg-yellow-200 dark:bg-yellow-900/30' :
                'bg-red-200 dark:bg-red-900/30'
              
              return (
                <span key={idx}>
                  <span className={`${colorClass} px-1 rounded relative group cursor-help`}>
                    {annotation.text}
                    <span className="invisible group-hover:visible absolute bottom-full left-0 mb-2 w-64 p-2 bg-popover text-popover-foreground text-xs rounded shadow-lg z-10">
                      {annotation.message}
                    </span>
                  </span>
                  {' '}
                </span>
              )
            })}
          </div>
        </div>

        {/* CTA for Rewrite */}
        <div className="card-shadow bg-card border border-border rounded-lg p-8 text-center">
          <h2 className="font-display text-2xl font-bold mb-4">Ready to improve your script?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Get an AI-powered rewrite that addresses all identified weaknesses while maintaining your authentic voice.
          </p>
          <button
            onClick={() => rewriteMutation.mutate()}
            disabled={rewriteMutation.isPending}
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {rewriteMutation.isPending ? (
              <>
                <Sparkles className="w-5 h-5 animate-spin" />
                Generating Rewrite...
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5" />
                Generate AI Rewrite
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}