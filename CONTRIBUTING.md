# Contributing to AI Sales Script Evaluator

We're in POC phase and focused on validating core hypotheses. Contributions that help us learn faster are especially valuable.

## How to Contribute

### 1. Report Issues
Use our issue templates:
- **POC Validation**: Share hypotheses or learnings
- **Bug Report**: Report unexpected behavior
- **Feature Request**: Suggest enhancements

### 2. Submit Pull Requests

**Before submitting**:
- Check existing issues/PRs to avoid duplicates
- Discuss major changes in an issue first
- Follow code style guidelines

**PR Process**:
1. Fork the repo
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

**PR Guidelines**:
- Clear title and description
- Reference related issues
- Include tests if applicable
- Update documentation

### 3. Code Style

**Frontend (React/TypeScript)**:
- Use TypeScript for type safety
- Follow Airbnb style guide
- Use Prettier for formatting
- Write meaningful component names

**Backend (Python)**:
- Follow PEP 8
- Use type hints
- Write docstrings for functions
- Keep functions focused and testable

### 4. Testing

**Frontend**:
- Unit tests with Jest + React Testing Library
- E2E tests with Playwright (critical paths)

**Backend**:
- Unit tests with pytest
- Integration tests for API endpoints
- Mock external services (OpenAI API)

### 5. Documentation

- Update README if adding features
- Add inline comments for complex logic
- Update `/docs` for architectural changes

## Development Setup

### Frontend
```bash
cd src/frontend
npm install
npm run dev
```

### Backend
```bash
cd src/backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload
```

## Questions?

Open an issue or reach out to [@yaWinning](https://github.com/yaWinning).

---

Thank you for contributing! 🚀