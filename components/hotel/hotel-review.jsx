import { getReviews } from "@/queries";
import Link from "next/link";

const HotelReviewNumb = async ({ hotelId }) => {
  const reviews = await getReviews(hotelId);
  return reviews.length === 0 ? (
    <span>Be the first one to review</span>
  ) : (
    <Link href={`/hotles/${hotelId}/reviews`}>{reviews.length} Reviews</Link>
  );
};

export default HotelReviewNumb;
