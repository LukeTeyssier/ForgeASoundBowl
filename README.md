# forgeasoundbowl.com

Static site (plain HTML/CSS/JS, no build step) deployed on Vercel.

## Edit before launch

- **Contact / Register** — "Contact" buttons scroll to the contact form (`#contact`); "Register" buttons open the registration page on christinemariemason.com.
- **Contact form** — connected to Formspree (form `xyezdbbb`). Submissions go to the email set in your Formspree dashboard.

## Preview locally

```bash
npx serve .
```

## Deploy

1. Push this folder to a GitHub repo.
2. In Vercel: **Add New → Project → Import** the repo. Framework preset: **Other**. No build command. Deploy.
3. In the Vercel project: **Settings → Domains** → add `forgeasoundbowl.com` and `www.forgeasoundbowl.com`, then set the DNS records Vercel shows at your domain registrar.

Every push to `main` redeploys automatically.
