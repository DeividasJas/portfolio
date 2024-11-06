import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className='flex flex-col min-h-screen bg-zinc-900 layout text-zinc-200'>
      {children}
    </div>
  );
}
