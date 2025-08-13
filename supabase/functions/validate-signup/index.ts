// Supabase Auth Hook: validate signups against an allowlist of emails
// Event: signup
// Return 2xx to allow, non-2xx to block

import { serve } from "https://deno.land/std@0.224.0/http/server.ts";

const ALLOWED_EMAILS = new Set<string>([
  "christiansahili01@gmail.com",
  "karimzumomakame@gmail.com",
  "abdulrahimyusuf34@gmail.com",
  "musadionis58@gmail.com",
  "feruzykarim4@gmail.com",
]);

serve(async (req: Request) => {
  try {
    if (req.method === "OPTIONS") {
      return new Response("", { status: 204 });
    }

    const payload = await req.json().catch(() => ({}));
    // Payload shapes vary; try common locations
    const email: string | undefined =
      payload?.record?.email ||
      payload?.user?.email ||
      payload?.email ||
      undefined;

    if (!email) {
      return new Response("Missing email in payload", { status: 400 });
    }

    if (!ALLOWED_EMAILS.has(email.toLowerCase())) {
      return new Response("Registration not allowed for this email", { status: 403 });
    }

    return new Response("OK", { status: 200 });
  } catch (err) {
    return new Response(`Error: ${err instanceof Error ? err.message : String(err)}`, { status: 500 });
  }
});


