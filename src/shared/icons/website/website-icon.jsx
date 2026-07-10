export default function WebsiteIcon({ className = "" }) {
  return (
    <svg
      className={`icon website-icon ${className}`}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M3,22H21a1,1,0,0,0,1-1V3a1,1,0,0,0-1-1H3A1,1,0,0,0,2,3V21A1,1,0,0,0,3,22ZM4,10H6V20H4ZM20,20H8V10H20ZM4,4H20V8H4Z"
      />
    </svg>
  );
}