const Grid = () => {
  return (
    <svg
      className="absolute inset-0 -z-10 h-full w-full text-neutral-200 dark:text-neutral-800"
      preserveAspectRatio="none"
    >
      <defs>
        <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
          <path
            d="M 80 0 L 0 0 0 80"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="8,8"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  );
};

export default Grid;
