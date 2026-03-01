import { google } from 'googleapis';
import fs from 'fs';
import path from 'path';

// utility to retrieve data from a private Google Sheet using a service account

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly'];

let cachedAuth = null;

async function authorize() {
  if (cachedAuth) return cachedAuth;

  const keyPath = process.env.GOOGLE_SERVICE_ACCOUNT_KEY ||
    path.resolve(process.cwd(), 'service-account.json');
  const creds = JSON.parse(fs.readFileSync(keyPath, 'utf-8'));

  const auth = new google.auth.GoogleAuth({
    credentials: creds,
    scopes: SCOPES,
  });

  cachedAuth = await auth.getClient();
  return cachedAuth;
}

export async function fetchSheet(spreadsheetId, range) {
  const authClient = await authorize();
  const sheets = google.sheets({ version: 'v4', auth: authClient });
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range,
  });
  return res.data.values || [];
}

// export defaults for convenience
export default { fetchSheet };
