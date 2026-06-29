"use client";

import { motion } from "framer-motion";

export default function DropHero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      style={{
        textAlign: "center",
        padding: "80px 20px"
      }}
    >
      <h1 style={{ fontSize: "60px" }} className="glow">
        DROP LIVE NOW
      </h1>

      <p style={{ color: "#aaa" }}>
        Limited nostalgia mousepads — once sold out, gone forever.
      </p>

      <button style={{
        marginTop: "20px",
        padding: "12px 24px",
        background: "#ff4fd8",
        border: "none",
        borderRadius: "12px"
      }}>
        Shop The Drop
      </button>
    </motion.div>
  );
}
