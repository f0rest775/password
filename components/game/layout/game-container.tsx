"use client";

interface GameContainerProps {
  children: React.ReactNode;
}

export function GameContainer({ children }: GameContainerProps) {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-900 via-purple-900 to-pink-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20">
        <div className="flex flex-col items-center space-y-6">
          {children}
        </div>
      </div>
    </main>
  );
}