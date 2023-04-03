import { useState } from "react";

const useProductCard = (product) => {
  const [color, setColor] = useState("#eee");

  const handleFavorite = () => {
    if (color === "#eee") {
      setColor("red");
    }
    if (color === "red") {
      setColor("#eee");
    }
  };

  return [color, handleFavorite];
};

export default useProductCard;
