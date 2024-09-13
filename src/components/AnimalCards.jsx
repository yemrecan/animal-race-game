export const AnimalCard = ({ name, title, count, increase }) => {
  return (
    <div className="animalCard">
      <h1>{title}</h1>
      <span>{count}</span>
      <button onClick={increase}>{name} ❤️</button>
    </div>
  );
};
