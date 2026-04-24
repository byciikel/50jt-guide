import { AlertCircle, Info, Mail } from "lucide-react";

export function AboutTab() {
  return (
    <div className="animate-in p-5 pt-8 fade-in slide-in-from-bottom-4 duration-300">
      <div className="flex flex-col items-center rounded-3xl border border-gray-200 bg-white p-6 text-center shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600 shadow-inner dark:bg-blue-900/40">
          <Info size={32} />
        </div>
        <h2 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">Tentang Panduan Ini</h2>
        <p className="mb-6 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
          Panduan ini dibuat secara independen untuk mempermudah pemain dalam memahami
          aturan <strong>50 Juta Perbulan</strong> agar lebih praktis.
        </p>
        <div className="mb-6 w-full rounded-2xl border border-amber-100 bg-amber-50 p-5 text-left dark:border-amber-900/50 dark:bg-amber-900/20">
          <h3 className="mb-2 flex items-center gap-2 text-xs font-bold tracking-wider text-amber-800 uppercase dark:text-amber-500">
            <AlertCircle size={14} />
            Disclaimer
          </h3>
          <p className="text-xs leading-relaxed text-amber-700 dark:text-amber-400">
            Versi ringkas ini diadaptasi dari panduan resmi publisher
            <strong> TokoBoardGame.com</strong>.
          </p>
        </div>
        <p className="mb-8 text-[10px] leading-relaxed text-gray-500 italic">
          Ada kesalahan aturan? Laporkan ke:
        </p>
        <a
          href="mailto:by.ciikel@gmail.com"
          className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
        >
          <Mail size={16} />
          by.ciikel@gmail.com
        </a>
      </div>
    </div>
  );
}
