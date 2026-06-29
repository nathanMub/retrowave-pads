"use client";

import { products } from "../data/products";
import ProductCard from "./ProductCard";

export default function TikTokFeed() {
  return (
    <section
      style={{
        display: "flex",
        gap: "20px",
        overflowX: "auto",
        padding: "20px",
      }}
    >
      {products.map((product) => (
        <div key={product.id} style={{ minWidth: "280px" }}>
          <ProductCard product={product} />
        </div>
      ))}
    </section>
  );
        }
