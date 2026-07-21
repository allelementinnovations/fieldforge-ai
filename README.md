# FieldForge AI

**A practical problem-solving and invention workflow for the people who build, repair, grow, and maintain the real world.**

FieldForge AI helps farmers, ranchers, tradespeople, mechanics, contractors, inventors, makers, and hobbyists turn field knowledge into a structured GPT-5.6 brief, competing solution paths, a safer prototype plan, measurable tests, and three realistic next actions.

## Try it

No installation, account, API key, or credentials are required.

- GitHub Pages prototype: `https://allelementinnovations.github.io/fieldforge-ai/`
- Local option: download this repository and open `index.html`, or run the local server described below.

## The problem

Hands-on workers often discover problems that outsiders never see. They know the equipment, environment, workarounds, and consequences, but may not have ready access to engineers, designers, manufacturers, business mentors, or a structured product-development process. A vague AI question can also produce generic or unsafe advice.

FieldForge preserves the worker's context and turns it into a disciplined reasoning brief that asks GPT-5.6 to expose uncertainty, compare alternatives, respect real constraints, define stop-work boundaries, and create a testable next step.

## What the prototype does

1. Captures the user's role, goal, equipment, attempted fixes, budget, experience, risk category, constraints, and real-world problem.
2. Validates that the problem is specific enough and requires additional safety context for elevated-risk work.
3. Creates a structured GPT-5.6 field brief on the user's device.
4. Lets the user intentionally copy the brief to GPT-5.6 in ChatGPT or Codex; FieldForge sends nothing automatically.
5. Accepts the resulting report and saves up to 25 named projects in browser-local storage.
6. Restores drafts, loads or deletes saved projects, and downloads a portable text report.
7. Includes four judge-ready examples covering pool service, farming, mechanical repair, and ranch/ATV work.

## How GPT-5.6 is meaningfully used

This is not a decorative chatbot wrapper. GPT-5.6 is the reasoning layer between raw field experience and an actionable plan. The generated brief asks the model to:

- distinguish known facts from assumptions and missing information;
- identify high-value diagnostic questions and likely root causes;
- compare repair, adaptation, and new-prototype paths for cost, effort, risk, and reversibility;
- choose a first path that fits the worker's budget, tools, experience, transportation, physical limits, and field conditions;
- define hazards, professional-review boundaries, and explicit stop-work triggers before build instructions;
- produce a one-variable-at-a-time field test with a hypothesis, measurements, and pass/fail criteria;
- test business reality without promising demand, patentability, or professional approval.

The prompt also tells GPT-5.6 not to invent specifications, ratings, certifications, prices, laws, or manufacturer requirements. This evidence-first structure follows the general principle that model output quality depends heavily on prompt quality and clear instructions. See OpenAI's [GPT-5.6 model guidance](https://developers.openai.com/api/docs/guides/latest-model) and [prompting guide](https://developers.openai.com/api/docs/guides/prompting).

## Architecture and privacy decision

FieldForge uses a deliberate **prompt-handoff architecture**:

- Interface: semantic HTML and responsive CSS
- Logic: dependency-free JavaScript with testable core functions
- Storage: browser `localStorage`, with guarded reads and writes
- AI reasoning: GPT-5.6 through the user's existing ChatGPT or Codex access
- Automated checks: Node's built-in test runner
- Hosting: static GitHub Pages-compatible files
- API, database, and hosting cost: $0 for this prototype

The app does **not** claim to call the OpenAI API. It does not collect a key, transmit field data, or hide the model interaction. The user reviews the generated brief and decides whether to copy it to GPT-5.6. This avoids putting an API secret in a public browser application and lets judges inspect the complete reasoning handoff.

## Safety boundaries

FieldForge is a planning, organization, and expert-routing tool—not professional approval. It cannot inspect a worksite or verify a physical design. The interface and generated brief both direct users to stop work and seek qualified help when conditions are dangerous, unfamiliar, code-controlled, or involve critical loads, electricity, pressure, chemicals, vehicles, health, animal welfare, or other high consequences.

Users must verify manuals, ratings, regulations, protective equipment, and professional requirements before physical testing. The safest prototype may be a sketch, measurement exercise, or nonfunctional mock-up.

## Run locally

### Fastest option

Open `index.html` in a modern browser. The main workflow works without a build step.

### Local server option

```bash
npm run serve
```

Then open `http://localhost:8000`.

