import type { CardData } from "../../types";

interface CardItemProps {
  card: CardData;
  onClick: () => void;
}

export function CardItem({ card, onClick }: CardItemProps) {
  const isDanger = card.type === "danger";
  const isSafe = card.type === "safe";
  const isSpecial = card.type === "special";
  const badgeBg = isDanger
    ? "bg-red-500"
    : isSafe
      ? "bg-green-500"
      : isSpecial
        ? "bg-amber-500"
        : "bg-blue-500";

  return (
    <div
      onClick={onClick}
      className="group relative aspect-[3/4] w-full cursor-pointer overflow-hidden rounded-2xl bg-gray-900 shadow-sm transition-all duration-300 hover:shadow-xl"
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${card.bg} p-2 transition-transform duration-500 group-hover:scale-105`}
      >
        <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-xl border-[3px] border-white/20 bg-black/10">
          <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-white/40 bg-white/20 shadow-[0_8px_30px_rgb(0,0,0,0.3)] backdrop-blur-md transition-transform duration-500 group-hover:scale-110 sm:h-20 sm:w-20">
            <span className="text-4xl drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)] sm:text-5xl">{card.icon}</span>
          </div>
          <span className="pointer-events-none absolute bottom-4 px-2 text-center text-xl font-black uppercase tracking-widest text-white/30 transform -skew-y-6 sm:text-2xl">
            {card.name.split(" ")[1] || card.name.split(" ")[0]}
          </span>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />
      <div className="absolute inset-0 flex flex-col justify-end overflow-hidden p-4 text-white">
        <div className="flex translate-y-8 flex-col transition-transform duration-300 ease-in-out group-hover:translate-y-0 sm:translate-y-10">
          <span className={`mb-1.5 self-start rounded px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider shadow-sm ${badgeBg}`}>
            {card.type === "special" ? "Karakter" : card.type}
          </span>
          <h3 className="text-sm font-bold leading-tight drop-shadow-md sm:text-base">{card.name}</h3>
          <div className="mt-1 h-0 overflow-hidden opacity-0 transition-all duration-300 ease-in-out group-hover:h-auto group-hover:opacity-100">
            <p className="line-clamp-4 pt-1 text-[9px] leading-snug text-gray-200 sm:text-[10px]">{card.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
