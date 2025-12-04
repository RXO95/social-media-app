// src/pages/Home.tsx
import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import {
  addDoc,
  arrayRemove,
  arrayUnion,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";

import Sidebar from "../components/Sidebar";
import PostComposer from "../components/PostComposer";
import PostCard from "../components/PostCard";
import RightSidebar from "../components/RightSidebar";

type Post = {
  id: string;
  content: string;
  authorName: string;
  authorHandle: string;
  createdAt?: Date | null;
  likes: string[];
  userId: string;
};

// Demo posts to visually fill the feed
const demoPosts: Post[] = [
  {
    id: "demo-1",
    content:
      "Stellar is good but also try SkillConnect :)",
    authorName: "The greatest Developer",
    authorHandle: "@dev_master",
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2h ago
    likes: ["demo-a", "demo-b", "demo-c"],
    userId: "demo-user-1",
  },
  {
    id: "demo-2",
    content:
      "NO VIBE CODING HERE. JUST COSMIC CREATIVITY.",
    authorName: "Arch User",
    authorHandle: "@arch_user",
    createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000), // 5h ago
    likes: ["demo-a"],
    userId: "demo-user-2",
  },
  {
    id: "demo-3",
    content:
      "Reminder: your first version doesn’t have to be perfect.\n\nIt just has to exist.",
    authorName: "Someone you know",
    authorHandle: "@orbiting_dev",
    createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1d ago
    likes: ["demo-a", "demo-b"],
    userId: "demo-user-3",
  },
];

export default function Home() {
  const { user } = useAuth();
  const [posts, setPosts] = useState<Post[]>([]);

  // Listen to posts in Firestore
  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
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

      setPosts(docs);
    });

    return () => unsubscribe();
  }, []);

  // Create a new post
  const handleCreatePost = async (text: string) => {
    if (!user) return;

    await addDoc(collection(db, "posts"), {
      content: text,
      authorName: user.displayName ?? "Stellar User",
      authorHandle: `@${user.email?.split("@")[0] ?? "anonymous"}`,
      createdAt: serverTimestamp(),
      userId: user.uid,
      likes: [],
    });
  };

  // Like / Unlike
  const toggleLike = async (postId: string, hasLiked: boolean) => {
    if (!user) return;
    const postRef = doc(db, "posts", postId);
    await updateDoc(postRef, {
      likes: hasLiked ? arrayRemove(user.uid) : arrayUnion(user.uid),
    });
  };

  // Delete post (only if you own it)
  const deletePost = async (postId: string, ownerId: string) => {
    if (!user || user.uid !== ownerId) return;
    const postRef = doc(db, "posts", postId);
    await deleteDoc(postRef);
  };

  const avatarUrl = user?.photoURL;

  return (
    <div className="stellar-bg">
      <div className="stellar-shell">
        {/* LEFT SIDEBAR */}
        <Sidebar />

        {/* MAIN FEED */}
        <main className="stellar-main">
          {/* Top header */}
          <div className="stellar-header">
            <h1 style={{ fontSize: 18, fontWeight: 600 }}>Home</h1>
          </div>

          {/* Composer */}
          <PostComposer
            disabled={!user}
            avatarUrl={avatarUrl ?? undefined}
            placeholder={
              user
                ? "What’s happening in your universe?"
                : "Sign in to share something..."
            }
            onPost={handleCreatePost}
          />

          {/* Feed */}
          <section className="stellar-feed">
            {/* Always show demo tweets at the top */}
            {demoPosts.map((post) => (
              <PostCard
                key={post.id}
                id={post.id}
                authorName={post.authorName}
                authorHandle={post.authorHandle}
                content={post.content}
                createdAt={post.createdAt}
                likes={post.likes}
                currentUserId={user?.uid}
                postOwnerId={post.userId}
                // Demo posts: no-op handlers
                onLike={() => {}}
                onDelete={undefined}
              />
            ))}

            {/* Real posts from Firestore (if any) */}
            {posts.map((post) => (
              <PostCard
                key={post.id}
                id={post.id}
                authorName={post.authorName}
                authorHandle={post.authorHandle}
                content={post.content}
                createdAt={post.createdAt}
                likes={post.likes}
                currentUserId={user?.uid}
                postOwnerId={post.userId}
                onLike={toggleLike}
                onDelete={deletePost}
              />
            ))}

            {/* If literally nothing at all (edge case if you remove demoPosts) */}
            {demoPosts.length === 0 && posts.length === 0 && (
              <div
                style={{
                  padding: "24px 20px",
                  fontSize: 13,
                  color: "#9ca3af",
                  textAlign: "center",
                }}
              >
                No posts yet. Be the first star in Stellar ✨
              </div>
            )}
          </section>
        </main>

        {/* RIGHT SIDEBAR */}
        <RightSidebar />
      </div>
    </div>
  );
}
