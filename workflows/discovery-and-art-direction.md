# Discovery and Art Direction

This playbook combines product discovery with visual direction. The design must come from the product's actual job, content, audience, and constraints—not from a generic aesthetic preset.

## Inspect before designing

Read the package manifest, lockfile, framework/router version, route tree, layouts, global styles, tokens, font setup, component library, icon package, data/API boundaries, auth/permission rules, tests, and Git status. Run the existing checks where practical. Inspect current behavior at desktop and mobile widths. Preserve unrelated work and existing contracts.

Do not replace a working component system just because another library is fashionable. Do not alter API semantics, routing, authentication, permissions, or data ownership as a side effect of visual polish.

## Write a compact product brief

Record:
- **Product and audience:** what the product actually does and who is using it.
- **User job:** why the user arrived on this screen.
- **Primary action:** the one action that should be easiest to find.
- **Secondary actions:** useful but lower priority.
- **Evidence:** real product UI, data, imagery, process, or proof that can be shown.
- **Constraints:** brand, stack, browser support, budget, bandwidth, localization, device, accessibility, security.
- **Failure cost:** what happens when the user makes a mistake or the service is unavailable.
- **Success:** observable behavior that proves the task works.

If one essential decision blocks implementation, ask one focused question. Otherwise state a reversible assumption and proceed.

## Map the journey

Write the shortest successful path as user intent → system response → next decision. Include validation failure, empty results, permission denial, network failure, cancellation, and recovery. Each step should map to an actual route, state, action, or system response—not a decorative journey diagram.

## Classify the page by its job

- **Marketing/editorial:** establish relevance, explain the offer, show evidence, and make the next step clear.
- **Application workspace:** support recurring work with low friction and visible system state.
- **Dashboard:** surface decisions, exceptions, trends, and next actions; avoid vanity metric walls.
- **Commerce/booking:** support comparison, confidence, availability, transparent pricing, and reliable checkout.
- **Learning/content:** support orientation, reading, practice, progress, and resumption.
- **Settings/admin:** make scope and consequences explicit; group controls by the user's mental model.
- **Data operations:** prioritize scanning, filtering, comparison, traceability, and recovery.

## Visual thesis

Write one sentence describing the visual character and why it fits. “Modern, clean, beautiful” is not a thesis. Define two or three traits grounded in the product. A developer tool may need precise typography and quiet surfaces; hospitality should lead with its actual place and atmosphere; education should feel encouraging and legible without childish noise; finance should communicate control and traceability.

## Anti-slop rules

Avoid:
- the same centered headline, gradient orb, floating dashboard mockup, and three feature cards on every site;
- purple/blue gradients, glass panels, glow, blur, grain, and giant radii without a product reason;
- card backgrounds around every section, repeated two-column sections, and identical card grids;
- fake charts, activity, avatars, customer logos, testimonials, usage metrics, or product capabilities;
- generic stock imagery that implies a real customer, employee, location, or product;
- emoji as interface icons, mismatched icon families, and arbitrary stroke weights;
- filler badges (“AI-powered”, “next-gen”, “seamless”) without evidence;
- placeholder copy, repeated generic benefits, and buttons that say “Learn More” when the action can be named;
- motion on every element, cursor trails, constant floating, scroll-fades everywhere, and animated backgrounds that compete with reading.

Ask: could this design be pasted onto another company by changing only the logo and accent color? If yes, make it more product-specific. Add actual workflows, vocabulary, evidence, data, and constraints—not more effects.

## Visual material by product type

| Context | Lead visual | Avoid |
|---|---|---|
| SaaS/developer tool | Actual interface, code, architecture/workflow diagram | Fake terminals, abstract 3D by default |
| Physical product | Accurate product photography and meaningful angles | Unrelated props and invented product renders |
| Place/hospitality | Real venue, food, room, surroundings | Generic gradient hero |
| Professional service | Real people, process, substantiated work | Generic handshake imagery |
| Education | Real lesson/task examples, learning path, practice | Childish mascots and decorative progress rings |
| Finance/operations | Clear data, states, controls, provenance | Decorative charts and ungrounded confidence signals |
| Editorial/culture | Strong typography, art direction, meaningful photography | SaaS feature-grid templates |

Use real client/product assets first; permitted licensed imagery second; a purpose-built diagram or illustration third; restrained typography when none is needed. A memorable “dealt moment” is earned: a strong crop, accurate UI, diagram, typographic composition, or purposeful interaction. It is not a requirement to add WebGL or 3D.

## Content integrity

List visible claims and their sources. Mark data as live, derived, example, or placeholder. Never ship example data as real analytics. Do not invent customer logos, counts, testimonials, uptime, certification, integrations, prices, guarantees, or capabilities. Use concrete nouns and verbs. Replace vague claims with demonstrations of what the product actually does.

## Design brief output

Before a substantial build, record page purpose, audience, primary journey, hierarchy, visual thesis, components/states, responsive behavior, constraints, and acceptance checks. Keep it short enough to use while implementing.
