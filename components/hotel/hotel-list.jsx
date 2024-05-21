import { getHotels } from "@/queries";
import HotelCard from "./hotel-card";

const HotelList = async ({ destination, checkin, checkout }) => {
  const allHotel = await getHotels(destination, checkin, checkout);

  return (
    <div className="col-span-9">
      <div className="space-y-4">
        {allHotel?.map((hotel) => (
          <HotelCard
            key={hotel.id}
            hotelInfo={hotel}
            checkin={checkin}
            checkout={checkout}
          />
        ))}
      </div>
    </div>
  );
};

export default HotelList;
