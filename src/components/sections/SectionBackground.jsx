import DecorativeWaterIcons from "./DecorativeWaterIcons.jsx";

export default function SectionBackground({
  density = "low",
  showWellIcon = true,
  className = "",
}) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#f8fdff_0%,#eaf8ff_45%,#ffffff_100%)] dark:bg-[linear-gradient(135deg,#102133_0%,#152b42_52%,#0d2f43_100%)]" />
      <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(ellipse_at_top,rgba(34,199,221,0.22),transparent_66%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(34,199,221,0.16),transparent_68%)]" />
      <div className="absolute inset-x-0 bottom-0 h-[26rem] bg-[linear-gradient(180deg,transparent_0%,rgba(207,237,252,0.66)_100%)] dark:bg-[linear-gradient(180deg,transparent_0%,rgba(34,199,221,0.08)_100%)]" />
      <DecorativeWaterIcons density={density} showWellIcon={showWellIcon} />
    </div>
  );
}
