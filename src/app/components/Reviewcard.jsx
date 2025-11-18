export default function ReviewCard({ rating, text, author }) {
  const stars = Array.from({ length: 5 });

  return (
    <article className="flex flex-col items-center text-center gap-2 text-black">
      <div className="flex gap-1 text-3xl">
        {stars.map((_, i) => (
          <span key={i}>{i < rating ? "★" : "☆"}</span>
        ))}
      </div>

      <p className="text-3xl font-medium">"{text}"</p>
      <p className="text-3xl text-gray-600">{author}</p>
    </article>
  );
}
