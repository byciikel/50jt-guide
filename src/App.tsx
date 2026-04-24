function App() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-3xl flex-1 flex-col items-center justify-between bg-white px-16 py-32 dark:bg-black sm:items-start">
        <img
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
        />

        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            To get started, edit the App.tsx file.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for Vite docs? Visit the
            {" "}
            <a
              href="https://vite.dev/guide/"
              className="font-medium text-zinc-950 dark:text-zinc-50"
              target="_blank"
              rel="noopener noreferrer"
            >
              guide
            </a>
            {" "}
            and explore the
            {" "}
            <a
              href="https://vite.dev/config/"
              className="font-medium text-zinc-950 dark:text-zinc-50"
              target="_blank"
              rel="noopener noreferrer"
            >
              config reference
            </a>
            .
          </p>
        </div>

        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[180px]"
            href="https://vite.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore Vite
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[180px]"
            href="https://react.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Docs
          </a>
        </div>
      </main>
    </div>
  );
}

export default App;
