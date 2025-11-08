# AI Sales Script Evaluator

> Transform sales scripts into high-converting conversations through AI-powered evaluation and coaching.

[![Status](https://img.shields.io/badge/status-POC-blue)]() [![License](https://img.shields.io/badge/license-MIT-green)]()

## Overview

An AI-powered platform that provides instant, actionable feedback on sales scripts and generates optimized rewrites—helping individual reps and small teams improve conversion rates through better messaging.

**Core Hypothesis:** Sales professionals adopt AI-generated improvements when the barrier to implementation is lower than manual revision, resulting in measurable conversion gains.

## Quick Start

```bash
# Clone the repository
git clone https://github.com/yaWinning/ai-sales-script-evaluator.git

# Install dependencies (coming soon)
cd ai-sales-script-evaluator
npm install

# Run development server (coming soon)
npm run dev
```

## Key Features

### 🎯 Script Evaluation
- **5 Core Criteria**: Value proposition clarity, objection handling, tone, conciseness, CTA strength
- **Instant Feedback**: <5 second evaluation with inline highlights
- **Benchmarking**: Compare against peer averages and track improvement

### ✨ AI-Powered Rewrites
- **Voice Preservation**: Maintains your authentic style while improving effectiveness
- **Guaranteed Improvement**: ≥15 point score increase on every rewrite
- **Interactive Comparison**: Side-by-side view with change explanations

### 📈 Progress Tracking
- **Score Trajectory**: Visualize improvement over time
- **Adoption Metrics**: Track which rewrites drive real results
- **Contextual Learning**: Micro-lessons triggered by evaluation results

## Product Goals (POC)

| Metric | Target |
|--------|--------|
| Active Users | 100 within 60 days |
| User Satisfaction | NPS > 40 |
| Script Iterations | 3+ per user/week |
| Conversion Improvement | 25%+ of users |
| Retention (30 days) | 50%+ |

## Architecture

```
┌─────────────────┐
│   Frontend      │  React/Next.js, Tailwind CSS
│   (Web App)     │  Rich text editor, comparison views
└────────┬────────┘
         │
┌────────▼────────┐
│   Backend       │  Python/FastAPI, Serverless
│   (API Layer)   │  Auth, script mgmt, analytics
└────────┬────────┘
         │
┌────────▼────────┐
│   AI Engine     │  GPT-4 Turbo (POC)
│   (Evaluation)  │  Fine-tuned LLM (future)
└─────────────────┘
```

See [docs/architecture.md](docs/architecture.md) for detailed technical specs.

## Documentation

- [📋 Product Requirements](docs/PRD.md) - Full PRD with evaluation criteria, user stories, success metrics
- [🏗️ Technical Architecture](docs/architecture.md) - AI models, backend/frontend stack, security
- [🚀 Onboarding Flow](docs/onboarding-flow.md) - UX principles and user journey
- [🗺️ Roadmap](docs/roadmap.md) - POC → short-term → long-term vision

## Contributing

We're in POC phase and focused on validating core hypotheses. See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines. Use the [POC Validation issue template](.github/ISSUE_TEMPLATE/poc-validation.md) to propose experiments or share learnings.

## Roadmap

### POC (0-3 months)
- ✅ Core evaluation engine
- ✅ AI rewrite generation
- ⏳ User dashboard & progress tracking
- ⏳ Feedback collection & iteration

### Short-Term (3-6 months)
- Advanced evaluation criteria
- User-defined templates
- Manager dashboards

### Long-Term (12+ months)
- CRM/sales tool integrations
- Multi-modal evaluation (text + speech)
- Predictive analytics & real-time coaching

## License

MIT License - see [LICENSE](LICENSE) for details.

## Contact

Built by [Shalin Amin](https://github.com/yaWinning) at [okWOW](https://okwow.ai)

---

**Status**: 🚧 Active POC Development | **Last Updated**: November 2025
