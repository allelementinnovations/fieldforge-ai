# FieldForge AI

**A practical problem-solving and invention workflow for the people who build, repair, grow, and maintain the real world.**

FieldForge AI helps farmers, ranchers, tradespeople, mechanics, contractors, inventors, makers, and hobbyists turn real-world problems into structured GPT-5.6 briefs, practical solution paths, prototype plans, testing steps, safety boundaries, and business next actions.

## Why it exists

Hands-on workers often discover problems that outsiders never see. They understand the job, equipment, environment, and pain point, but may not have access to engineers, designers, manufacturers, business mentors, or a clear development process. FieldForge helps preserve that knowledge and move it forward.

## What the prototype does

1. Captures the user's trade, problem, equipment, attempts, budget, experience, and constraints.
2. Converts the information into a structured FieldForge prompt for GPT-5.6.
3. Lets the user copy the prompt into GPT-5.6 using existing ChatGPT or Codex access—no API key required.
4. Lets the user paste the AI report back into the app.
5. Saves projects locally in the browser and downloads a complete text report.
6. Includes four demonstration cases: pool service, farming, mechanics, and ranch/ATV work.

## Zero-cost architecture

This competition prototype uses a **prompt-handoff architecture**:

- Frontend: HTML, CSS, and vanilla JavaScript
- Storage: browser `localStorage`
- AI reasoning layer: GPT-5.6 through the user's existing ChatGPT or Codex access
- API cost: $0
- Database cost: $0
- Hosting: compatible with free GitHub Pages

This is a deliberate accessibility choice. It allows a user with no API budget to benefit from GPT-5.6 without storing a secret key in the browser or paying per request.

## Run locally

Open `index.html` in a modern browser. No installation is required.

## Test the prototype

1. Open `index.html`.
2. Choose one of the four example problems or enter your own.
3. Press **Create GPT-5.6 field brief**.
4. Press **Copy GPT-5.6 prompt**.
5. Paste it into GPT-5.6 in ChatGPT or Codex.
6. Paste the response into **Paste the GPT-5.6 report here**.
7. Save or download the project.

The **Show sample output** button demonstrates the workflow when live GPT-5.6 access is not available. The sample is clearly labeled and is not represented as a live model response.

## Safety boundaries

FieldForge is a planning, organization, and expert-routing tool. It does not replace licensed tradespeople, engineers, mechanics, veterinarians, electricians, attorneys, medical professionals, manufacturers' manuals, building codes, or local regulations. The generated prompt tells GPT-5.6 to identify stop-work conditions and escalate high-risk work.

## How Codex and GPT-5.6 were used

> **Complete this section after the required Codex build session.**

- **Codex:** Used to review the initial concept, implement and refine the mobile-first interface, improve accessibility, add the structured prompt generator, add local project storage and report download, test the browser workflow, and document the project.
- **GPT-5.6:** Used as the structured reasoning layer for troubleshooting questions, solution paths, prototype planning, safety boundaries, expert routing, testing criteria, and business options.
- **Founder decisions:** Justin Crawford defined the target users, real-world workflow, safety boundaries, zero-cost requirement, and the need to account for transportation, budget, tools, physical capacity, and field conditions.

### Primary Codex session ID

`PASTE-/feedback-SESSION-ID-HERE`

## Build Week track

**Work & Productivity**

## Founder

Justin Crawford  
Founder, All Element Innovations LLC
