import Container from "./Container";

const CTACard = () => {
  return (
    <Container>
      <div className="flex flex-col items-center justify-between gap-4 rounded-md bg-linear-to-r from-neutral-500 via-neutral-800 to-orange-600 px-4 py-4 font-semibold tracking-tighter md:flex-row dark:from-neutral-800">
        <h3 className="flex items-center text-white">
          <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-orange-500 duration-300" />
          Early Bird Sale
        </h3>
        <button className="flex cursor-pointer items-center rounded-full bg-orange-400 px-4 py-2 text-sm tracking-tight text-white hover:opacity-95">
          Claim your spot
        </button>
      </div>
    </Container>
  );
};

export default CTACard;
