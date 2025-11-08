# AI Models

## Evaluation Engine

### POC Model
- **Provider**: OpenAI GPT-4 Turbo
- **Endpoint**: Chat Completions API
- **Prompt Engineering**: Structured evaluation prompts

### Evaluation Criteria
1. **Value Proposition Clarity** (25%)
2. **Objection Handling** (20%)
3. **Tone & Authenticity** (20%)
4. **Conciseness & Clarity** (20%)
5. **CTA Strength** (15%)

### Prompt Template
```python
EVALUATION_PROMPT = """
You are an expert sales coach evaluating a sales script.
Analyze the following script across these dimensions:

1. Value Proposition Clarity (0-100)
2. Objection Handling Readiness (0-100)
3. Conversational Tone & Authenticity (0-100)
4. Conciseness & Clarity (0-100)
5. Call-to-Action Strength (0-100)

Script Type: {script_type}
Target Buyer: {buyer_persona}
Product/Service: {product_context}

Script Content:
{user_script}

Provide:
- Overall Score (weighted average)
- Individual dimension scores with justifications
- Top 3 strengths (specific excerpts)
- Top 3 improvement opportunities (actionable recommendations)
- Inline annotations (highlight strong/weak/critical elements)
"""
```

## Rewrite Engine

### Rewrite Prompt Template
```python
REWRITE_PROMPT = """
You are an expert sales script writer. Rewrite the following sales script
to improve its effectiveness while maintaining the user's authentic voice.

Original Script:
{user_script}

Evaluation Feedback:
{evaluation_results}

User Preferences:
- Tone: {tone_preference}
- Length: {length_preference}
- Industry: {industry}

Requirements:
- Address all identified weaknesses
- Preserve user's core message and personality
- Improve overall score by at least 15 points
- Maintain or reduce word count
- Highlight all changes made and explain rationale

Generate improved script with change annotations.
"""
```

## Future: Fine-Tuned Models
- **Base Model**: Llama 3 or Mistral
- **Training Data**: 500-1,000 labeled sales scripts
- **Fine-Tuning**: Supervised learning + RLHF
- **Deployment**: Self-hosted inference server