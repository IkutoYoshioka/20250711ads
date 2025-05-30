// src/app/page.jsx
import { redirect } from 'next/navigation';

export default function RootPage() {
  // ルートにアクセスが来たら /login に飛ばす
  redirect('/login');
}
