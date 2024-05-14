import Image from "next/image";
import HotelSummaryInfo from "./hotel-summary";
import one from "@/public/images/1.png";

const HotelCard = () => {
  return (
    <div className="flex gap-6 border border-gray/20 p-4 rounded-md">
      <Image src={one} className="max-h-[162px] max-w-[240px]" alt="" />
      <HotelSummaryInfo fromListPage={true} />
    </div>
  );
};

export default HotelCard;
