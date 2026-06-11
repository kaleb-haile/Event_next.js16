<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into **DevEvent** — a Next.js 16.2.9 App Router application. PostHog is initialized via `instrumentation-client.ts` (the recommended approach for Next.js 15.3+), with a reverse proxy configured through Next.js rewrites so analytics traffic routes through the app's own domain, reducing interception by ad blockers. Environment variables are stored in `.env.local` and referenced in code rather than hardcoded.

| Event | Description | File |
|-------|-------------|------|
| `events_page_viewed` | User lands on the main events listing page — top of discovery funnel | `app/page.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- [Analytics basics (wizard) — Dashboard](https://us.posthog.com/project/465157/dashboard/1697473)
- [Events page views over time](https://us.posthog.com/project/465157/insights/zmECr7HX)
- [Unique daily visitors](https://us.posthog.com/project/465157/insights/4149bApw)
- [Total events page visits](https://us.posthog.com/project/465157/insights/DA2xsDWk)
- [Weekly active visitors](https://us.posthog.com/project/465157/insights/Odsdz9Bf)

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
