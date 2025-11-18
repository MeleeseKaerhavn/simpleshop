import ReviewCard from "./Reviewcard";

export default function ReviewSection({ reviews = [] }) {

  // ⭐ Calculate the average score
  const average =
    reviews.length > 0
      ? reviews.reduce((total, r) => total + r.rating, 0) / reviews.length
      : 0;

  const fullStars = Math.round(average);

  return (
    <section className="mt-10">
      

      <div className="flex items-baseline text-2xl text-black mb-10 gap-12">
        <h2 className="text-4xl font-bold text-black mb-4">Reviews</h2>
        <div className="text-4xl">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i}>{i < fullStars ? "★" : "☆"}</span>
        ))}

        </div>
      </div>

      <div className="flex gap-24 justify-between flex-wrap">
        {reviews.map((r, index) => (
          <ReviewCard
            key={index}
            rating={r.rating}
            text={r.comment}
            author={r.reviewerName}
          />
        ))}
      </div>
    </section>
  );
}
