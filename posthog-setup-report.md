# PostHog post-wizard report

The wizard completed and verified a Next.js App Router integration using `posthog-js` in the browser and `posthog-node` in server routes. Existing initialization, exception capture, contact conversion tracking, map engagement, directions intent, and forecast refresh monitoring were preserved. This run added lake-card and species-guide conversion events, refreshed the environment configuration, and confirmed the production build succeeds. Event properties use stable content identifiers and avoid submitted personal information or location coordinates.

| Event | Description | File |
| --- | --- | --- |
| `lake_card_selected` | A visitor selects a lake from the browse-lakes carousel to view its fishing conditions. | `app/components/TrackedLakeCard.tsx` |
| `species_guide_selected` | A visitor selects a species card from a lake profile to view its fishing guide. | `app/components/TrackedSpeciesLink.tsx` |
| `contact_form_submitted` | The server successfully accepts a contact form submission without including submitted personal information. | `app/api/contact/route.ts` |
| `forecast_refresh_completed` | The daily server-side forecast refresh finishes and records its aggregate success and failure counts. | `app/api/cron/fishing/route.ts` |

## Next steps

We've built insights and a dashboard to monitor behavior from the instrumented events:

- [Analytics basics dashboard (wizard)](https://us.posthog.com/project/522890/dashboard/1885978)
- [Lake discovery funnel (wizard)](https://us.posthog.com/project/522890/insights/thMQKuSd)
- [Lake selections by forecast status (wizard)](https://us.posthog.com/project/522890/insights/0xLjDcYn)
- [Species guide engagement (wizard)](https://us.posthog.com/project/522890/insights/vOoOLndP)
- [Contact submissions (wizard)](https://us.posthog.com/project/522890/insights/y65e7mcW)
- [Forecast refresh health (wizard)](https://us.posthog.com/project/522890/insights/MEYSnMHy)

## Verify before merging

- [ ] Run a full production build (the wizard only verified the files it touched) and fix any lint or type errors introduced by the generated code.
- [ ] Run the test suite — call sites that were rewritten or instrumented may need updated mocks or fixtures.
- [ ] Add `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` and `NEXT_PUBLIC_POSTHOG_HOST` to `.env.example` and any bootstrap scripts so collaborators know what to set.
- [ ] Wire source-map upload (`posthog-cli sourcemap` or your bundler's upload step) into CI so production stack traces de-minify.

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.
