import Head from 'next/head'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { PenLine, Sparkles, TrendingUp } from 'lucide-react'

export default function Home() {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>AI Sales Script Evaluator</title>
      </Head>
      
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
                Transform Your Sales Scripts
                <br />
                <span className="text-muted-foreground">with AI-Powered Feedback</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                Get instant, actionable insights on your sales scripts. Improve clarity, strengthen your value proposition, and boost conversion rates.
              </p>
              <button
                onClick={() => router.push('/evaluate')}
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                <Sparkles className="w-5 h-5" />
                Evaluate Your Script
              </button>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-shadow bg-card p-8 rounded-lg border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <PenLine className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">Instant Evaluation</h3>
              <p className="text-muted-foreground">
                Submit your script and receive detailed feedback in seconds. No waiting, no guesswork.
              </p>
            </div>

            <div className="card-shadow bg-card p-8 rounded-lg border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">AI-Powered Rewrites</h3>
              <p className="text-muted-foreground">
                Get done-for-you script improvements that maintain your authentic voice while boosting effectiveness.
              </p>
            </div>

            <div className="card-shadow bg-card p-8 rounded-lg border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">Track Progress</h3>
              <p className="text-muted-foreground">
                Monitor your improvement over time with clear metrics and actionable insights.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="card-shadow bg-card border border-border rounded-lg p-12 text-center">
            <h2 className="font-display text-3xl font-bold mb-4">Ready to improve your scripts?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join sales professionals who are using AI to write better scripts and close more deals.
            </p>
            <button
              onClick={() => router.push('/evaluate')}
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Get Started Free
            </button>
          </div>
        </div>
      </div>
    </>
  )
}