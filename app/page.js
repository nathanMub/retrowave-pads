"use client";

import { motion } from "framer-motion";
import Countdown from "../components/Countdown";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Home() {
  return (
    <main style={{ padding: "20px" }}>

      {/* HERO */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{ textAlign: "center", padding: "60px 0" }}
      >
        <h1 style={{ fontSize: "52px" }} className="glow">
          Relive the screens that raised you.
        </h1>

        <p style={{ color: "#aaa" }}>
          Nostalgia mousepads for dream setups.
        </p>

        <Countdown />
      </motion.section>

      {/* PRODUCT REEL */}
      <section style={{
        display: "flex",
        overflowX: "auto",
        gap: "15px",
        padding: "20px"
      }}>
        {products.map((p) => (
          <div style={{ minWidth: "250px" }}>
            <ProductCard product={p} />
          </div>
        ))}
      </section>

    </main>
  );
}
