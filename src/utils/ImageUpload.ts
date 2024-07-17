export const imageUpload = async (photos: File[]): Promise<string[]> => {
  const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
  if (!image_hosting_key) {
    throw new Error("Missing imgbb API key in environment variables");
  }

  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
  const uploadedUrls: string[] = [];

  try {
    for (const photo of photos) {
      const formData = new FormData();
      formData.append("key", image_hosting_key);
      formData.append("image", photo);

      const response = await fetch(image_hosting_api, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      uploadedUrls.push(data.data.url);
    }

    return uploadedUrls;
  } catch (error) {
    console.error("Error uploading images:", error);
    return [];
  }
};
