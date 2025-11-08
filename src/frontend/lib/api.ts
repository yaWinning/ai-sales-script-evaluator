// Mock API client for POC - replace with real backend calls later

export interface ScriptSubmission {
  content: string;
  scriptType: string;
  buyerPersona?: string;
  productContext?: string;
}

export interface EvaluationResult {
  overall_score: number;
  dimension_scores: {
    value_clarity: number;
    objection_handling: number;
    tone_authenticity: number;
    conciseness: number;
    cta_strength: number;
  };
  strengths: Array<{
    excerpt: string;
    explanation: string;
  }>;
  improvements: Array<{
    excerpt: string;
    issue: string;
    recommendation: string;
    example: string;
  }>;
  annotations: Array<{
    text: string;
    type: 'strength' | 'improvement' | 'critical';
    message: string;
  }>;
}

export interface RewriteResult {
  rewritten_script: string;
  changes: Array<{
    original: string;
    rewritten: string;
    rationale: string;
    dimension_improved: string;
  }>;
  expected_score_improvement: number;
  word_count_change: number;
}

// Mock data for demo
const mockEvaluation: EvaluationResult = {
  overall_score: 68,
  dimension_scores: {
    value_clarity: 55,
    objection_handling: 62,
    tone_authenticity: 78,
    conciseness: 72,
    cta_strength: 58,
  },
  strengths: [
    {
      excerpt: "I understand you're looking to improve your team's productivity",
      explanation: "Shows empathy and understanding of customer pain point",
    },
    {
      excerpt: "Our platform integrates seamlessly with your existing tools",
      explanation: "Addresses a common objection preemptively",
    },
    {
      excerpt: "Would you be open to a quick 15-minute demo?",
      explanation: "Low-friction ask that's specific and time-bound",
    },
  ],
  improvements: [
    {
      excerpt: "We have a lot of great features",
      issue: "Vague and feature-focused rather than benefit-focused",
      recommendation: "Quantify specific benefits with measurable outcomes",
      example: "Our customers save an average of 10 hours per week on manual tasks",
    },
    {
      excerpt: "Let me know if you're interested",
      issue: "Weak, passive call-to-action",
      recommendation: "Make the CTA specific and assertive",
      example: "Can we schedule a 15-minute demo for next Tuesday at 2pm?",
    },
    {
      excerpt: "We're the best solution in the market",
      issue: "Unsubstantiated claim that may trigger skepticism",
      recommendation: "Use social proof or specific differentiators",
      example: "Over 500 companies like yours have switched to our platform",
    },
  ],
  annotations: [
    {
      text: "I understand you're looking to improve your team's productivity",
      type: 'strength',
      message: "Strong empathetic opening",
    },
    {
      text: "We have a lot of great features",
      type: 'improvement',
      message: "Too vague - quantify benefits",
    },
    {
      text: "Let me know if you're interested",
      type: 'critical',
      message: "Weak CTA - be more specific",
    },
  ],
};

const mockRewrite: RewriteResult = {
  rewritten_script: `Hi [Name],

I noticed your team at [Company] is focused on improving productivity—a challenge many of our customers faced before switching to our platform.

Our solution helps teams like yours save an average of 10 hours per week by automating manual tasks and integrating seamlessly with tools you already use (Slack, Salesforce, etc.).

Over 500 companies have made the switch, and they're seeing measurable results within the first month.

Would you be open to a quick 15-minute demo next Tuesday at 2pm to see how this could work for your team?

Looking forward to connecting,
[Your Name]`,
  changes: [
    {
      original: "We have a lot of great features",
      rewritten: "Our solution helps teams like yours save an average of 10 hours per week",
      rationale: "Replaced vague feature claim with quantified benefit",
      dimension_improved: "value_clarity",
    },
    {
      original: "Let me know if you're interested",
      rewritten: "Would you be open to a quick 15-minute demo next Tuesday at 2pm?",
      rationale: "Made CTA specific, time-bound, and low-friction",
      dimension_improved: "cta_strength",
    },
    {
      original: "We're the best solution in the market",
      rewritten: "Over 500 companies have made the switch",
      rationale: "Replaced unsubstantiated claim with social proof",
      dimension_improved: "objection_handling",
    },
  ],
  expected_score_improvement: 19,
  word_count_change: -12,
};

// Simulated API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const api = {
  async evaluateScript(submission: ScriptSubmission): Promise<EvaluationResult> {
    await delay(2000); // Simulate API call
    return mockEvaluation;
  },

  async generateRewrite(scriptId: string): Promise<RewriteResult> {
    await delay(3000); // Simulate API call
    return mockRewrite;
  },
};