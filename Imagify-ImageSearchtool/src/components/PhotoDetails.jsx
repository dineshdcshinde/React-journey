import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import instance from "../utility/Axios";
import { saveAs } from "file-saver";

const PhotoDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [photo, setPhoto] = useState(null);
  const [filename, setFilename] = useState(`pexels-${id}.jpg`);

  useEffect(() => {
    const fetchPhoto = async () => {
      try {
        const response = await instance.get(`/v1/photos/${id}`);
        setPhoto(response.data);
      } catch (error) {
        console.error("Error fetching photo:", error);
      }
    };

    fetchPhoto();
  }, [id]);

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
    <div className="container mx-auto p-4">
      <div className="relative flex flex-col md:flex-row gap-6">
        <div className="relative flex-1">
          <img
            className="h-[30vh] md:h-[50vh] w-full object-cover rounded-md"
            src={photo.src.original}
            alt={photo.alt}
          />
        </div>

        <div className="flex flex-col flex-1">
          <div className="original-details mb-4">
            <p className="text-lg font-semibold">{photo.alt}</p>
            <p>
              Captured by: <strong>📸 {photo.photographer}</strong>
            </p>
          </div>
        </div>
      </div>

      <div className="btn-sections mt-6 flex flex-col md:flex-row gap-4">
        <input
          type="text"
          value={filename}
          onChange={(e) => setFilename(e.target.value)}
          className="border p-2 rounded-md"
          placeholder="Enter filename"
        />
        <button
          onClick={() => handleDownload(photo.src.original, filename)}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Download Original
        </button>
        <button
          onClick={() => navigate(-1)}
          className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          Go back
        </button>
      </div>
    </div>
  );
};

export default PhotoDetails;
