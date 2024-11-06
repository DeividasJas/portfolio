import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className='flex flex-col min-h-screen text-white bg-zinc-900 layout'>
      {children}
    </div>
  );
}
