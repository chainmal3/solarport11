'use client';

import SolarExplorer from '@/components/SolarExplorer';

export default function Home() {
  return (
    <main className="relative w-full h-screen overflow-hidden">
      <h1 className="text-white absolute top-10 left-0 right-0 mx-auto text-center text-sm uppercase font-light tracking-widest z-50">
        Solar explorer
        <span className="text-[#f39041] block text-xs">in only CSS</span>
      </h1>
      <SolarExplorer />
    </main>
  );
}