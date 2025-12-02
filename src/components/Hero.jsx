import Button from "./Button";
import Container from "./Container";
import CTACard from "./CTACard";
import DemoCards from "./WorksCard";

const Hero = () => {
  return (
    <Container className="space-y-8 px-4">
      <img
        src="/logo.webp"
        alt="animated.so"
        className="mx-auto size-16 md:size-32"
      />
      <h2 className="font-sfpro text-center text-5xl font-bold tracking-[-4px] text-neutral-900 max-sm:text-4xl md:text-6xl">
        We create beautiful{" "}
        <span className="font-serifitalic tracking-tight text-orange-500">
          animations
        </span>{" "}
        for your product.
      </h2>
      <button className="mx-auto flex cursor-pointer items-center rounded-md bg-neutral-900 px-4 py-2 font-semibold tracking-tighter text-white hover:bg-neutral-800">
        Book a quick call
      </button>
      <CTACard />
      <DemoCards />
      <Button />
    </Container>
  );
};

export default Hero;
