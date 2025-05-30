// src/lib/api.js
const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL; // ex. https://api.example.com

export default async function api(path, { method = 'GET', body, query } = {}) {
  let url = BASE_URL + path;
  if (query) url += '?' + new URLSearchParams(query);

  const opts = {
    method,
    credentials: 'include',     // Cookie 認証 or Authorization header
    headers: {}
  };
  if (body) {
    opts.headers['Content-Type'] = 'application/json';
    opts.body = JSON.stringify(body);
  }

  const res = await fetch(url, opts);
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`API ${res.status}: ${text}`);
  }
  return res.status === 204 ? null : res.json();
}
