import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <Link href={`/product/${product.id}`}>
      <div style={{
        padding: "15px",
        border: "1px solid #333",
        borderRadius: "12px",
        background: "rgba(255,255,255,0.03)"
      }}>
        <h3>{product.name}</h3>
        <p style={{ color: "#aaa" }}>{product.story}</p>
        <p style={{ color: "#39ff88" }}>${product.price}</p>
      </div>
    </Link>
  );
}
