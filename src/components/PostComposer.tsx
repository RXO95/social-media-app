import type { FormEvent } from "react";
import { useState } from "react";

type PostComposerProps = {
  disabled: boolean;
  avatarUrl?: string;
  placeholder: string;
  onPost: (text: string) => Promise<void> | void;
};

export default function PostComposer({
  disabled,
  avatarUrl,
  placeholder,
  onPost,
}: PostComposerProps) {
  const [text, setText] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!text.trim() || disabled) return;

    await onPost(text.trim());
    setText("");
  };

  const hasAvatar = !!avatarUrl;

  return (
    <section className="stellar-composer">
      <div className="stellar-composer-inner">
        <div
          className="stellar-avatar"
          style={
            hasAvatar
              ? {
                  backgroundImage: `url(${avatarUrl})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }
              : undefined
          }
        />
        <div style={{ flex: 1 }}>
          <form onSubmit={handleSubmit}>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder={placeholder}
              disabled={disabled}
              className="stellar-textarea"
            />
            <div className="stellar-composer-footer">
              <button
                type="submit"
                disabled={disabled || !text.trim()}
                style={{
                  borderRadius: 999,
                  padding: "8px 16px",
                  border: "none",
                  background:
                    disabled || !text.trim()
                      ? "rgba(59,130,246,0.45)"
                      : "linear-gradient(135deg, #3b82f6, #38bdf8)",
                  color: "white",
                  fontSize: 13,
                  fontWeight: 500,
                  cursor:
                    disabled || !text.trim() ? "not-allowed" : "pointer",
                }}
              >
                Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
