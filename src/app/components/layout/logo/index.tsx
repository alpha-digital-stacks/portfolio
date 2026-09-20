import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="group flex items-center gap-3">
      <svg
        width="44"
        height="44"
        viewBox="0 0 69 69"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300 group-hover:scale-105 shrink-0"
        aria-hidden="true"
      >
        <circle cx="34.5" cy="34.5" r="34.5" fill="#FE4300" />
        <path
          d="M40.5 18H46.5V42.2C46.5 51.1 40.3 55.8 32.4 55.8C24.2 55.8 18.5 50.4 18.5 42.6H24.8C24.8 47 28 50.1 32.4 50.1C37.1 50.1 40.5 47.1 40.5 42.2V18Z"
          fill="white"
        />
      </svg>
      <span className="hidden sm:flex flex-col leading-none">
        <span className="text-sm font-semibold tracking-tight">Junaid</span>
        <span className="text-[11px] text-muted-foreground tracking-[0.18em] uppercase mt-1">
          Studio
        </span>
      </span>
    </Link>
  );
};

export default Logo;
