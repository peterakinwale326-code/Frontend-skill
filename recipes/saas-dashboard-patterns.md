# SaaS and Dashboard Pattern Recipes

This guide is for real product workspaces, not marketing pages that happen to contain cards.

## Workspace shell

A practical shell may include primary navigation, workspace switcher, contextual page title, global actions, account controls, and a main content region. Keep global navigation stable. Avoid duplicating the same links in sidebars, page tabs, and cards.

On narrow screens choose a deliberate navigation model. Preserve the current workspace and route context.

## Overview dashboard

Order content by decision value:
1. scope (workspace/project/account) and time range;
2. items requiring attention;
3. current state and meaningful comparisons;
4. recent activity only when it helps explain a change;
5. deeper reports and settings.

Do not fill the first viewport with six equally weighted KPI cards. Choose metrics that explain a decision. Include units, definitions, time range, and comparison basis. Label stale or partial data.

## Resource list / management table

Provide:
- page title and concise purpose;
- create action where permission allows;
- search and filters that reflect actual fields;
- result count and sort state;
- stable row identity;
- row actions with clear labels;
- loading, empty, filtered-empty, error, and permission-denied states;
- pagination/virtualization when needed;
- mobile summary/detail strategy.

Bulk actions should appear only when selection exists. Explain the selection scope and provide a clear exit from selection mode.

## Detail page

Show the identity of the object, current status, key facts, primary action, and recent changes. Group secondary details by task. Make destructive actions visually distinct and explain their impact. Provide breadcrumbs/back navigation when users need to return to a parent list.

## Activity and audit history

Use a chronological list when sequence matters. Include actor, action, target, timestamp, and relevant context. Do not fabricate activity. Keep machine IDs available where traceability matters, but do not force them into the primary reading path.

## Billing and usage

Show billing period, plan, usage definition, current amount, renewal date, and what happens at a limit. Avoid implying a charge or entitlement that the backend does not enforce. Use clear empty, payment failure, and permission states.

## Team and permissions

Make member identity, role, invite state, and access scope clear. Explain role changes and destructive membership actions. Do not expose controls to users who lack permission. Server-side authorization remains mandatory; hiding a button is not security.

## Chart and metric rules

Use real data and consistent units. Distinguish zero from unavailable, stale, and not-yet-loaded. Avoid misleading baselines and decorative gradients. Give key values a table/text alternative. A chart must answer a question; otherwise remove it.

## Dashboard anti-patterns

- A grid of identical cards where every metric is “important”.
- Donut charts for values that do not represent a meaningful whole.
- Fake trend lines and arbitrary percentage changes.
- Activity feeds populated with placeholder names.
- Filters that visually change but do not change the data.
- Buttons with no implemented behavior.
- Admin actions available only by hiding/unhiding controls without server authorization.
