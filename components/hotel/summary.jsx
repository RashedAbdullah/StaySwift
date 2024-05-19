import HotelSummaryInfo from "./hotel-summary";

const Summary = ({ hotelInfo }) => {
  return (
    <section className="py-4 mt-[100px] ">
      <div className="flex container">
        <HotelSummaryInfo source="details" hotelInfo={hotelInfo} />
      </div>
    </section>
  );
};

export default Summary;
