'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full flex justify-between items-center py-4 border-b mb-8">
      <Link href="/" className="text-3xl font-bold hover:opacity-80 transition">
        Idea Maker
      </Link>
    </header>
  );
}
