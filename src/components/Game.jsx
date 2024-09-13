import { AnimalCard } from "./AnimalCards";
import { useAnimalRace } from "../hooks/useAnimalRace";
export function Game() {
  const {
    DOG_URL,
    CAT_URL,
    dogCount,
    setDogCount,
    catCount,
    setCatCount,
    isFinished,
    winner,
  } = useAnimalRace({
    dogUrl:
      "https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    catUrl:
      "https://images.unsplash.com/photo-1472491235688-bdc81a63246e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  });
  return (
    <div id="container">
      {isFinished ? (
        <>
          <h1>OYUN BITTI KAZANAN {winner}</h1>
          <img className="resim" src={winner === "köpek" ? DOG_URL : CAT_URL} />
        </>
      ) : (
        <div id="hayvanKutulari">
          <AnimalCard
            name="Köpek"
            title="Köpek Severler"
            count={dogCount}
            increase={() => {
              setDogCount(dogCount + 1);
            }}
          />
          <AnimalCard
            name="Kedi"
            title="Kedi Severler"
            count={catCount}
            increase={() => {
              setCatCount(catCount + 1);
            }}
          />
        </div>
      )}
    </div>
  );
}
