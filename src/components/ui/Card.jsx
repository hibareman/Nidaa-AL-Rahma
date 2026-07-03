export default function Card({ children, className = "", as: Component = "article" }) {
  return (
    <Component
      className={`rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm shadow-slate-900/5 transition-colors duration-300 ${className}`}
    >
      {children}
    </Component>
  );
}
