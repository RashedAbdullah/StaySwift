import { dbConnection } from "@/db-connection/mongo";
import { hotelModel } from "@/models/hotel-model";
import { ratingModel } from "@/models/rating-model";
import { reviewModel } from "@/models/review-model";
import {
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} from "@/utils/data-utils";

const getHotels = async () => {
  try {
    await dbConnection();
    const hotles = await hotelModel
      .find()
      .select([
        "thumbNailUrl",
        "name",
        "highRate",
        "lowRate",
        "city",
        "propertyCategory",
      ]);
    return hotles;
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
