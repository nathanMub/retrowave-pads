import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "15px 20px",
      borderBottom: "1px solid #222"
    }}>
      <h2 className="glow">RetroWave Pads</h2>

      <div style={{ display: "flex", gap: "15px" }}>
        <Link href="/">Home</Link>
        <Link href="/product/after-school-dream">Shop</Link>
      </div>
    </nav>
  );
}
