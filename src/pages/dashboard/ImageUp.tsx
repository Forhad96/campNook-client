import { Button } from "@/components/ui/button";
import { imageUpload } from "@/utils/ImageUpload";
import React, { useState } from "react";


const ImageUp: React.FC = () => {
  const [images, setImages] = useState<File[]>([]);
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImages(Array.from(e.target.files));
    }
  };

  const handleUpload = async () => {
    if (images.length > 0) {
      const urls = await imageUpload(images);
      console.log(urls);
      setImageUrls(urls);
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleImageChange}
      />
      <Button onClick={handleUpload}>Upload Images</Button>
      {imageUrls.length > 0 && (
        <div>
          <p>Uploaded Image URLs:</p>
          <ul>
            {imageUrls.map((url, index) => (
              <li key={index}>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  {url}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ImageUp;
