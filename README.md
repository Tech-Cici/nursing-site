# Better Years Services — website

Next.js 16 (App Router, TypeScript) site exported as static HTML. Plain CSS, no UI framework.

## Run it

```bash
npm install
cp .env.example .env.local   # then fill in the values
npm run dev                  # http://localhost:3000
npm run build                # static site written to ./out
```

Upload the contents of `out/` to any static host (Netlify, Vercel, Cloudflare Pages, cPanel). Set the two
environment variables on the host before building there.

## Environment

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_WEB3FORMS_KEY` | Access key from web3forms.com. Form submissions are emailed to the address the key was created with. Without it, forms show a "please call us" message. |
| `NEXT_PUBLIC_SITE_URL` | Live URL, used for the sitemap, canonical links and structured data. |

## Where to edit content

| File | What's in it |
| --- | --- |
| `data/site.ts` | Phone, email, address, opening hours, social links, menu |
| `data/services.ts` | The 8 care services: text, "what's included", "who it's for", FAQs, photo |
| `data/content.ts` | Testimonials, how-we-work steps, reasons, FAQ page, values |
| `public/img/` | Photos (Unsplash licence — free for commercial use) |
| `app/globals.css` | Colours (`:root` tokens), type and layout |

## Before launch

- Replace the contact details in `data/site.ts` with the real ones (the current values are from the existing site).
- Replace the sample testimonials in `data/content.ts` with real, consented reviews and set `sample: false`.
- Add the real policy text to the Privacy, Complaints, Accessibility and Cookie pages (`app/*/page.tsx`).
- Swap stock photos for photos of the real team when available.

## Structure

```
app/                 pages (home, care-services/[slug], about, how-we-work, faq, join-us, contact, policies)
components/          Header, Footer, sections, CallbackForm, Testimonials, accessibility controls
data/                all editable content
public/img/          photos
```
