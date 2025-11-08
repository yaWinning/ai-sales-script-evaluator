# Backend

## Tech Stack
- **Framework**: Python 3.11 + FastAPI
- **Database**: MongoDB (NoSQL)
- **AI**: OpenAI GPT-4 Turbo API
- **Auth**: OAuth2 + JWT
- **Deployment**: AWS Lambda (Serverless)

## Core Services
- `auth_service`: User authentication and session management
- `script_service`: CRUD operations for scripts
- `evaluation_service`: AI model orchestration
- `rewrite_service`: AI rewrite generation
- `analytics_service`: User behavior tracking
- `notification_service`: Email and in-app notifications

## Getting Started
```bash
cd src/backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload
```

## Structure
```
backend/
├── api/            # API routes
├── services/       # Business logic
├── models/         # Data models
├── utils/          # Helper functions
├── config/         # Configuration
└── tests/          # Unit and integration tests
```