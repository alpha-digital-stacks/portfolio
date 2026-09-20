type SectionHeadingProps = {
  title: string;
  index: string;
  eyebrow?: string;
};

const SectionHeading = ({ title, index, eyebrow }: SectionHeadingProps) => {
  return (
    <div className="mb-10 md:mb-16 flex items-end justify-between gap-6 border-b border-primary/25 pb-6 md:pb-8">
      <div className="space-y-2">
        {eyebrow ? (
          <p className="text-xs md:text-sm tracking-[0.28em] uppercase text-primary font-medium">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="text-3xl md:text-5xl lg:text-[56px] leading-tight">
          {title}
        </h2>
      </div>
      <p className="hidden sm:block text-sm md:text-base tracking-[0.2em] text-primary/80">
        {index}
      </p>
    </div>
  );
};

export default SectionHeading;
