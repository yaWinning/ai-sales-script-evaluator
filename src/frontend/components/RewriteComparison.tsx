import { type RewriteResult } from '@/lib/api'
import { ArrowLeft, Copy, Check } from 'lucide-react'
import { useState } from 'react'

interface Props {
  original: string
  rewrite: RewriteResult
  onBack: () => void
}

export default function RewriteComparison({ original, rewrite, onBack }: Props) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(rewrite.rewritten_script)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Results
        </button>

        {/* Header */}
        <div className="mb-8">
          <h1 className="font-display text-4xl font-bold mb-2">AI-Powered Rewrite</h1>
          <div className="flex items-center gap-4 text-muted-foreground">
            <span>Expected improvement: <strong className="text-green-600 dark:text-green-400">+{rewrite.expected_score_improvement} points</strong></span>
            <span>•</span>
            <span>Word count: <strong>{rewrite.word_count_change > 0 ? '+' : ''}{rewrite.word_count_change} words</strong></span>
          </div>
        </div>

        {/* Three-Column Comparison */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Original */}
          <div className="card-shadow bg-card border border-border rounded-lg p-6">
            <h2 className="font-display text-lg font-semibold mb-4 text-muted-foreground">Original Script</h2>
            <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm whitespace-pre-wrap">
              {original}
            </div>
          </div>

          {/* Rewrite */}
          <div className="card-shadow bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-display text-lg font-semibold">AI Rewrite</h2>
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-2 px-3 py-1.5 text-sm bg-primary text-primary-foreground rounded hover:opacity-90 transition-opacity"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    Copy
                  </>
                )}
              </button>
            </div>
            <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900 rounded-lg p-4 font-mono text-sm whitespace-pre-wrap">
              {rewrite.rewritten_script}
            </div>
          </div>

          {/* Changes Explanation */}
          <div className="card-shadow bg-card border border-border rounded-lg p-6">
            <h2 className="font-display text-lg font-semibold mb-4">What Changed</h2>
            <div className="space-y-4">
              {rewrite.changes.map((change, idx) => (
                <div key={idx} className="border-l-2 border-primary pl-4">
                  <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                    {change.dimension_improved.replace('_', ' ')}
                  </div>
                  <div className="text-sm mb-2">
                    <div className="text-red-600 dark:text-red-400 line-through mb-1">
                      "{change.original}"
                    </div>
                    <div className="text-green-600 dark:text-green-400">
                      "{change.rewritten}"
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">{change.rationale}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="card-shadow bg-card border border-border rounded-lg p-8 text-center">
          <h2 className="font-display text-2xl font-bold mb-4">What's next?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Use this rewrite as-is, or customize it to match your style. Test it in real conversations and track your results.
          </p>
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              <Copy className="w-5 h-5" />
              Copy Rewrite
            </button>
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              View Full Analysis
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}