No package installation is needed; the serve command uses Python 3.

## Run automated tests

Node.js 20 or newer is required.

```bash
npm test
```

The dependency-free test suite verifies validation, elevated-risk safety requirements, safety acknowledgement, prompt structure, input normalization, report warnings, and portable filenames.

## Three-minute judge test

1. Open the prototype on a phone-sized window or desktop browser.
2. Choose **Pool filter tool** under the examples.
3. Notice that FieldForge loads realistic field data but does not pre-check the safety confirmation.
4. Try creating the brief before confirming the boundary; verify the accessible error summary appears.
5. Check the safety confirmation and create the brief.
6. Review the generated GPT-5.6 prompt, especially **Known Facts, Assumptions, and Unknowns**, **Three Solution Paths**, **Safety Gate**, and **Field Test Card**.
7. Copy the brief into GPT-5.6, or press **Show sample report** if model access is unavailable.
8. Paste or edit the report, save the project, refresh the page, and verify the draft returns.
9. Open **Saved projects**, load the project, and download the text report.
10. Run `npm test` to verify the core prompt and validation logic.

## What Codex changed and accelerated

During the primary Build Week development thread, Codex inspected the original one-file prototype, tested its logic, and completed a substantial product and engineering pass:

- refactored the monolithic page into semantic `index.html`, responsive `styles.css`, and testable `app.js` files;
- replaced one-field validation with structured validation for problem detail, elevated-risk constraints, and explicit safety acknowledgement;
- expanded the GPT-5.6 brief from a general checklist into an evidence-first decision workflow with competing solution paths, uncertainty labels, stop-work triggers, and measurable tests;
- added a clear privacy explanation so judges can distinguish the prompt handoff from a direct API integration;
- upgraded browser storage from a single overwritten record to draft recovery and management of up to 25 named projects;
- added load, delete, download, storage-failure handling, corrupted-data protection, safer file naming, and delayed object-URL cleanup;
- improved keyboard focus, screen-reader status, labels, error state, touch-target sizing, mobile layout, reduced-motion support, and color contrast;
- added a dependency-free automated test suite and a three-minute judge test path;
- rewrote the README to document the model's exact role, the zero-cost architecture, major decisions, safety limitations, and repeatable run/test instructions.

Codex accelerated the conversion from a working concept demo into a more credible, testable submission while Justin Crawford retained the core product decisions and real-world problem definition.

## Major product and engineering decisions

| Decision | Why |
|---|---|
| Prompt handoff instead of a browser API call | Keeps the public prototype free, avoids exposing an API key, and makes the GPT-5.6 interaction inspectable. |
| Safety context before prompt generation | High-consequence field work needs constraints and stop-work thinking before solution generation. |
| Competing solution paths | Reduces premature commitment to the first plausible invention or repair idea. |
| Browser-local storage | Allows useful saving without accounts or a backend while preserving user control. |
| Plain text downloads | Creates a portable backup that can be shared with a mentor or qualified reviewer. |
| Vanilla web platform and Node tests | Keeps setup simple for judges and makes the prototype easy to audit and extend. |

## Project structure

```text
fieldforge-ai/
├── index.html          # Semantic application interface
├── styles.css          # Responsive and accessible presentation
├── app.js              # Validation, prompt, storage, restore, and download logic
├── tests/
│   └── app.test.mjs    # Dependency-free core logic tests
├── package.json        # Test and local-server commands
└── README.md           # Product, architecture, safety, and judge documentation
```

## Known limitations and next engineering step

- Browser-local projects do not sync across devices and disappear if browser storage is cleared.
- The prototype cannot inspect physical equipment, confirm measurements, or approve a design.
- Users manually transfer the prompt and response, so the prototype does not stream model output.
- A future authenticated version could use the OpenAI Responses API through a secure server-side endpoint, add structured output validation, and preserve the current user-controlled privacy choice.

## Required Build Week feedback record

### Primary Codex session ID

`PENDING — run /feedback in this primary Codex thread after the core work is complete; do not invent an ID.`

The real letters-and-numbers Session ID must replace this line before the Devpost submission is finalized.

## Plugin or developer-tool instructions

Not applicable. FieldForge AI is a browser-based Work and Productivity application. No installation, account, or credentials are required. Judges can test the public GitHub Pages prototype using the instructions above.

## Build Week track

**Work & Productivity**

## Founder

Justin Crawford  
Founder, All Element Innovations LLC
