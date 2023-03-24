import { useState } from "react";

const useNavBar = () => {
  const [searchWord, setSearchWord] = useState("");

  const onSearchInputChange = (e) => {
    setSearchWord(e.target.value);
  };
  return [searchWord, onSearchInputChange];
};

export default useNavBar;
