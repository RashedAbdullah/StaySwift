import Gallery from "@/components/hotel/gallery";
import Overview from "@/components/hotel/overview";
import Summary from "@/components/hotel/summary";

const DynamicHotelPage = () => {
  return (
    <>
      <Summary />
      <Gallery />
      <Overview />
    </>
  );
};

export default DynamicHotelPage;
