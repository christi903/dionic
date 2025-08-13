dionic

### Supabase Edge Hook: Restrict Staff Signups

This project restricts staff portal registrations to an allowlist of emails.

Client-side validation:
- `src/features/auth/allowedStaff.ts` contains the allowlist used by the UI during registration.

Server-side enforcement (Supabase):
- Edge Function: `supabase/functions/validate-signup/index.ts`
- Edge Auth Hook config: `supabase/edge-hooks.json`

Deploy steps:
1. Ensure your Supabase CLI is logged in and linked to your project.
2. From the repo root, run:
```
supabase functions deploy validate-signup --project-ref <your-project-ref>
```
3. Push the auth hook mapping:
```
supabase functions hooks deploy --project-ref <your-project-ref>
```
4. Test a signup with an allowed and a non-allowed email to confirm.

To update the allowlist, edit both files:
- `src/features/auth/allowedStaff.ts`
- `supabase/functions/validate-signup/index.ts`
