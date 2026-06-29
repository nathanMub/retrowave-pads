import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Home() {
  return (
    <main style={{ padding: "20px" }}>

      {/* HERO SECTION */}
      <section style={{
        textAlign: "center",
        padding: "70px 20px"
      }}>
        <h1 className="glow" style={{ fontSize: "52px" }}>
          Relive the screens that raised you.
        </h1>

        <p style={{ color: "#aaa", marginTop: "10px" }}>
          Premium nostalgic mousepads built for your desk, your setup, your memories.
        </p>

        <button style={{
          marginTop: "20px",
          padding: "12px 24px",
          background: "#4fd1ff",
          border: "none",
          borderRadius: "12px",
          fontWeight: "bold"
        }}>
          Shop All Drops
        </button>
      </section>

      {/* BIG PRODUCT WALL */}
      <section>
        <h2 style={{ marginBottom: "15px" }}>🔥 Trending Drops</h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px"
        }}>
          {products.concat(products).map((p, i) => (
            <ProductCard key={i} product={p} />
          ))}
        </div>
      </section>

      {/* LIFESTYLE BANNER */}
      <section style={{
        marginTop: "50px",
        padding: "40px",
        borderRadius: "20px",
        background: "linear-gradient(135deg, #1a0b2e, #000)",
        border: "1px solid #333"
      }}>
        <h2 className="glow">Your desk is your world.</h2>
        <p style={{ color: "#aaa" }}>
          We design mousepads that turn boring setups into nostalgic universes.
        </p>
      </section>

      {/* SECOND PRODUCT WALL (IMPORTANT FOR “STORE FEEL”) */}
      <section style={{ marginTop: "50px" }}>
        <h2>✨ More Designs</h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "15px"
        }}>
          {products.map((p, i) => (
            <ProductCard key={i} product={p} />
          ))}
        </div>
      </section>

    </main>
  );
}
