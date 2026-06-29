"use client";

import { useEffect, useState } from "react";

export default function Countdown() {
  const target = new Date();
  target.setHours(target.getHours() + 5);

  const [time, setTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = target - now;

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTime(`${hours}h ${minutes}m ${seconds}s`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      padding: "15px",
      background: "rgba(0,0,0,0.4)",
      border: "1px solid #333",
      borderRadius: "12px",
      marginTop: "20px"
    }}>
      🔥 DROP LIVE IN: {time}
    </div>
  );
}
