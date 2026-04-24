import type { CardData } from "../types";

export const CARD_DATA: CardData[] = [
  { name: "KPK", type: "danger", icon: "🚨", bg: "from-red-600 to-red-900", desc: "Jika anda mengambil kartu ini, anda tereliminasi!" },
  {
    name: "UU PERAMPASAN ASET",
    type: "danger",
    icon: "☠️",
    bg: "from-gray-800 to-black",
    desc: "First Draw: Kembalikan ke deck hadap atas. 2nd Draw: MUTLAK TERELIMINASI (Amnesti tidak mempan)."
  },
  {
    name: "JALUR ALTERNATIF",
    type: "action",
    icon: "🛣️",
    bg: "from-lime-500 to-green-700",
    desc: "Akhiri giliran dengan mengambil kartu ke 2 dari atas atau paling bawah Deck."
  },
  {
    name: "AMNESTI",
    type: "safe",
    icon: "🛡️",
    bg: "from-emerald-500 to-green-800",
    desc: "Kembalikan kartu KPK ke Deck posisi bebas. Giliran anda berakhir tanpa perlu mengambil kartu."
  },
  {
    name: "PENGALIHAN ISU",
    type: "action",
    icon: "🔀",
    bg: "from-violet-500 to-purple-800",
    desc: "Kocok ulang seluruh tumpukan kartu (Deck) utama secara acak."
  },
  {
    name: "KEADILAN SOSIAL",
    type: "action",
    icon: "⚖️",
    bg: "from-amber-500 to-orange-700",
    desc: "Akhiri giliran tanpa mengambil kartu. Arah permainan putar balik."
  },
  {
    name: "DAPAT WANGSIT",
    type: "action",
    icon: "👁️",
    bg: "from-fuchsia-500 to-pink-700",
    desc: "Intip 3 kartu teratas Deck secara rahasia, lalu kembalikan."
  },
  {
    name: "LOBI POLITIK",
    type: "action",
    icon: "🤝",
    bg: "from-sky-500 to-indigo-700",
    desc: "Minta 1 kartu. Lawan boleh nolak 1x, tapi wajib memberi kartu lain sbg ganti.",
    note: "Kartu lain yang dimaksud tidak harus kartu jenis berbeda."
  },
  {
    name: "BLUNDER",
    type: "action",
    icon: "🤦",
    bg: "from-orange-500 to-red-600",
    desc: "Mainkan sepasang (Pair) untuk mencuri 1 kartu acak lawan. Mainkan 3 kembar (3 of kind) untuk meminta kartu spesifik."
  },
  {
    name: "PASS!",
    type: "action",
    icon: "💤",
    bg: "from-blue-400 to-blue-700",
    desc: "Akhiri giliran tanpa mengambil kartu dari deck.",
    note: "Jika menggunakan Pass ketika terkena Manuver, anda hanya mengabaikan 1 giliran bukan 2."
  },
  {
    name: "TIDAK!",
    type: "action",
    icon: "🛑",
    bg: "from-rose-500 to-red-700",
    desc: "Membatalkan aksi lawan yang dimainkan di luar giliran. Tidak bisa membatalkan Amnesti."
  },
  {
    name: "MANUVER",
    type: "action",
    icon: "⏭️",
    bg: "from-cyan-500 to-blue-700",
    desc: "Akhiri giliran tanpa ambil kartu. Pemain di sebelahmu wajib melakukan 2 giliran!",
    note: "Jika pemain berikutnya memainkan kartu Manuver juga, maka pemain berikutnya wajib melakukan 4 giliran, dan seterusnya."
  },
  {
    name: "BLACK SHEEP",
    type: "action",
    icon: "🐑",
    bg: "from-slate-700 to-slate-900",
    desc: "Mainkan sepasang (Pair) saat terkena KPK: Berfungsi sebagai Amnesti + Oper kartu KPK ke lawan lain.",
    note: "Jika kartu Amnesti dimainkan, yang bersangkutan mengembalikan kartu KPK ke dalam deck, jika kartu tidak dimainkan maka anda yang mengembalikan kartu KPK ke deck."
  },
  {
    name: "IJAZAH PALSU",
    type: "passive",
    icon: "📜",
    bg: "from-yellow-500 to-amber-700",
    desc: "Selama di tangan, menahan 1 kartu KPK. Jika kartu ini hilang/dicuri, kamu langsung tereliminasi."
  },
  {
    name: "WARTAWAN",
    type: "action",
    icon: "📸",
    bg: "from-teal-500 to-emerald-700",
    desc: "Pilih 1 lawan untuk membuka 1 kartunya ke semua pemain.",
    note: "🔹 ATURAN DASAR:\n• Pilih 1 kartu tangan lawan. Kartu dibuka (expose) sampai dimainkan.\n• Bisa dibatalkan lawan dengan kartu \"TIDAK!\".\n\n🔹 REAKSI KHUSUS:\n• BLACK SHEEP: Jika kartu ini yang ter-expose, kartu berpindah menjadi MILIKMU.\n• IJAZAH PALSU: Kartu langsung dibuang (discard).\n  - Jika menahan KPK: Pemilik kartu ELIMINASI.\n  - Jika tidak menahan KPK: Pemilik kartu buang +1 kartu acak tambahan."
  },
  {
    name: "JOGET!",
    type: "action",
    icon: "🕺",
    bg: "from-fuchsia-500 to-purple-800",
    desc: "Wild Card. Bisa digabungkan untuk mengaktifkan efek kartu Blunder menjadi Pair atau 3 of a kind."
  },
  { name: "KARAKTER: ANAK BABE", type: "special", icon: "👶", bg: "from-pink-500 to-rose-900", desc: "Mulai dengan +2 Kartu (Tidak bisa ditarik/ambil kartu Amnesti)." },
  {
    name: "KARAKTER: PRAJURIT VETERAN",
    type: "special",
    icon: "🪖",
    bg: "from-emerald-700 to-green-900",
    desc: "Mulai dengan 1 Kartu lebih sedikit. 1x Efek Super Manuver tanpa perlu memainkan kartu Manuver."
  },
  {
    name: "KARAKTER: NABI",
    type: "special",
    icon: "🧙",
    bg: "from-indigo-500 to-blue-800",
    desc: "Saat DAPAT WANGSIT lihat 4 kartu (bukan 3). Saat pemain lain DAPAT WANGSIT, kamu juga lihat kartu teratas deck."
  },
  {
    name: "KARAKTER: PEMAIN E-SPORT",
    type: "special",
    icon: "🎮",
    bg: "from-cyan-400 to-blue-600",
    desc: "1x per game: Akhiri giliranmu dengan mengambil 2 kartu teratas Deck, lalu pilih 1 dan kembalikan yang satunya ke deck."
  },
  {
    name: "KARAKTER: AGEN ASURANSI",
    type: "special",
    icon: "👔",
    bg: "from-slate-600 to-gray-900",
    desc: "Awal main: Pilih 1 pemain, intip kartunya & ambil 1 kartu (bukan Amnesti). Beri kartu karakter ini sbg Polis. Jika dia kena KPK, bisa selamat 1x (\"Amnesti Virtual\") dengan bayar 1 kartu bebas padamu."
  },
  {
    name: "KARAKTER: PEMUNGUT CUKAI",
    type: "special",
    icon: "🧾",
    bg: "from-yellow-600 to-amber-900",
    desc: "Tiap kali ada kartu Amnesti dimainkan, ambil 1 Kartu Blunder dari tumpukan buangan (discard pile). Tidak berlaku untuk \"Amnesti Virtual\" Agen asuransi."
  },
  {
    name: "KARAKTER: BANKIR",
    type: "special",
    icon: "🏦",
    bg: "from-stone-600 to-neutral-900",
    desc: "Kamu bisa mengamankan 2 kartu rahasia di tanganmu agar tidak bisa dicuri oleh efek Pair Blunder milik lawan."
  },
  {
    name: "KARAKTER: HANSIP TELADAN",
    type: "special",
    icon: "🔦",
    bg: "from-lime-500 to-green-800",
    desc: "Saat lawan Pass, discard 1 kartu untuk cegah mereka pass! (kartu Pass kembali ke tangannya & dilarang dimainkan lagi di giliran itu). Jika KAMU mainkan Pass!, ia berfungsi ganda menjadi Manuver."
  },
  {
    name: "KARAKTER: PREMAN",
    type: "special",
    icon: "👊",
    bg: "from-orange-600 to-red-900",
    desc: "Jika kamu ditarget Lobi Politik, kartu yang kamu kasih tidak bisa ditolak. Jika KAMU yang memakai Lobi Politik, 1x per game kamu bisa menolak hingga 2x."
  },
  {
    name: "KARAKTER: DIKTAKTOR",
    type: "special",
    icon: "👑",
    bg: "from-red-800 to-black",
    desc: "1x per game: Kartu \"TIDAK!\" pertama yang kamu mainkan bersifat absolut (tidak bisa di-counter atau dibatalkan dengan kartu TIDAK! balasan dari lawan)."
  },
  {
    name: "KARAKTER: EX-KORUPTOR",
    type: "special",
    icon: "💰",
    bg: "from-amber-600 to-yellow-900",
    desc: "Bagi kamu, cukup membuang (discard) 4 kartu dengan nama berbeda untuk menukarnya dengan 1 kartu pilihan dari Discard Pile."
  }
];
