import { cn } from "@/lib/utils";
import RevealText from "./RevealText";

const SectionHeading = ({
  backgroundText,
  foreGroundText,
  foreGroundClassName,
  backGroundClassName,
}: {
  backgroundText: string;
  foreGroundText: string;
  foreGroundClassName?: string;
  backGroundClassName?: string;
}) => {
  return (
    <div className="relative w-full  h-[200px] flex items-center justify-center">
      <h1
        className={cn(
          "text-center lg:text-8xl md:text-7xl font-semibold opacity-10",
          backGroundClassName
        )}
      >
        {backgroundText}
      </h1>
      <RevealText
        className={cn(
          "dark:text-primary absolute text-5xl opacity-60 dark:opacity-80",
          foreGroundClassName
        )}
        inputString={foreGroundText}
      ></RevealText>
    </div>
  );
};

export default SectionHeading;
