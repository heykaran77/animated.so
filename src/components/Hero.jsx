import React from "react";
import Container from "./Container";

const Hero = () => {
  return (
    <Container className="space-y-8 py-8">
      <img src="/logo.webp" alt="animated.so" className="mx-auto" />
      <h2 className="font-sfpro text-center text-6xl font-bold tracking-tighter text-neutral-900">
        We create beautiful{" "}
        <span className="font-serifitalic tracking-tight text-orange-500">
          animations
        </span>{" "}
        for your product.
      </h2>
    </Container>
  );
};

export default Hero;
