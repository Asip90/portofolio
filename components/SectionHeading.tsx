import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-3",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="max-w-2xl text-balance text-3xl font-extrabold leading-[1.1] sm:text-4xl md:text-[2.6rem]">
        {title}
      </h2>
      {intro && (
        <p
          className={cn(
            "max-w-xl text-pretty text-base leading-relaxed text-muted",
            align === "center" ? "mx-auto" : ""
          )}
        >
          {intro}
        </p>
      )}
    </Reveal>
  );
}
