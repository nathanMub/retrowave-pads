import { products } from "../data/products";

export default function Home() {
  return (
    <main style={{ padding: "20px", color: "white", background: "#0b001a" }}>
      
      <h1 style={{ fontSize: "40px" }}>
        Relive the screens that raised you.
      </h1>

      <p style={{ color: "#aaa" }}>
        Nostalgia mousepads inspired by childhood memories.
      </p>

      <h2 style={{ marginTop: "30px" }}>Featured Products</h2>

      {products.map((p) => (
        <div
          key={p.id}
          style={{
            border: "1px solid #333",
            padding: "10px",
            marginTop: "10px",
            borderRadius: "10px",
          }}
        >
          <h3>{p.name}</h3>
          <p>{p.story}</p>
          <p>${p.price}</p>
        </div>
      ))}
    </main>
  );
          }
