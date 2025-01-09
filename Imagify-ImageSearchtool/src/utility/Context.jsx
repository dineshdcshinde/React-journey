import axios from "axios";
import { createContext, useEffect, useState } from "react";

const ImageContext = createContext();

export const Context = ({ children }) => {
  const [images, setImages] = useState(null);

  return (
    <ImageContext.Provider value={[images, setImages]}>
      {children}
    </ImageContext.Provider>
  );
};
