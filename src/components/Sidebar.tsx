import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Sidebar() {
  const { user, loading, login, logout } = useAuth();

  const handleLogin = async () => {
    await login();
  };

  const handleLogout = async () => {
    await logout();
  };

  return (
    <aside className="stellar-sidebar">
      <div>
        <div className="stellar-logo">
          <div className="stellar-logo-icon" />
          <span>STELLAR</span>
        </div>

        <nav className="stellar-nav">
          <Link to="/" className="stellar-nav-item stellar-nav-primary">
            <span className="stellar-nav-icon">🏠</span>
            <span>Home</span>
          </Link>
          <Link to="/profile" className="stellar-nav-item">
            <span className="stellar-nav-icon">👤</span>
            <span>Profile</span>
          </Link>
          <button className="stellar-nav-item" type="button">
            <span className="stellar-nav-icon">🔔</span>
            <span>Notifications</span>
          </button>
          <button className="stellar-nav-item" type="button">
            <span className="stellar-nav-icon">🔎</span>
            <span>Explore</span>
          </button>
        </nav>
      </div>

      <div className="stellar-sidebar-footer">
        {loading ? (
          <span>Loading…</span>
        ) : !user ? (
          <button
            onClick={handleLogin}
            style={{
              marginTop: 10,
              width: "100%",
              borderRadius: 999,
              padding: "8px 10px",
              background: "linear-gradient(135deg, #3b82f6, #38bdf8)",
              border: "none",
              color: "white",
              fontWeight: 500,
              cursor: "pointer",
              fontSize: 13,
            }}
          >
            Sign in with Google
          </button>
        ) : (
          <>
            <div style={{ marginBottom: 6 }}>
              <div
                style={{
                  fontWeight: 500,
                  color: "#e5e7eb",
                  fontSize: 13,
                }}
              >
                {user.displayName ?? "Stellar User"}
              </div>
              <div>@{user.email?.split("@")[0]}</div>
            </div>
            <button
              onClick={handleLogout}
              style={{
                borderRadius: 999,
                padding: "6px 10px",
                background: "rgba(15,23,42,0.9)",
                border: "1px solid rgba(148,163,184,0.5)",
                color: "#e5e7eb",
                cursor: "pointer",
                fontSize: 11,
              }}
            >
              Log out
            </button>
          </>
        )}
      </div>
    </aside>
  );
}
