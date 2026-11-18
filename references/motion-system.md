# Motion & Interaction Playbook

Animate only when it communicates cause/effect, state, hierarchy, spatial continuity, or useful feedback. Ask how often the user triggers it. Frequent actions should be instant or nearly instant; keyboard actions must not be delayed by decoration.

## Timing and easing
- Entrances commonly use ease-out; exits commonly use ease-in.
- Movement between stable states commonly uses ease-in-out.
- Everyday menus, popovers, and controls should feel quick and unobtrusive.
- Exits can be shorter than entrances.
- Avoid universal duration caps; consider distance, context, frequency, and platform.
- Avoid bounce in ordinary productivity UI without a clear reason.

## Patterns
Menus/popovers appear to originate from their trigger. Dialogs preserve focus. Press feedback may use restrained scale/opacity without delaying activation. Crossfades/morphs preserve meaningful continuity. Staggered lists remain quick. Gestures track the finger, preserve release velocity, and remain interruptible. Loading indicators never imply fabricated progress. Success feedback is brief and clear.

## Performance
Prefer transform and opacity. Avoid repeated layout-triggering animation. Use CSS for simple transitions; use an animation library when orchestration, shared layout, or gestures justify it. Avoid unnecessary loops, excessive blur, large filters, and heavy canvas/WebGL on low-powered devices.

## Accessibility
Respect `prefers-reduced-motion`. Remove nonessential movement or replace it with immediate state changes/fades. Never rely on motion alone to communicate status. Ensure transitions do not trap focus or block keyboard use.

## Anti-patterns
Fade-in on every section; constant pulsing without live status; excessive parallax, cursor trails, tilt, or scroll hijacking; animated delays on common controls; uninterruptible transitions; decorative motion competing with reading; hiding content until animation completes.
