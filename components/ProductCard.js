"use client";

import { motion } from "framer-motion";
import { useCart } from "../context/CartContext";
import Link from "next/link";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <motion.div
      whileHover={{ rotateX: 8, rotateY: 8, scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200 }}
      style={{
        perspective: "1000px"
      }}
    >
      <div style={{
        background: "rgba(255,255,255,0.05)",
        padding: "15px",
        borderRadius: "16px",
        border: "1px solid #333",
        transformStyle: "preserve-3d"
      }}>

        {/* FAKE AI MOUSEPAD IMAGE */}
        <div style={{
          height: "140px",
          borderRadius: "12px",
          backgroundImage: `url(https://source.unsplash.com/400x300/?mousepad,abstract,neon,desk)`,
          backgroundSize: "cover",
          marginBottom: "10px"
        }} />

        <h3>{product.name}</h3>
        <p style={{ color: "#aaa", fontSize: "12px" }}>
          {product.story}
        </p>

        <p style={{ color: "#39ff88" }}>${product.price}</p>

        <button
          onClick={() => addToCart(product)}
          style={{
            marginTop: "10px",
            width: "100%",
            padding: "8px",
            background: "#ff4fd8",
            border: "none",
            borderRadius: "10px"
          }}
        >
          Add to Cart
        </button>

      </div>
    </motion.div>
  );
}
