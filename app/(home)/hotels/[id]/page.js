import Gallery from "@/components/hotel/gallery";
import Overview from "@/components/hotel/overview";
import Summary from "@/components/hotel/summary";
import { getHotelById } from "@/queries";

const DynamicHotelPage = async ({
  params: { id },
  searchParams: { checkin, checkout },
}) => {
  const hotel = await getHotelById(id, checkin, checkout);

  return (
    <>
      <Summary hotelInfo={hotel._doc} />
      <Gallery gallery={hotel._doc.gallery} />
      <Overview overview={hotel._doc.overview} />
    </>
  );
};

export default DynamicHotelPage;
