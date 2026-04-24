import type { ReactNode } from "react";

interface NavButtonProps {
  active: boolean;
  onClick: () => void;
  icon: ReactNode;
  label: string;
}

export function NavButton({ active, onClick, icon, label }: NavButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`relative flex flex-col items-center rounded-xl px-3 py-2 transition-all duration-300 ${
        active
          ? "scale-105 text-red-600 dark:text-red-500"
          : "text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300"
      }`}
    >
      <div className="relative z-10">{icon}</div>
      <span
        className={`mt-1 text-[10px] font-bold transition-all duration-300 ${
          active ? "opacity-100" : "translate-y-1 opacity-0"
        }`}
      >
        {label}
      </span>
      {active && (
        <span className="absolute -top-1 h-1.5 w-1.5 rounded-full bg-red-600 dark:bg-red-500" />
      )}
    </button>
  );
}
