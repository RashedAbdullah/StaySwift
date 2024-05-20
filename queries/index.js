import { dbConnection } from "@/db-connection/mongo";
import { bookingModel } from "@/models/booking-model";
import { hotelModel } from "@/models/hotel-model";
import { ratingModel } from "@/models/rating-model";
import { reviewModel } from "@/models/review-model";
import {
  isDateIsBetween,
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} from "@/utils/data-utils";

const getHotels = async (destination, checkin, checkout) => {
  try {
    await dbConnection();

    const regex = new RegExp(destination, "i");
    const hotlesByDestination = await hotelModel
      .find({ city: { $regex: regex } })
      .select([
        "thumbNailUrl",
        "name",
        "highRate",
        "lowRate",
        "city",
        "propertyCategory",
      ]);

    let allHotels = hotlesByDestination;

    if (checkin && checkout) {
      allHotels = await Promise.all(
        allHotels.map(async (hotel) => {
          const found = await findBooking(hotel._id, checkin, checkout);

          if (found) {
            hotel["isBooked"] = true;
          } else {
            hotel["isBooked"] = false;
          }
        })
      );
    }

    return replaceMongoIdInArray(allHotels);
  } catch (err) {
    console.log(err.message);
  }
};

const findBooking = async (hotelId, checkin, checkout) => {
  try {
    await dbConnection();

    const matches = await bookingModel.find({ hotelId: hotelId.toString() });
    const found = matches.find((match) => {
      return (
        isDateIsBetween(checkin, match.checkin, match.checkout) ||
        isDateIsBetween(checkin, match.checkin, match.checkout)
      );
    });

    return found;
  } catch (err) {
    console.log(err.message);
  }
};

const getRatings = async (hotelId) => {
  try {
    await dbConnection();
    const ratings = await ratingModel.find({ hotelId: hotelId });
    return replaceMongoIdInArray(ratings);
  } catch (err) {
    console.log(err.message);
  }
};

const getReviews = async (hotelId) => {
  try {
    await dbConnection();
    const reviews = await reviewModel.find({ hotelId: hotelId });
    return replaceMongoIdInArray(reviews);
  } catch (err) {
    console.log(err.message);
  }
};

const getHotelById = async (hotelId) => {
  try {
    await dbConnection();

    const hotel = await hotelModel.findById(hotelId);
    return replaceMongoIdInObject(hotel);
  } catch (err) {
    console.log(err.message);
  }
};

export { getHotels, getRatings, getReviews, getHotelById };
