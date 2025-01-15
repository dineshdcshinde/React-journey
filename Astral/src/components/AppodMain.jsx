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

  console.log(apiData);
  return (
    <div
      className="min-h-screen w-full bg-cover bg-no-repeat flex text-white"
      style={{ backgroundImage: `url(${apiData?.hdurl || 'default-background-url'})` }}
    >
      <div className="flex-1 flex flex-col justify-end mb-4 w-full md:w-[80%] p-4">
        {apiData && <ApodDescription title={apiData?.title} />}
      </div>

      <div className="sidebarContent flex items-center justify-end w-full md:w-[20%] ">
        {apiData && <SideBar title={apiData?.title} explanation={apiData?.explanation} />}
      </div>
    </div>
  );
};

export default AppodMain;