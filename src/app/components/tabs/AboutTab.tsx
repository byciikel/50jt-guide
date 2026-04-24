import { AlertCircle, Mail } from "lucide-react";

export function AboutTab() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-300 flex flex-col items-center px-5 pt-10 pb-8 gap-6">
      {/* Heading */}
      <div className="text-center">
        <h2 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">Tentang Panduan Ini</h2>
        <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
          Panduan ini dibuat secara independen untuk mempermudah pemain dalam mempelajari dan
          memahami aturan permainan <strong className="text-gray-900 dark:text-white">50 Juta Perbulan</strong> agar
          lebih praktis saat dimainkan.
        </p>
      </div>

      {/* Disclaimer */}
      <div className="w-full rounded-2xl border border-amber-200 bg-amber-50 p-5 dark:border-amber-800/50 dark:bg-amber-900/20">
        <h3 className="mb-2 flex items-center gap-2 text-xs font-bold tracking-wider text-amber-700 uppercase dark:text-amber-400">
          <AlertCircle size={13} />
          Disclaimer
        </h3>
        <p className="text-sm leading-relaxed text-amber-800 dark:text-amber-300">
          Aplikasi panduan ini merupakan{" "}
          <strong className="font-bold text-amber-900 dark:text-amber-200">versi ringkas (unofficial)</strong>{" "}
          yang diadaptasi dari panduan resmi yang dirilis oleh publisher{" "}
          <strong className="font-bold text-amber-900 dark:text-amber-200">TokoBoardGame.com</strong>.
        </p>
      </div>

      {/* Feedback */}
      <p className="text-center text-sm leading-relaxed text-gray-600 dark:text-gray-300">
        Jika kamu menemukan adanya kesalahan penulisan aturan, ketidaktepatan efek kartu, atau memiliki
        masukan terkait panduan ini, mohon kesediaannya untuk memberitahu saya. Saya akan segera melakukan
        peninjauan dan pembaruan ke versi yang benar!
      </p>

      {/* Email */}
      <a
        href="mailto:by.ciikel@gmail.com"
        className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
      >
        <Mail size={16} />
        by.ciikel@gmail.com
      </a>
    </div>
  );
}
