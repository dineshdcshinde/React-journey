import React, { useState, useEffect } from "react";
import ApodDescription from "./ApodDescription";
import SideBar from "./SideBar";
import { Getapod } from "../utility/Getapod";

const AppodMain = () => {
  const [apiData, setApiData] = useState(null);

  const todayApod = async () => {
    try {
      const { data } = await Getapod.get("/apod", {
        params: {
          api_key: import.meta.env.VITE_APOD_API_KEY,
        },
      });
      setApiData(data);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    todayApod();
  }, []);

  return (
    <>
      <div
        className="min-h-screen w-full bg-cover bg-no-repeat flex text-white"
        style={{
          backgroundImage: `url(${apiData?.hdurl || "default-background-url"})`,
        }}
      >
        <div className="flex flex-col justify-end mb-4 w-full md:w-[80%] p-4">
          {apiData && (
            <div className="w-full md:w-full">
              <ApodDescription title={apiData?.title} />
            </div>
          )}
        </div>

        <div className="sidebarContent flex items-center justify-end w-full md:w-[20%]">
          {apiData && (
            <SideBar
              title={apiData?.title}
              explanation={apiData?.explanation}
            />
          )}
        </div>
      </div>

      <div className="download-btn absolute bottom-1 right-4 md:right-16 p-4  rounded-lg shadow-lg">
        <p className="text-sm md:text-lg  text-white">
          Download Apod's View Image ⬇️
        </p>

        <div className="download-apods flex justify-center items-center w-full">
          <button
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded
           hover:bg-blue-700 text-xs md:text-base"
          >
            Download <i className="ri-download-line "></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default AppodMain;
