import { PostCard } from "./post-card";

const dummyPosts = [
  {
    title: "First Post",
    image: "/placeholder.png",
    description: "This is a sample post.",
    author: "alice",
    likes: 12,
  },
  {
    title: "Second Post",
    image: "/placeholder.png",
    description: "Another sample post.",
    author: "bob",
    likes: 8,
  },
];

export function Feed() {
  return (
    <div className="grid gap-4 p-4">
      {dummyPosts.map((p, i) => (
        <PostCard key={i} {...p} />
      ))}
    </div>
  );
}
