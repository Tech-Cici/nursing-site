import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="logo" aria-label="Better Years Services — home">
      <span className="logo-mark" aria-hidden="true">
        B
      </span>
      <span>
        <span className="logo-name">Better Years</span>
        <span className="logo-sub">Home Care Services</span>
      </span>
    </Link>
  );
}
