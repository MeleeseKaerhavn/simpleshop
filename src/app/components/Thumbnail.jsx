import Image from "next/image";

export default function Thumbnail({ imgsrc, setActiveImage, activeImage }) {
  const isActive = imgsrc === activeImage;

  return (
    <button
      type="button"
      onClick={() => setActiveImage(imgsrc)}
      className={`w-16 h-16 border-4 rounded-xl flex items-center justify-center bg-white ${
        isActive ? "border-black" : "border-gray-400"
      }`}
    >
      <Image
        src={imgsrc}
        alt=""
        width={64}
        height={64}
        className="object-contain"
      />
    </button>
  );
}
