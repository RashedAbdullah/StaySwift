import { getRatings } from "@/queries";

const HotelRatings = async ({ id }) => {
  const hotelRating = await getRatings(id);

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
  return <div>HotelRatings</div>;
};

export default HotelRatings;
