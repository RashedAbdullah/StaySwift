import { dbConnection } from "@/db-connection/mongo";
import { hotelModel } from "@/models/hotel-model";

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

export { getHotels };
