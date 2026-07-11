export default function HtmlIcon({ className = "" }) {
  return (
    <svg
      className={`icon html-icon ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"

      strokeWidth={1.5}
    >
      <path d="M9.263 14.105v1.053l3.158 1.579 3.158-1.579v-3.684H9.263V7.263h6.316M12.421 22l8.421-4.737V2H4v15.263L12.421 22Z" />
    </svg>
  );
}