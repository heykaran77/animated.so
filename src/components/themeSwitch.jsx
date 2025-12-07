import { BsMoonFill, BsSunFill, BsWindow } from "react-icons/bs";
import useTheme from "../app/useTheme";
import { useEffect } from "react";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();

  const baseClass =
    "cursor-pointer text-black dark:text-white p-2 flex border items-center justify-center";
  const activeClass =
    "bg-neutral-400/40 rounded-lg dark:bg-neutral-600/40 border-neutral-400";

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e) => {
      if (theme === "system") {
        setTheme("system");
      }
    };

    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, [theme]);

  return (
    <div className="fixed top-4 right-4 z-10 flex gap-1 rounded-xl border border-neutral-400 bg-neutral-200/40 p-1 backdrop-blur-sm transition-all md:right-8 md:gap-2 dark:bg-neutral-800/40">
      <button
        onClick={() => setTheme("system")}
        className={`${baseClass} ${theme === "system" ? activeClass : "rounded-lg border-transparent transition-all duration-300 hover:border hover:border-neutral-400 hover:bg-neutral-400/40 dark:hover:bg-neutral-600/40"} `}
      >
        <BsWindow className={`size-3 md:size-4`} />
      </button>
      <button
        onClick={() => setTheme("light")}
        className={`${baseClass} ${theme === "light" ? activeClass : "rounded-lg border-transparent transition-all duration-300 hover:border hover:border-neutral-400 hover:bg-neutral-400/40 dark:hover:bg-neutral-600/40"} `}
      >
        <BsSunFill className={`size-3 md:size-4`} />
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={`${baseClass} ${theme === "dark" ? activeClass : "rounded-lg border-transparent transition-all duration-300 hover:border hover:border-neutral-400 hover:bg-neutral-400/40 dark:hover:bg-neutral-600/40"} `}
      >
        <BsMoonFill className={`size-3 md:size-4`} />
      </button>
    </div>
  );
};

export default ThemeSwitch;
