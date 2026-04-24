"use client";

import { useEffect, useState } from "react";
import { Info, Library, Moon, PlayCircle, Settings, Sun } from "lucide-react";

import type { AppTab } from "./types";
import { NavButton } from "./components/NavButton";
import { SetupTab } from "./components/tabs/SetupTab";
import { PlayTab } from "./components/tabs/PlayTab";
import { CardsTab } from "./components/tabs/CardsTab";
import { AboutTab } from "./components/tabs/AboutTab";

export default function Page() {
  const [activeTab, setActiveTab] = useState<AppTab>("setup");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [headerIconError, setHeaderIconError] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
      return;
    }

    setIsDarkMode(false);
    document.documentElement.classList.remove("dark");
  }, []);

  const toggleTheme = () => {
    const nextThemeDark = !isDarkMode;
    setIsDarkMode(nextThemeDark);

    if (nextThemeDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      return;
    }

    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-0 font-sans transition-colors duration-300 dark:bg-black md:p-4">
      <div className="relative flex h-[100dvh] w-full max-w-md flex-col overflow-hidden border-x border-gray-200 bg-gray-50 shadow-2xl dark:border-gray-800 dark:bg-gray-900 md:h-[90vh] md:rounded-3xl md:border-y">
        <header className="sticky top-0 z-50 flex items-center justify-between border-b border-gray-200 bg-white/90 p-4 backdrop-blur-md dark:border-gray-800 dark:bg-gray-900/90">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-gray-200 bg-red-100 shadow-md dark:border-gray-700 dark:bg-red-900/40">
              {!headerIconError ? (
                <img
                  src="fce06ab0-5f76-4e91-948b-1f50ba64f8cf"
                  alt="App Icon"
                  className="h-full w-full object-cover"
                  onError={() => setHeaderIconError(true)}
                />
              ) : (
                <span className="text-2xl text-red-600">💸</span>
              )}
            </div>

            <div>
              <h1 className="text-lg leading-tight font-bold text-gray-900 dark:text-white">
                50 Juta Perbulan
              </h1>
              <p className="text-[10px] font-semibold tracking-widest text-gray-500 uppercase dark:text-gray-400">
                Rulebook Pintar
              </p>
            </div>
          </div>
          <button
            onClick={toggleTheme}
            className="rounded-full bg-gray-100 p-2.5 text-gray-600 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </header>

        <main className="no-scrollbar relative flex-1 overflow-y-auto pb-24">
          {activeTab === "setup" && <SetupTab />}
          {activeTab === "play" && (
            <PlayTab onOpenGlossary={() => setActiveTab("cards")} />
          )}
          {activeTab === "cards" && <CardsTab />}
          {activeTab === "about" && <AboutTab />}
        </main>

        <nav className="pb-safe absolute bottom-0 z-50 w-full border-t border-gray-200 bg-white shadow-[0_-10px_20px_rgba(0,0,0,0.05)] dark:border-gray-800 dark:bg-gray-900 dark:shadow-none">
          <div className="flex items-center justify-around p-2 px-1 sm:px-2">
            <NavButton
              active={activeTab === "setup"}
              onClick={() => setActiveTab("setup")}
              icon={<Settings size={22} />}
              label="Persiapan"
            />
            <NavButton
              active={activeTab === "play"}
              onClick={() => setActiveTab("play")}
              icon={<PlayCircle size={22} />}
              label="Cara Main"
            />
            <NavButton
              active={activeTab === "cards"}
              onClick={() => setActiveTab("cards")}
              icon={<Library size={22} />}
              label="Glossary"
            />
            <NavButton
              active={activeTab === "about"}
              onClick={() => setActiveTab("about")}
              icon={<Info size={22} />}
              label="Tentang"
            />
          </div>
        </nav>
      </div>
    </div>
  );
}
