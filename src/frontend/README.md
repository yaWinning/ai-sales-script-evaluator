# Frontend

## Tech Stack
- **Framework**: React 18 + Next.js 14
- **Styling**: Tailwind CSS + shadcn/ui components
- **State**: Zustand for global state
- **Forms**: React Hook Form + Zod validation
- **API**: TanStack Query (React Query)

## Key Components
- `ScriptEditor`: Rich text input with formatting
- `EvaluationView`: Split-screen feedback interface
- `ComparisonView`: Original vs. rewrite side-by-side
- `Dashboard`: Progress tracking and metrics
- `AnnotationLayer`: Inline highlights and tooltips

## Getting Started
```bash
cd src/frontend
npm install
npm run dev
```

## Structure
```
frontend/
├── components/     # Reusable UI components
├── pages/          # Next.js pages
├── hooks/          # Custom React hooks
├── lib/            # Utilities and helpers
├── styles/         # Global styles
└── public/         # Static assets
```