const ALLOWED_EMAILS = new Set([
  "christiansahili01@gmail.com",
  "karimzumomakame@gmail.com",
  "abdulrahimyusuf34@gmail.com",
  "musadionis58@gmail.com",
  "feruzykarim4@gmail.com",
]);

export default function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'POST') {
    try {
      const { email } = req.body;

      if (!email) {
        return res.status(400).json({ 
          error: "Email is required",
          allowed: false 
        });
      }

      const normalizedEmail = email.toLowerCase().trim();
      const isAllowed = ALLOWED_EMAILS.has(normalizedEmail);

      return res.status(200).json({
        allowed: isAllowed,
        email: normalizedEmail
      });
    } catch (error) {
      return res.status(500).json({ 
        error: "Internal server error",
        allowed: false 
      });
    }
  }

  return res.status(405).json({ error: "Method not allowed" });
}