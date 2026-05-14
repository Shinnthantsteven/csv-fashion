import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import fs from 'fs/promises';
import path from 'path';
import nodemailer from 'nodemailer';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = process.env.PORT || 5001;
const DATA_FILE = path.join(__dirname, 'data', 'bookings.json');

app.use(cors({ origin: process.env.FRONTEND_ORIGIN || '*'}));
app.use(express.json({ limit: '1mb' }));
app.use(morgan('dev'));

const required = ['name', 'phone', 'service'];

function clean(value = '') {
  return String(value).trim().replace(/[<>]/g, '');
}

async function readBookings() {
  try {
    const raw = await fs.readFile(DATA_FILE, 'utf8');
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

async function writeBookings(bookings) {
  await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
  await fs.writeFile(DATA_FILE, JSON.stringify(bookings, null, 2));
}

async function sendEmail(booking) {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, MAIL_TO, MAIL_FROM } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) return { skipped: true };

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT || 587),
    secure: Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS }
  });

  await transporter.sendMail({
    from: MAIL_FROM || SMTP_USER,
    to: MAIL_TO || SMTP_USER,
    subject: `New CSV Fashion enquiry - ${booking.service}`,
    text: `New website enquiry\n\nName: ${booking.name}\nPhone: ${booking.phone}\nService: ${booking.service}\nDate: ${booking.date || '-'}\nMessage: ${booking.message || '-'}\nCreated: ${booking.createdAt}`
  });
  return { skipped: false };
}

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, name: 'CSV Fashion API', time: new Date().toISOString() });
});

app.post('/api/bookings', async (req, res) => {
  const payload = {
    id: crypto.randomUUID(),
    name: clean(req.body.name),
    phone: clean(req.body.phone),
    service: clean(req.body.service),
    date: clean(req.body.date),
    message: clean(req.body.message),
    createdAt: new Date().toISOString()
  };

  const missing = required.filter((key) => !payload[key]);
  if (missing.length) {
    return res.status(400).json({ ok: false, error: `Missing required field: ${missing.join(', ')}` });
  }

  const bookings = await readBookings();
  bookings.unshift(payload);
  await writeBookings(bookings);

  try {
    await sendEmail(payload);
  } catch (error) {
    console.error('Email failed:', error.message);
  }

  res.status(201).json({ ok: true, booking: payload });
});

app.get('/api/bookings', async (_req, res) => {
  const bookings = await readBookings();
  res.json({ ok: true, bookings });
});

app.listen(PORT, () => {
  console.log(`CSV Fashion API running on http://localhost:${PORT}`);
});
