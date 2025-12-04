// src/pages/NotFound.tsx
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: "black",
        color: "white",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1 style={{ fontSize: "2rem", fontWeight: 700 }}>404 – Page Not Found</h1>
      <Link
        to="/"
        style={{ fontSize: "0.9rem", color: "#60a5fa" }}
      >
        Go back home
      </Link>
    </div>
  );
}
