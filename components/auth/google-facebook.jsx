import Image from "next/image";
import fb from "@/public/fb.png";
import google from "@/public/google.png";

const FbAndGoogle = () => {
  return (
    <div className="flex gap-4">
      <button className=" w-full mt-4 py-2 border-gray-600/30 border rounded-md flex items-center gap-2 justify-center">
        <Image src={fb} alt="" />
        <span>Facebook</span>
      </button>
      <button className=" w-full mt-4 py-2 border-gray-600/30 border rounded-md flex items-center gap-2 justify-center">
        <Image src={google} alt="" />
        <span>Google</span>
      </button>
    </div>
  );
};

export default FbAndGoogle;
