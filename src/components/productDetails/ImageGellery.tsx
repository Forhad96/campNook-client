import { FC, useEffect, useState } from "react";
interface ImageGalleryProps {
  images: string[];
}
const ImageGallery: FC<ImageGalleryProps> = ({ images }) => {
  const [imageIndex, setImageIndex] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);

    return () => clearInterval(intervalId);
  }, [images.length]);
  return (
    <div className="lg:col-span-3 lg:row-end-1">
      <div className="lg:flex lg:items-start">
        <div className="lg:order-2 lg:ml-5">
          <div className="max-w-xl overflow-hidden rounded-lg">
            <img
              className="h-full w-full max-w-full object-cover"
              src={images[imageIndex]}
              alt=""
            />
          </div>
        </div>
        <div className="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
          <div className="flex flex-row items-start lg:flex-col">
            {images.map((img, index) => (
              <button
                key={index}
                type="button"
                className={`flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 ${
                  index === 0 ? "border-gray-900" : "border-transparent"
                } text-center`}
              >
                <img
                  onClick={() => setImageIndex(index)}
                  className="h-full w-full object-cover"
                  src={img}
                  alt=""
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ImageGallery;
