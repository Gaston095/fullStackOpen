export default function Total({ parts }) {
    const arrayNumberExercises = parts.map((part) => part.exercises)
    const total = arrayNumberExercises.reduce(
        (accumulator, currentValue) => accumulator + currentValue, 0,
    )

  return (
    <>
      <p>{`Number of exercises ${total}`}</p>
    </>
  );
}
