import Part from "./Part";

export default function Content({parts}) {
  return (
    <>
        {parts.map(p => <Part key={p.name} part={p.name} exercises={p.exercises}/>)}
    </>
  );
}
