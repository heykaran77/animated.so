import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const useTheme = create(
  devtools(
    persist(
      (set, get) => ({
        theme: "system",

        setTheme: (newTheme) => {
          set(() => ({
            theme: newTheme,
          }));
          get().applyTheme(newTheme);
        },

        applyTheme: (selectedTheme) => {
          const root = document.documentElement;
          const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

          const apply = (themeValue) => {
            if (themeValue === "dark") {
              root.classList.add("dark");
              root.classList.remove("light");
            } else if (themeValue === "light") {
              root.classList.add("light");
              root.classList.remove("dark");
            } else {
              const systemTheme = mediaQuery.matches ? "dark" : "light";
              root.classList.add(systemTheme);
              root.classList.remove(systemTheme === "dark" ? "light" : "dark");
            }
          };

          apply(selectedTheme);
        },
      }),
      { name: "theme" },
    ),
  ),
);

export default useTheme;
