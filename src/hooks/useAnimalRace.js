import { useState, useEffect } from "react";
export const useAnimalRace = ({ dogUrl, catUrl }) => {
  const DOG_URL = dogUrl;
  const CAT_URL = catUrl;

  const [dogCount, setDogCount] = useState(0);
  const [catCount, setCatCount] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [winner, setWinner] = useState("");

  useEffect(() => {
    /// kontrol et herhangi biri 10 olmus mu
    if (dogCount === 10 || catCount === 10) {
      console.log("biri 10 oldu");
      setIsFinished(true);
      if (dogCount === 10) {
        setWinner("köpek");
      } else {
        setWinner("kedi");
      }
    }
  }, [dogCount, catCount]);

  return {
    DOG_URL,
    CAT_URL,
    dogCount,
    setDogCount,
    catCount,
    setCatCount,
    isFinished,
    winner,
  };
};
