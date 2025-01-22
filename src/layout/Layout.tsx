import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex flex-col min-h-screen bg-zinc-900 layout text-zinc-300 text-pretty">
      {children}
    </div>
  );
}
