# AGENTS.md

## Project
Villa Maria Elena official showcase website.

## Primary goals
- Elegant, Mediterranean, image-led presentation.
- Strong direct-booking calls to action.
- Fast loading and excellent mobile experience.
- SEO-friendly structure for Capo Vaticano / Costa degli Dei searches.
- Maintainable, simple codebase.

## Technical rules
- Use Astro.
- Use Tailwind CSS.
- Use TypeScript where it improves clarity.
- Avoid React/Vue/Svelte unless there is a concrete need.
- Prefer static rendering.
- Keep client-side JavaScript to the minimum necessary.
- Build reusable Astro components.
- Use semantic HTML.
- Meet WCAG-oriented accessibility best practices.
- Respect prefers-reduced-motion.
- Optimize for Core Web Vitals.
- Use responsive images.
- Prefer AVIF/WebP with sensible fallbacks.
- Avoid remote hotlinking for production images.
- Keep dependencies minimal.

## Design direction
- Refined Mediterranean hospitality.
- Light, calm, premium but not luxury-hotel formal.
- Photography should dominate the experience.
- Plenty of whitespace.
- Natural typography and subtle motion.
- Mobile-first.
- Avoid generic template aesthetics.

## Content architecture
Main sections/pages:
- Home
- Camere
- Gallery
- Servizi
- Capo Vaticano
- Dove siamo / Contatti

Primary CTAs:
- Prenota
- Richiedi preventivo
- WhatsApp

## Internationalization
Prepare the architecture for:
- Italian
- English
- German

Use localized, crawlable URLs and metadata.

## SEO
- One clear H1 per page.
- Unique title and meta description.
- Open Graph metadata.
- Canonical URLs.
- Structured data where appropriate, especially LodgingBusiness/Hotel-related schema if semantically valid.
- Internal links between accommodation, services, location and destination pages.
- Descriptive alt text.
- Preserve human-readable URLs.

## Quality checks
Before considering a task complete:
1. Run the production build.
2. Fix build errors.
3. Check responsive behavior.
4. Check keyboard navigation and obvious accessibility issues.
5. Avoid layout shift from images.
6. Check that primary CTAs remain prominent on mobile.

## Working style
- Make focused changes.
- Do not rewrite unrelated areas without reason.
- Prefer components over duplicated markup.
- Keep copy editable and centralized where practical.
- When uncertain, choose the simplest maintainable solution.
