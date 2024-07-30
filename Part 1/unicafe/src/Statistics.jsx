import StatisticLine from "./StatisticLine";

export default function Statistics({ good, neutral, bad }) {
  const all = good + neutral + bad;
  const average = all === 0 ? 0 : (good - bad) / all;
  const positive = all === 0 ? 0 : (good * 100) / all;
  return (
    <>
      {all === 0 ? (
        <p>No feedback given</p>
      ) : (
        <div>
          <h1>Statics</h1>
          <StatisticLine text={'good'} value={good}/>
          <StatisticLine text={'neutral'} value={neutral}/>
          <StatisticLine text={'bad'} value={bad}/>
          <StatisticLine text={'all'} value={all}/>
          <StatisticLine text={'average'} value={average}/>
          <StatisticLine text={'positive'} value={positive}/>
        </div>
      )}
    </>
  );
}
