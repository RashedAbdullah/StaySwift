import { getRatings } from "@/queries";

const HotelRatings = async ({ hotelId }) => {
  const hotelRating = await getRatings(hotelId);

  const getRatingDesc = async (avgRating) => {
    if (avgRating === 0) {
      return "Not Available rating";
    } else if (avgRating > 0 && avgRating <= 2) {
      return "Poor";
    } else if (avgRating > 2 && avgRating <= 3) {
      return "Average";
    } else if (avgRating > 3 && avgRating <= 4) {
      return "Good";
    } else if (avgRating > 4) {
      return "Very Good";
    }
  };

  let avgRating = 0;
  if (hotelRating.length === 1) {
    avgRating = hotelRating[0].rating;
  }

  // Avarage hotel rating:
  if (hotelRating.length > 1) {
    avgRating =
      hotelRating.reduce((item, crr) => {
        return item.rating + crr.tating;
      }) / hotelRating.length;
  }
  return (
    <>
      <div className="bg-primary w-[35px] h-[35px] rounded-sm text-white grid place-items-center font-bold">
        {avgRating}
      </div>
      <span className="font-medium">{getRatingDesc(avgRating)}</span>
    </>
  );
};

export default HotelRatings;
