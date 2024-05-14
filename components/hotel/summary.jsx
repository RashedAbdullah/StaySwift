import HotelSummaryInfo from "./hotel-summary";

const Summary = () => {
  return (
    <section className="py-4 mt-[100px] ">
      <div className="flex container">
        <HotelSummaryInfo source="details" />
      </div>
    </section>
  );
};

export default Summary;
