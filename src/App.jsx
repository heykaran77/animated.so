import useTheme from "./app/useTheme";
import Container from "./components/Container";
import Grid from "./components/Grid";
import Hero from "./components/Hero";
import ThemeSwitch from "./components/themeSwitch";

const App = () => {
  useTheme.getState().applyTheme(useTheme.getState().theme);
  return (
    <div className="dark:bg-background relative isolate flex min-h-screen flex-col selection:bg-orange-200 selection:text-orange-400">
      <Grid />
      <ThemeSwitch />
      <Container className="relative flex-1 py-6">
        <Hero />
      </Container>
      <a
        href="#"
        className="font-serifitalic mx-auto mb-4 text-xl font-medium text-neutral-700 italic transition-colors hover:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-300"
      >
        animated.so
      </a>
    </div>
  );
};

export default App;
