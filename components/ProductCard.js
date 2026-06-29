import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <Link href={`/product/${product.id}`}>
      <div style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid #2a2a2a",
        borderRadius: "16px",
        padding: "15px",
        transition: "0.3s",
        cursor: "pointer",
        position: "relative",
        overflow: "hidden"
      }}>

        {/* GLOW EFFECT */}
        <div style={{
          position: "absolute",
          width: "200px",
          height: "200px",
          background: "radial-gradient(circle, rgba(79,209,255,0.2), transparent)",
          top: "-50px",
          right: "-50px"
        }} />

        {/* PRODUCT VISUAL BLOCK (fake mousepad preview) */}
        <div style={{
          height: "120px",
          borderRadius: "12px",
          background: "linear-gradient(135deg, #4fd1ff33, #ff4fd833)",
          marginBottom: "10px"
        }} />

        <h3 style={{ margin: "0" }}>{product.name}</h3>

        <p style={{ color: "#aaa", fontSize: "12px" }}>
          {product.story}
        </p>

        <p style={{ color: "#39ff88", marginTop: "8px" }}>
          ${product.price}
        </p>

        <button style={{
          marginTop: "10px",
          width: "100%",
          padding: "8px",
          background: "#ff4fd8",
          border: "none",
          borderRadius: "10px",
          color: "black",
          fontWeight: "bold"
        }}>
          View Product
        </button>

      </div>
    </Link>
  );
}
