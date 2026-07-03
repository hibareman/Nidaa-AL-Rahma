const variants = {
  primary:
    "bg-water-blue text-white shadow-sm shadow-water-blue/20 hover:bg-deep-teal focus-visible:outline-water-blue",
  secondary:
    "border border-[var(--border)] bg-[var(--surface)] text-[var(--heading)] hover:border-water-blue hover:text-water-blue focus-visible:outline-water-blue",
  ghost:
    "text-[var(--heading)] hover:bg-[var(--surface-soft)] focus-visible:outline-water-blue",
};

export default function Button({
  children,
  href,
  className = "",
  variant = "primary",
  ...props
}) {
  const Component = href ? "a" : "button";
  const componentProps = href
    ? { href, ...props }
    : { type: props.type || "button", ...props };

  return (
    <Component
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 ${variants[variant]} ${className}`}
      {...componentProps}
    >
      {children}
    </Component>
  );
}
