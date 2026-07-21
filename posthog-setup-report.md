# PostHog post-wizard report

The wizard integrated PostHog across the Next.js App Router client and server runtimes. It installed `posthog-js` and `posthog-node`, initialized browser analytics and exception capture, added a short-lived-safe server client, configured the required environment variables, and instrumented contact conversion, lake exploration, directions intent, privacy-safe geolocation requests, and scheduled forecast refresh health. Client and server contact events are correlated using PostHog distinct and session identifiers, while submitted names, emails, comments, and location coordinates are never included in event properties.

| Event | Description | File |
| --- | --- | --- |
| `contact_dialog_opened` | A visitor opened the contact form, indicating interest in requesting a lake or sending feedback. | `app/components/ContactCta.tsx` |
| `contact_form_submitted` | A valid contact request was accepted by the server without including submitted personal information. | `app/api/contact/route.ts` |
| `lake_map_marker_selected` | A visitor selected a lake marker to inspect its launch and current condition summary. | `app/components/SpotMap.tsx` |
| `lake_map_location_requested` | A visitor requested map centering based on browser geolocation without capturing location coordinates. | `app/components/SpotMap.tsx` |
| `lake_directions_opened` | A visitor opened directions from a lake profile, signaling possible trip intent. | `app/components/TrackedDirectionsLink.tsx` |
| `forecast_refresh_completed` | The scheduled server refresh completed with aggregate success and failure counts. | `app/api/cron/fishing/route.ts` |

## Next steps

We've built insights and a dashboard to monitor behavior from the newly instrumented events:

- [Analytics basics dashboard (wizard)](https://us.posthog.com/project/522890/dashboard/1885399)
- [Contact conversion funnel (wizard)](https://us.posthog.com/project/522890/insights/EVcQI329)
- [Lake exploration actions (wizard)](https://us.posthog.com/project/522890/insights/zTWWGuDt)
- [Geolocation requests (wizard)](https://us.posthog.com/project/522890/insights/ryFw54g3)
- [Contact submissions (wizard)](https://us.posthog.com/project/522890/insights/dlNdSLfr)
- [Forecast refresh health (wizard)](https://us.posthog.com/project/522890/insights/2jvtwpaB)

## Verify before merging

- [ ] Run a full production build (the wizard only verified the files it touched) and fix any lint or type errors introduced by the generated code.
- [ ] Run the test suite — call sites that were rewritten or instrumented may need updated mocks or fixtures.
- [ ] Add `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` and `NEXT_PUBLIC_POSTHOG_HOST` to `.env.example` and any bootstrap scripts so collaborators know what to set.
- [ ] Wire source-map upload (`posthog-cli sourcemap` or the bundler upload step) into CI so production stack traces de-minify.

### Agent skill

We've left an agent skill folder in the project. This context can support further agent development in Claude Code and keep future PostHog work aligned with current integration guidance.
