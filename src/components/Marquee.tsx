import React from "react";
export default function Marquee({ children }: { children?: React.ReactNode }) {
  const content = children ?? (
    <span className="px-4">
      🦴 moondog • CUTE • PLAY • FETCH • GOOD DOG • 🐾&nbsp;
    </span>
  );
  return (
    <div className="relative overflow-hidden rounded-2xl border border-moondog-brown/10 bg-white/60">
      <div className="marquee-track">
        <div className="marquee-inner">
          {content}
          {content}
          {content}
          {content}
        </div>
        <div className="marquee-inner" aria-hidden>
          {content}
          {content}
          {content}
          {content}
        </div>
      </div>
    </div>
  );
}
