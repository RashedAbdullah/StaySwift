import { getHotels } from "@/queries";
import HotelCard from "./hotel-card";

const HotelList = async () => {
  const allHotel = await getHotels();

  return (
    <div className="col-span-9">
      <div className="space-y-4">
        {allHotel.map((hotel) => (
          <HotelCard key={hotel.id} hotelInfo={hotel} />
        ))}
      </div>
    </div>
  );
};

export default HotelList;
