import Gallery from "@/components/hotel/gallery";
import Overview from "@/components/hotel/overview";
import Summary from "@/components/hotel/summary";
import { getHotelById } from "@/queries";

const DynamicHotelPage = async ({ params: { id } }) => {
  const hotel = await getHotelById(id);

  return (
    <>
      <Summary hotelInfo={hotel._doc} />
      <Gallery gallery={hotel._doc.gallery} />
      <Overview overview={hotel._doc.overview} />
    </>
  );
};

export default DynamicHotelPage;
