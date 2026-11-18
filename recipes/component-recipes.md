# Component Recipes and Interaction Contracts

Use the project's existing primitives first. Inspect their actual API and accessibility behavior before wrapping or replacing them. Do not hand-roll complex dialogs, menus, comboboxes, toasts, date pickers, or drag-and-drop when a mature accessible primitive exists.

## Button

Variants express hierarchy: primary, secondary, tertiary/ghost, destructive, and possibly link. Sizes map to density and touch needs. Define default, hover, focus-visible, active, disabled, and pending states. Pending state prevents duplicate submission and exposes status. Use an anchor for navigation and a button for actions.

## Text field

A field needs a persistent label, optional description, input, and associated error. Placeholder is not a label. Use correct `type`, `autocomplete`, `inputmode`, `required`, and `name`. Connect help/error text with `aria-describedby`; set `aria-invalid` when invalid. Preserve input after recoverable server errors.

```tsx
<label htmlFor="workspace-name">Workspace name</label>
<input
  id="workspace-name"
  name="workspaceName"
  autoComplete="organization"
  aria-describedby="workspace-name-help"
/>
<p id="workspace-name-help">Visible to members of this workspace.</p>
```

## Select / combobox

Use a native select for simple finite options. Use a tested accessible combobox for searchable, async, grouped, or multi-select options. Support keyboard navigation, clear selection, loading, no-results, and error states. Do not build a custom dropdown solely for visual styling.

## Dialog

Use for a focused decision or task that should interrupt the current context. Include visible title, description when needed, close/cancel path, and explicit primary action. Move focus inside, contain focus while modal, close on Escape where appropriate, and return focus to the trigger. Prevent background interaction. On mobile ensure the dialog fits short screens and actions remain reachable.

## Popover / menu

Anchor to the trigger and reposition when viewport space is constrained. Keep menu semantics distinct from generic popovers. Support expected arrow-key navigation, Escape, and focus restoration. Never make hover the only opening method.

## Tabs

Use tabs for peer views within one context, not as a substitute for navigation. Define selected state, keyboard behavior, panel relationship, and mobile strategy. Preserve or warn about unsaved form state when switching.

## Toast / notification

Use for concise, non-blocking feedback. State what happened and what the user can do next. Do not use a toast as the only channel for a critical error. Avoid duplicate notifications. Offer undo for recoverable actions. Announce meaningful updates without stealing focus.

## Tooltip

Use for short supplementary explanations, not essential instructions. Support keyboard focus and touch alternatives. Avoid long paragraphs or interactive content. The trigger should remain understandable without it.

## Card

A card is a meaningful grouped object that users compare, select, or act on—not a default wrapper for every section. If the entire card is clickable, use one coherent link/button target and avoid nested interactive controls. Use a plain section, list, or table when that is clearer.

## Table

Use semantic table markup for tabular relationships. Provide column headers, accessible name/caption, sort state, and row/column scope. Align numeric values consistently. Use a deliberate mobile strategy instead of squeezing many columns into a narrow viewport.

## Empty states

Distinguish first-use empty, filtered no-results, no permission, and failed load. Explain why there is no content, what the user can do, and whether absence is expected. A blank page with a generic illustration is not a designed empty state.

## Forms

Collect only necessary information; group fields by user task, not database schema. Validate on the server even when client validation exists. Preserve values after errors. Show pending state and prevent double submission. Confirm only consequential or irreversible actions. Explain whether changes save automatically or require an explicit action.

## Search and filters

Preserve query when opening a result and returning. Show active filters and allow removal. Provide clear-all when multiple filters are active. Keep result count and sort order visible. Cancel/ignore stale requests so old responses cannot overwrite new queries. Put stable, shareable filters in the URL where useful. Distinguish no results, loading, and failure.

## Dashboard metrics and charts

A metric needs definition, unit, timeframe, comparison basis, and source. Distinguish zero, unavailable, and stale. Use line for continuous time, bar for discrete comparisons, scatter for numeric relationships, and table when exact values matter most. Label axes and units. Avoid 3D, misleading cropped baselines, excessive series, and color-only legends. Provide a text/table alternative. Never fabricate data.

## Destructive actions

State the object and consequence. Prefer reversible actions with undo. If permanent, explain what will be lost and whether related data is affected. Avoid vague “Are you sure?” prompts.

## Component acceptance

For each component record purpose and when not to use it, anatomy, variants/sizes, keyboard/screen-reader behavior, loading/disabled/invalid/empty/success/error states, mobile behavior, and a visual or interaction test.
