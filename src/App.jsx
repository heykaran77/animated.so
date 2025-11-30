import Container from "./components/Container";
import Grid from "./components/Grid";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div className="relative isolate flex min-h-screen flex-col">
      <Grid />
      <Container className="relative flex-1 py-6">
        <Hero />
      </Container>
      <a
        href="#"
        className="font-serifitalic mx-auto mb-4 text-xl font-medium text-neutral-700 italic transition-colors hover:text-neutral-900"
      >
        animated.so
      </a>
    </div>
  );
};

export default App;
