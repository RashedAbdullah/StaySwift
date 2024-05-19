const HotelSummaryInfo = ({ fromListPage, hotelInfo }) => {
  return (
    <>
      <div className={fromListPage ? "flex-1" : "flex-1 container"}>
        <h2
          className={fromListPage ? "font-bold text-lg" : "font-bold text-2xl"}
        >
          {hotelInfo.name}
        </h2>
        <p>📍 {hotelInfo.city}</p>
        <div className="flex gap-2 items-center my-4">
          <div className="bg-primary w-[35px] h-[35px] rounded-sm text-white grid place-items-center font-bold">
            5.3
          </div>
          <span className="font-medium">Very Good</span>
          <span>232 Reviews</span>
        </div>
        <div>
          <span className="bg-yellow-300 py-1 px-2">
            {hotelInfo.propertyCategory} Star Property
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-2 items-end justify-center">
        <h2 className="text-2xl font-bold text-right">
          ${hotelInfo.highRate + hotelInfo.lowRate / 2}/night
        </h2>
        <p className=" text-right">Per Night for 1 Room</p>
        {fromListPage ? (
          <button className="btn-primary ">Details</button>
        ) : (
          <button className="btn-primary ">Book</button>
        )}
      </div>
    </>
  );
};

export default HotelSummaryInfo;
