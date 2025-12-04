import { useState, useRef, useEffect } from "react";

type PostCardProps = {
  id: string;
  authorName: string;
  authorHandle: string;
  content: string;
  createdAt?: Date | null;
  likes: string[];
  currentUserId?: string;
  postOwnerId: string;
  onLike: (id: string, hasLiked: boolean) => void;
  onDelete?: (id: string, ownerId: string) => void;
};

function formatTime(date?: Date | null) {
  if (!date) return "now";
  const diffMs = Date.now() - date.getTime();
  const sec = Math.floor(diffMs / 1000);
  if (sec < 60) return `${sec}s`;
  const min = Math.floor(sec / 60);
  if (min < 60) return `${min}m`;
  const hr = Math.floor(min / 60);
  if (hr < 24) return `${hr}h`;
  const d = Math.floor(hr / 24);
  return `${d}d`;
}

export default function PostCard({
  id,
  authorName,
  authorHandle,
  content,
  createdAt,
  likes,
  currentUserId,
  postOwnerId,
  onLike,
  onDelete,
}: PostCardProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const hasLiked = currentUserId ? likes.includes(currentUserId) : false;
  const canDelete = currentUserId === postOwnerId;

  const menuRef = useRef<HTMLDivElement | null>(null);

  const handleLike = () => onLike(id, hasLiked);

  const handleDelete = () => {
    if (!canDelete || !onDelete) return;
    if (confirm("Delete this post?")) onDelete(id, postOwnerId);
    setMenuOpen(false);
  };

  // Close menu on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }
    if (menuOpen) document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  const avatarUrl = `https://api.dicebear.com/9.x/thumbs/svg?seed=${encodeURIComponent(
    authorHandle || authorName
  )}`;

  return (
    <div className="stellar-post">
      <div className="stellar-post-card">
        <div style={{ display: "flex", gap: "12px" }}>
          {/* Avatar */}
          <div
            className="stellar-post-avatar"
            style={{
              width: 40,
              height: 40,
              backgroundImage: `url(${avatarUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "999px",
              border: "1px solid rgba(148,163,184,0.5)",
              flexShrink: 0,
            }}
          />

          {/* Content */}
          <div style={{ flex: 1 }}>
            {/* Header with name + timestamp + menu */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 4,
              }}
            >
              <div>
                <span className="stellar-post-author">{authorName}</span>{" "}
                <span className="stellar-post-handle">{authorHandle}</span>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <div className="stellar-post-time">
                  {formatTime(createdAt)}
                </div>

                {/* 3-dot menu */}
                {currentUserId && (
                  <div style={{ position: "relative" }} ref={menuRef}>
                    <button
                      onClick={() => setMenuOpen((v) => !v)}
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        padding: "4px 6px",
                        borderRadius: 6,
                        color: "#9ca3af",
                        fontSize: 16,
                      }}
                    >
                      ⋯
                    </button>

                    {/* Dropdown */}
                    {menuOpen && (
                      <div
                        style={{
                          position: "absolute",
                          top: "22px",
                          right: 0,
                          width: 130,
                          background:
                            "rgba(15,23,42,0.96)",
                          border: "1px solid rgba(148,163,184,0.35)",
                          borderRadius: 8,
                          boxShadow:
                            "0 8px 22px rgba(0,0,0,0.45)",
                          padding: "6px 0",
                          zIndex: 100,
                        }}
                      >
                        {canDelete && (
                          <button
                            onClick={handleDelete}
                            style={{
                              width: "100%",
                              textAlign: "left",
                              padding: "8px 12px",
                              background: "none",
                              border: "none",
                              cursor: "pointer",
                              fontSize: 13,
                              color: "#f87171",
                              transition: "0.15s",
                            }}
                            onMouseEnter={(e) =>
                              (e.currentTarget.style.background =
                                "rgba(244,63,94,0.12)")
                            }
                            onMouseLeave={(e) =>
                              (e.currentTarget.style.background = "none")
                            }
                          >
                            Delete Post
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Post text */}
            <div className="stellar-post-content">{content}</div>

            {/* Actions row */}
            <div
              style={{
                display: "flex",
                gap: 16,
                marginTop: 10,
                alignItems: "center",
              }}
            >
              <button
                onClick={handleLike}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: 18,
                  color: hasLiked ? "#fb7185" : "#9ca3af",
                  transition: "0.2s",
                }}
              >
                {hasLiked ? "❤️" : "🤍"}
              </button>

              <span style={{ fontSize: 12, color: "#9ca3af" }}>
                {likes.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
