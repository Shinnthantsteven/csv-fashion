# CSV Fashion Designing Institute & Boutique — Full Stack Website

A full-stack website starter for **CSV Fashion Designing Institute & Boutique** in Hyderabad.

## Includes

- React + Vite frontend
- Node.js + Express backend
- Booking/enquiry form API
- Local JSON storage for enquiries: `backend/data/bookings.json`
- Optional email sending with SMTP using Nodemailer
- WhatsApp booking button
- Responsive homepage with services, boutique, kids collection, testimonials and contact section
- Brand assets generated for the CSV logo and website visuals

## Business details used

- Address: Opp. NSR Impulse College, Simhapuri Colony, Bowrampet, Hyderabad, Telangana 500043
- Phone / WhatsApp: +91 93810 19596
- Temporary website: www.csvfashion.in
- Email placeholder: csvfashionhyd@gmail.com

## Run locally

Open Terminal inside this folder, then run:

```bash
npm install
npm run install:all
npm run dev
```

Frontend: http://localhost:5173  
Backend API: http://localhost:5001/api/health

## Backend endpoints

```http
GET /api/health
POST /api/bookings
GET /api/bookings
```

Sample POST body:

```json
{
  "name": "Customer Name",
  "phone": "+91 90000 00000",
  "service": "Women Stitching",
  "date": "2026-06-15",
  "message": "Need blouse stitching and alteration."
}
```

## Optional email setup

Copy the env example:

```bash
cp backend/.env.example backend/.env
```

Then fill SMTP details. If SMTP is blank, the backend will still save bookings to JSON.

## Build frontend

```bash
npm run build
```

The production frontend files will be generated in:

```bash
frontend/dist
```

## Notes

- The domain `www.csvfashion.in` is temporary text and should be replaced with the real purchased domain later.
- The generated images are good for mockup/prototype use. For a real client launch, replace with their real high-quality boutique and makeup photos whenever available.
