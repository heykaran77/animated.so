const Container = ({ children, className, ...props }) => {
  return (
    <div {...props} className={`container mx-auto max-w-4xl px-4 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
