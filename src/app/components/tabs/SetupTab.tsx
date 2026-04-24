import { AlertCircle } from "lucide-react";

function StepItem({
  step,
  title,
  desc
}: {
  step: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="relative">
      <div className="absolute -top-1 -left-[17px] flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-red-600 text-sm font-bold text-white shadow-md ring-4 ring-gray-50 dark:ring-gray-900">
        {step}
      </div>
      <div className="pl-8">
        <h3 className="text-base font-bold text-gray-900 dark:text-white">{title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-gray-500 dark:text-gray-400">{desc}</p>
      </div>
    </div>
  );
}

export function SetupTab() {
  return (
    <div className="animate-in p-5 fade-in slide-in-from-bottom-4 duration-300">
      <div className="mb-8 flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4 shadow-sm dark:border-amber-800/50 dark:bg-amber-900/20">
        <AlertCircle className="mt-0.5 shrink-0 text-amber-500" size={20} />
        <div>
          <h3 className="text-sm font-bold text-amber-800 dark:text-amber-400">Tujuan Permainan</h3>
          <p className="mt-1 text-xs leading-relaxed text-amber-700 dark:text-amber-500">
            Jadilah pemain terakhir yang bertahan hidup! Hindari kartu KPK dan UU
            Perampasan Aset dengan segala cara.
          </p>
        </div>
      </div>
      <h2 className="ml-1 mb-5 text-lg font-bold text-gray-900 dark:text-white">Langkah Setup</h2>
      <div className="ml-5 space-y-8 border-l-2 border-red-200 pb-4 dark:border-red-900/50">
        <StepItem
          step="1"
          title="Pisahkan Kartu Khusus"
          desc="Keluarkan kartu AMNESTI, KPK, UU Perampasan Aset, dan Karakter dari deck utama."
        />
        <StepItem
          step="2"
          title="Bagikan Modal"
          desc="Bagikan 5 kartu acak ke setiap pemain, ditambah 1 kartu AMNESTI sebagai nyawa cadangan."
        />
        <StepItem
          step="3"
          title="Masukkan Jebakan"
          desc="Masukkan kartu KPK (Jumlah pemain - 1) & UU Perampasan Aset ke Deck. Kocok ulang!"
        />
      </div>
    </div>
  );
}
