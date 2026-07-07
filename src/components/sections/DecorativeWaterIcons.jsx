import { motion, useReducedMotion } from "motion/react";
import { CircleDot, Droplet, Landmark, Waves } from "lucide-react";

const iconSets = {
  low: [
    {
      Icon: Droplet,
      className:
        "right-[-2.4rem] top-8 hidden h-36 w-36 text-water-blue/9 dark:text-water-cyan/12 lg:block",
      animate: { y: [0, -12, 0], rotate: [0, 3, 0] },
      duration: 14,
    },
    {
      Icon: Landmark,
      className:
        "left-[-2.2rem] bottom-10 hidden h-32 w-32 text-deep-teal/7 dark:text-water-cyan/10 md:block",
      animate: { y: [0, 10, 0], rotate: [0, -2, 0] },
      duration: 16,
    },
    {
      Icon: Droplet,
      className:
        "left-[48%] top-[40%] hidden h-24 w-24 text-soft-gold/8 dark:text-soft-gold/10 xl:block",
      animate: { y: [0, -8, 0], rotate: [0, 2, 0] },
      duration: 12,
    },
    {
      Icon: Waves,
      className:
        "right-[14%] bottom-[18%] hidden h-24 w-24 text-water-cyan/8 dark:text-water-cyan/10 xl:block",
      animate: { y: [0, 8, 0], rotate: [0, -1.5, 0] },
      duration: 15,
    },
    {
      Icon: CircleDot,
      className:
        "left-[18%] top-[18%] hidden h-20 w-20 text-water-blue/7 dark:text-water-cyan/9 2xl:block",
      animate: { y: [0, -7, 0], rotate: [0, 2.5, 0] },
      duration: 13,
    },
  ],
  medium: [
    {
      Icon: Droplet,
      className:
        "right-[-3rem] top-7 hidden h-40 w-40 text-water-blue/10 dark:text-water-cyan/13 lg:block",
      animate: { y: [0, -14, 0], rotate: [0, 3, 0] },
      duration: 14,
    },
    {
      Icon: Landmark,
      className:
        "left-[-2.6rem] bottom-8 hidden h-36 w-36 text-deep-teal/8 dark:text-water-cyan/11 md:block",
      animate: { y: [0, 12, 0], rotate: [0, -2, 0] },
      duration: 17,
    },
    {
      Icon: Droplet,
      className:
        "left-[45%] top-[34%] hidden h-24 w-24 text-soft-gold/9 dark:text-soft-gold/11 xl:block",
      animate: { y: [0, -9, 0], rotate: [0, 2, 0] },
      duration: 12,
    },
    {
      Icon: Waves,
      className:
        "right-[18%] bottom-[16%] hidden h-28 w-28 text-water-cyan/9 dark:text-water-cyan/11 xl:block",
      animate: { y: [0, 8, 0], rotate: [0, -1.5, 0] },
      duration: 15,
    },
    {
      Icon: CircleDot,
      className:
        "left-[16%] top-[16%] hidden h-24 w-24 text-water-blue/8 dark:text-water-cyan/10 xl:block",
      animate: { y: [0, -8, 0], rotate: [0, 2.5, 0] },
      duration: 13,
    },
    {
      Icon: Droplet,
      className:
        "right-[34%] top-[12%] hidden h-16 w-16 text-water-blue/8 dark:text-water-cyan/10 2xl:block",
      animate: { y: [0, 7, 0], rotate: [0, -2, 0] },
      duration: 11,
    },
    {
      Icon: Landmark,
      className:
        "right-[7%] bottom-[38%] hidden h-20 w-20 text-deep-teal/7 dark:text-water-cyan/9 2xl:block",
      animate: { y: [0, -8, 0], rotate: [0, 1.8, 0] },
      duration: 18,
    },
  ],
};

export default function DecorativeWaterIcons({
  density = "low",
  className = "",
  showWellIcon = true,
}) {
  const prefersReducedMotion = useReducedMotion();
  const icons = iconSets[density] || iconSets.low;
  const visibleIcons = showWellIcon ? icons : icons.filter(({ Icon }) => Icon !== Landmark);

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {visibleIcons.map(({ Icon, className: iconClassName, animate, duration }, index) => (
        <motion.div
          key={`${density}-${index}`}
          className={`absolute drop-shadow-[0_18px_36px_rgba(21,155,215,0.08)] ${iconClassName}`}
          initial={false}
          animate={prefersReducedMotion ? undefined : animate}
          transition={
            prefersReducedMotion
              ? undefined
              : {
                  duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
        >
          <Icon className="h-full w-full" strokeWidth={1.2} />
        </motion.div>
      ))}
    </div>
  );
}
