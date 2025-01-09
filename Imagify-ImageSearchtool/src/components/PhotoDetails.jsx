import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import instance from "../utility/Axios";
import { saveAs } from "file-saver";

const PhotoDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    const fetchPhoto = async () => {
      try {
        const response = await instance.get(`/v1/photos/${id}`);
        return setPhoto(response.data);
      } catch (error) {
        console.error("Error fetching photo:", error);
      }
    };

    fetchPhoto();
  }, [id]);

  console.log(photo);

  const handleDownload = async (url, filename) => {
    try {
      const response = await instance.get(url, { responseType: "blob" });
      saveAs(response.data, filename);
    } catch (error) {
      console.error("Error downloading the file:", error);
    }
  };

  if (!photo) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="image-details flex flex-col justify-center items-start   w-full min-h-screen">
        <div
          className="original h-[30vh] w-[50vw] bg-red-400 bg-cover bg-center"
          style={{ backgroundImage: `url(${photo?.src.original})` }}
        ></div>

        <button onClick={() => navigate(-1)}>Go back</button>
      </div>
    </>
  );
};

export default PhotoDetails;
