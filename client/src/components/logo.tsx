import React from "react";

export default function Logo({ text = "Raqmi", className = "" }: { text?: string; className?: string }) {
  return (
    <div className={`flex items-center ${className}`} aria-label={text}>
      {/* Icon */}
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mr-2"
      >
        {/* Outer square with brand stroke */}
        <rect x="1.5" y="1.5" width="25" height="25" rx="4" className="stroke-primary" strokeWidth="3" />
        {/* Inner square */}
        <rect x="6" y="6" width="16" height="16" rx="2" fill="white" />
        {/* Diagonal triangle pointing to top-right */}
        <path d="M8 20 L20 8 L8 8 Z" fill="#4F46E5" opacity="0.9" />
      </svg>
      {/* Wordmark */}
      <span className="text-[20px] font-extrabold tracking-tight text-[#0b1230]">{text}</span>
    </div>
  );
}
