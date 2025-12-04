// src/pages/Profile.tsx
import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import {
  arrayRemove,
  arrayUnion,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../firebase";

import Sidebar from "../components/Sidebar";
import RightSidebar from "../components/RightSidebar";
import PostCard from "../components/PostCard";

type Post = {
  id: string;
  content: string;
  authorName: string;
  authorHandle: string;
  createdAt?: Date | null;
  likes: string[];
  userId: string;
};

export default function Profile() {
  const { user } = useAuth();
  const [posts, setPosts] = useState<Post[]>([]);

  // Load only this user's posts
  useEffect(() => {
    if (!user) return;

    const q = query(
      collection(db, "posts"),
      where("userId", "==", user.uid)
    );

    const unsub = onSnapshot(q, (snapshot) => {
      const docs: Post[] = snapshot.docs.map((d) => {
        const data = d.data() as any;
        const createdAt = data.createdAt?.toDate
          ? data.createdAt.toDate()
          : null;

        return {
          id: d.id,
          content: data.content ?? "",
          authorName: data.authorName ?? "Stellar User",
          authorHandle: data.authorHandle ?? "@stellar",
          createdAt,
          likes: data.likes ?? [],
          userId: data.userId ?? "",
        };
      });

      // newest first
      docs.sort((a, b) => {
        if (!a.createdAt && !b.createdAt) return 0;
        if (!a.createdAt) return 1;
        if (!b.createdAt) return -1;
        return b.createdAt.getTime() - a.createdAt.getTime();
      });

      setPosts(docs);
    });

    return () => unsub();
  }, [user]);

  const toggleLike = async (postId: string, hasLiked: boolean) => {
    if (!user) return;

    const postRef = doc(db, "posts", postId);
    await updateDoc(postRef, {
      likes: hasLiked ? arrayRemove(user.uid) : arrayUnion(user.uid),
    });
  };

  const deletePost = async (postId: string, ownerId: string) => {
    if (!user || user.uid !== ownerId) return;
    const postRef = doc(db, "posts", postId);
    await deleteDoc(postRef);
  };

  const avatarUrl =
    user?.photoURL ?? "https://api.dicebear.com/9.x/thumbs/svg?seed=stellar";

  return (
    <div className="stellar-bg">
      <div className="stellar-shell">
        {/* LEFT SIDEBAR */}
        <Sidebar />

        {/* MAIN PROFILE AREA */}
        <main className="stellar-main">
          {/* Header */}
          <div className="stellar-header">
            <h1 style={{ fontSize: 18, fontWeight: 600 }}>Profile</h1>
          </div>

          {/* If not logged in */}
          {!user ? (
            <div
              style={{
                padding: "24px 20px",
                fontSize: 14,
                color: "#9ca3af",
              }}
            >
              You&apos;re not logged in. Go to Home and sign in with Google
              to view your Stellar profile.
            </div>
          ) : (
            <>
              {/* Profile info card */}
              <section
                style={{
                  padding: "16px 20px",
                  borderBottom: "1px solid rgba(148,163,184,0.28)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: 16,
                    alignItems: "center",
                    marginBottom: 10,
                  }}
                >
                  <div
                    style={{
                      width: 64,
                      height: 64,
                      borderRadius: 999,
                      backgroundImage: `url(${avatarUrl})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      border: "1px solid rgba(148,163,184,0.6)",
                    }}
                  />
                  <div>
                    <div
                      style={{
                        fontSize: 18,
                        fontWeight: 600,
                        color: "#e5e7eb",
                      }}
                    >
                      {user.displayName ?? "Stellar User"}
                    </div>
                    <div
                      style={{
                        fontSize: 13,
                        color: "#9ca3af",
                      }}
                    >
                      @{user.email?.split("@")[0]}
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    fontSize: 13,
                    color: "#d1d5db",
                    marginTop: 6,
                  }}
                >
                  <div>Email: {user.email}</div>
                  <div style={{ marginTop: 4 }}>
                    Posts: <strong>{posts.length}</strong>
                  </div>
                </div>
              </section>

              {/* User's posts */}
              <section className="stellar-feed">
                {posts.length === 0 ? (
                  <div
                    style={{
                      padding: "24px 20px",
                      fontSize: 13,
                      color: "#9ca3af",
                      textAlign: "center",
                    }}
                  >
                    You haven&apos;t posted anything yet. Your Stellar
                    journey starts when you share your first thought ✨
                  </div>
                ) : (
                  posts.map((post) => (
                    <PostCard
                      key={post.id}
                      id={post.id}
                      authorName={post.authorName}
                      authorHandle={post.authorHandle}
                      content={post.content}
                      createdAt={post.createdAt}
                      likes={post.likes}
                      currentUserId={user.uid}
                      postOwnerId={post.userId}
                      onLike={toggleLike}
                      onDelete={deletePost}
                    />
                  ))
                )}
              </section>
            </>
          )}
        </main>

        {/* RIGHT SIDEBAR */}
        <RightSidebar />
      </div>
    </div>
  );
}
