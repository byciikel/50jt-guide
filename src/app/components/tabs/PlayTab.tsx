interface PlayTabProps {
  onOpenGlossary: () => void;
}

export function PlayTab({ onOpenGlossary }: PlayTabProps) {
  return (
    <div className="animate-in p-5 fade-in slide-in-from-bottom-4 duration-300">
      <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">Cara Bermain</h2>
      <p className="mb-6 text-sm text-gray-500 italic dark:text-gray-400">
        Gunakan langkah berikut secara berurutan:
      </p>
      <div className="mb-8 flex flex-col gap-4">
        <div className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-xl text-blue-500 dark:bg-blue-900/20">
            🃏
          </div>
          <div>
            <h3 className="text-sm font-bold text-gray-900 dark:text-white">
              1. Mainkan Kartu{" "}
              <span className="ml-1 rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-bold text-green-700 dark:bg-green-900/30 dark:text-green-400">Opsional</span>
            </h3>
            <p className="text-xs leading-relaxed text-gray-500">
              Boleh main kartu aksi sebanyak yang diinginkan.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-50 text-xl text-red-500 dark:bg-red-900/20">
            📥
          </div>
          <div>
            <h3 className="text-sm font-bold text-gray-900 dark:text-white">
              2. Ambil Kartu{" "}
              <span className="ml-1 rounded-full bg-red-100 px-2 py-0.5 text-[10px] font-bold text-red-700 dark:bg-red-900/30 dark:text-red-400">Wajib</span>
            </h3>
            <p className="text-xs leading-relaxed text-gray-500">
              Wajib ambil <strong className="text-gray-700 dark:text-gray-300">1 kartu</strong> dari deck untuk mengakhiri giliran.
            </p>
          </div>
        </div>
      </div>
      <div className="rounded-3xl bg-red-600 p-6 text-white shadow-xl dark:bg-red-900/80">
        <h3 className="mb-2 text-lg font-bold">Pemain Gugur?</h3>
        <p className="mb-4 text-sm leading-relaxed text-red-50">
          Jika kamu mengambil kartu <strong className="font-bold text-white">KPK</strong> dan tidak punya{" "}
          <strong className="font-bold text-yellow-300">kartu penyelamat</strong>, kamu langsung tereliminasi!
        </p>
        <button
          onClick={onOpenGlossary}
          className="w-full rounded-xl bg-white px-4 py-2 text-xs font-bold text-red-600 shadow-sm"
        >
          Cari Solusi di Glossary
        </button>
      </div>
    </div>
  );
}
