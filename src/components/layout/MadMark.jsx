/** M.A.D. Collaboratives mark: the two-triangle "M" in a circle, redrawn from the studio's logo. */
export default function MadMark({ title }) {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : "true"}
    >
      <circle cx="20" cy="20" r="19.25" stroke="currentColor" strokeWidth="1.1" />
      <path
        d="M8.6 30.4 13.4 9.4 18.6 30.4M20.6 30.4 25.8 9.4 30.9 30.4M7.6 30.4H32"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinejoin="miter"
      />
    </svg>
  );
}

/** "M.A.D." letterforms from the logo: triangular M and A, a stem-and-bowl D. */
export function MadWordmark({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 76 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="M.A.D."
    >
      <g stroke="currentColor" strokeWidth="1.6" strokeLinejoin="miter">
        <path d="M1 25 6 1.5 11 25M11 25 16 1.5 21 25M0.5 25H21.5" />
        <path d="M29 25 35 1.5 41 25M29.6 25 39.4 17.4" />
        <path d="M49 1.5V25M52 1.5a11.75 11.75 0 0 1 0 23.5Z" />
      </g>
      <g fill="currentColor">
        <circle cx="24.6" cy="24" r="1.4" />
        <circle cx="44.6" cy="24" r="1.4" />
        <circle cx="68.8" cy="24" r="1.4" />
      </g>
    </svg>
  );
}
