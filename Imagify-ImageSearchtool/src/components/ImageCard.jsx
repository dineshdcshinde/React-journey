import React, { useEffect, useState } from "react";
import instance from "../utility/Axios";
import { Link } from "react-router-dom";

const ImageCard = ({ query }) => {
  const [images, setImages] = useState(null);

  const fetchImages = async () => {
    try {
      const response = await instance.get(`/v1/search`, {
        params: { query, per_page: 21 },
      });
      return setImages(response.data.photos);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, [query]);

  return (
    <>
      {images &&
        images.map((image) => {
          return (
            <div
              to={`/v1/photos/${image.id}`}
              key={image.id}
              className="imgContainer bg-cover bg-center h-[30vh] sm:h-[40vh] w-[90%] sm:w-[45%] lg:w-[30vw] flex  group "
              style={{
                backgroundImage: `url(${image.src.medium})`,
              }}
            >
              <div
                className="img-end flex  self-end w-full justify-between px-4 pb-4 
          opacity-0 group-hover:opacity-100 duration-300 transition-opacity
            
              "
              >
                <img
                  src={`${image.src.small}`}
                  alt={image.photographer}
                  title={image.photographer}
                  className="imgOwner w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white"
                />

                <Link
                  to={`v1/photos/${image.id}`}
                  className="bg-blue-600 text-white text-sm px-4 py-2 mt-2 rounded-md hover:bg-blue-700"
                >
                  Explore
                </Link>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default ImageCard;
