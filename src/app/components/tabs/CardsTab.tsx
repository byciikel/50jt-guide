import { useMemo, useState } from "react";
import { Search } from "lucide-react";

import { CARD_DATA } from "../../data/cards";
import type { CardData } from "../../types";
import { CardItem } from "../cards/CardItem";
import { CardModal } from "../cards/CardModal";

export function CardsTab() {
  const [selectedCard, setSelectedCard] = useState<CardData | null>(null);
  const [search, setSearch] = useState("");

  const filteredCards = useMemo(
    () =>
      CARD_DATA.filter((card) =>
        card.name.toLowerCase().includes(search.toLowerCase().trim())
      ),
    [search]
  );

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
      <div className="sticky top-0 z-30 border-b border-gray-100 bg-white p-5 pt-6 pb-4 shadow-sm dark:border-gray-800 dark:bg-gray-900">
        <h2 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">Glossary Kartu</h2>
        <div className="relative">
          <Search
            className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400"
            size={18}
          />
          <input
            type="text"
            placeholder="Cari kartu (Cth: Wartawan, Lobi)..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            className="w-full rounded-xl border-transparent bg-gray-100 py-3 pr-4 pl-10 text-sm text-gray-900 outline-none transition-all focus:border-red-500 focus:bg-white focus:ring-0 dark:bg-gray-800 dark:text-white dark:focus:bg-gray-900"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 p-4">
        {filteredCards.map((card) => (
          <CardItem key={card.name} card={card} onClick={() => setSelectedCard(card)} />
        ))}
      </div>

      <div className="px-4 py-5 text-center text-xs text-gray-500 dark:text-gray-600">
        Menampilkan {filteredCards.length} dari {CARD_DATA.length} kartu glossary
      </div>

      <CardModal card={selectedCard} onClose={() => setSelectedCard(null)} />
    </div>
  );
}
