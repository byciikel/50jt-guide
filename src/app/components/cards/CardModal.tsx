import { X } from "lucide-react";

import type { CardData } from "../../types";

interface CardModalProps {
  card: CardData | null;
  onClose: () => void;
}

export function CardModal({ card, onClose }: CardModalProps) {
  if (!card) {
    return null;
  }

  const isDanger = card.type === "danger";
  const isSafe = card.type === "safe";
  const isSpecial = card.type === "special";
  const badgeClass = isDanger
    ? "bg-red-100 text-red-600"
    : isSafe
      ? "bg-green-100 text-green-600"
      : isSpecial
        ? "bg-amber-100 text-amber-700"
        : "bg-blue-100 text-blue-600";

  return (
    <div
      className="animate-in fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-6 backdrop-blur-sm fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="animate-in relative flex max-h-[85vh] w-full max-w-sm flex-col overflow-hidden rounded-3xl bg-white shadow-2xl zoom-in-95 duration-200 dark:bg-gray-800"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 rounded-full bg-black/40 p-2 text-white shadow-lg backdrop-blur-md transition-colors hover:bg-black/60"
        >
          <X size={20} />
        </button>

        <div
          className={`relative w-full overflow-hidden bg-gradient-to-br px-6 pt-6 pb-2 ${card.bg}`}
          style={{ minHeight: "30vh" }}
        >
          <div className="relative flex min-h-[180px] h-full w-full flex-col items-center justify-center overflow-hidden rounded-2xl border-4 border-white/30 bg-black/10 shadow-2xl">
            <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full border border-white/40 bg-white/20 shadow-[0_10px_40px_rgb(0,0,0,0.4)] backdrop-blur-md">
              <span className="text-6xl drop-shadow-[0_5px_10px_rgba(0,0,0,0.5)]">{card.icon}</span>
            </div>
            <span className="pointer-events-none absolute bottom-4 px-2 text-center text-3xl font-black uppercase tracking-widest text-white/20 transform -skew-y-6">
              {card.name.split(" ")[1] || card.name.split(" ")[0]}
            </span>
          </div>
        </div>

        <div className="overflow-y-auto bg-white p-6 dark:bg-gray-800">
          <div className="mb-3 flex items-center gap-2">
            <span className={`rounded-md px-2 py-1 text-[10px] font-bold uppercase tracking-wider ${badgeClass}`}>
              {card.type === "special" ? "Karakter" : card.type}
            </span>
          </div>
          <h3 className="mb-2 text-2xl font-bold leading-tight text-gray-900 dark:text-white">{card.name}</h3>
          <div className="mb-4 h-1 w-10 rounded-full bg-red-500" />
          <p className="whitespace-pre-wrap text-sm leading-relaxed text-gray-600 dark:text-gray-300">
            {card.desc}
          </p>
          {card.note && (
            <div className="mt-5 rounded-xl border border-red-200 bg-red-50 p-4 dark:border-red-900/30 dark:bg-red-900/10">
              <strong className="mb-2 block text-[11px] uppercase tracking-wider text-red-600 dark:text-red-400">
                📌 Note Khusus:
              </strong>
              <p className="whitespace-pre-wrap text-xs leading-relaxed text-red-800 dark:text-red-300">
                {card.note}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
