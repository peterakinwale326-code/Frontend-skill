# Component Library Selection and Integration

A component library trades off accessibility, visual control, maintenance, bundle size, and team familiarity. Do not choose one because its demo screenshot looks attractive.

## Selection questions

1. Does it support the framework and version already in the project?
2. Are keyboard and screen-reader patterns documented and tested?
3. Can its visuals be customized without fighting it?
4. Is it maintained and compatible with product/license constraints?
5. Does it solve a real need, or can native HTML handle it?
6. What is the bundle/runtime cost?
7. Can the team inspect and own the component code?

## Practical guidance

- Use native HTML for buttons, links, inputs, simple selects, disclosure, and semantic tables when sufficient.
- Use accessible primitives for complex dialogs, menus, popovers, comboboxes, tabs, and focus management.
- Use copy-in-source components when direct ownership matters and the team can maintain updates.
- Avoid mixing libraries that each define buttons, dialogs, tokens, and resets.
- Never wrap a primitive in a way that strips keyboard or ARIA behavior.

## Integration procedure

Inspect dependencies and existing patterns; compare only libraries that meet required behavior; verify license and maintenance; install the smallest useful component set; test keyboard, focus, screen-reader naming, mobile behavior, theme integration, and bundle impact; document customizations and upgrade implications.

## Red flags

Unmaintained packages, inaccessible demos, no styling escape hatch, unnecessary global CSS, broad dependency trees for one control, and unclear license terms.
