import 'dotenv/config';

const defaultBaseUrl = 'https://www.saucedemo.com/';

function resolveBaseUrl() {
  const candidate = process.env.APP_URL ?? defaultBaseUrl;

  try {
    return new URL(candidate).toString();
  } catch {
    throw new Error(`Invalid APP_URL provided: "${candidate}"`);
  }
}

export const appData = Object.freeze({
  baseUrl: resolveBaseUrl(),
  titleRegex: /Swag Labs/i,
});
