import { useId } from "react";
export default function BrandSeal() {
  const id = useId();
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 120 120"
      fill="currentColor"
      aria-hidden="true"
    >
      <defs>
        <path id={id} d="M60 13a47 47 0 1 1-.01 0" />
      </defs>
      <text
        fontFamily="Maison Neue Extended, Arial, sans-serif"
        fontSize="7.2"
        fontWeight="700"
        letterSpacing="2"
      >
        <textPath href={`#${id}`} textLength="293" lengthAdjust="spacing">
          M.A.D COLLABORATIVES · MAKE A DIFFERENCE ·{" "}
        </textPath>
      </text>
    </svg>
  );
}
