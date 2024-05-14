import Image from "next/image";

import one from "@/public/images/1.png";
import two from "@/public/images/2.png";
import three from "@/public/images/3.png";
import four from "@/public/images/4.png";
import five from "@/public/images/5.png";

const Gallery = () => {
  return (
    <section className="container">
      <div className="grid grid-cols-2 imageshowCase">
        <Image src={one} className="h-[400px]" alt="" />

        <div className="grid grid-cols-2 grid-rows-2 h-[400px]">
          <Image src={two} alt="" />
          <Image src={three} alt="" />
          <Image src={four} alt="" />
          <Image src={five} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
