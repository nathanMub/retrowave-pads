import { products } from "../../../data/products";

export default function ProductPage({ params }) {
  const product = products.find((p) => p.id === params.id);

  if (!product) return <div>Not found</div>;

  return (
    <div style={{ padding: "30px" }}>
      <h1 className="glow" style={{ fontSize: "40px" }}>
        {product.name}
      </h1>

      <p style={{ color: "#aaa", marginTop: "10px" }}>
        {product.story}
      </p>

      <h2 style={{ marginTop: "20px", color: "#39ff88" }}>
        ${product.price}
      </h2>

      <button style={{
        marginTop: "20px",
        padding: "10px 20px",
        background: "#ff4fd8",
        border: "none",
        borderRadius: "10px"
      }}>
        Add to Cart
      </button>
    </div>
  );
}
