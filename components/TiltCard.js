"use client";

import { useRef } from "react";

export default function TiltCard({ children }) {
  const ref = useRef();

  const handleMove = (e) => {
    const card = ref.current;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 10;
    const rotateY = (x - centerX) / 10;

    card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const reset = () => {
    ref.current.style.transform = "rotateX(0deg) rotateY(0deg)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{
        transition: "0.2s",
        transformStyle: "preserve-3d"
      }}
    >
      {children}
    </div>
  );
}
