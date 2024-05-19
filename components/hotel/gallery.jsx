import Image from "next/image";

const Gallery = ({ gallery }) => {
  return (
    <section className="container">
      <div className="grid grid-cols-2 imageshowCase">
        <Image
          src={gallery[0]}
          width={400}
          height={400}
          className="h-[400px]"
          alt=""
        />

        <div className="grid grid-cols-2 grid-rows-2 h-[400px]">
          {gallery.map((img) => (
            <Image src={img} alt={img} key={img} width={100} height={100} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
