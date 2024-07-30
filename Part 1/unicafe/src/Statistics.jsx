export default function Statistics({good, neutral, bad}) {
  const all = good + neutral + bad;
  const average = all === 0 ? 0 : (good - bad) / all;
  const positive = all === 0 ? 0 : (good * 100) / all;
  return (
    <>
      <h1>Statics</h1>
      <p>{`good ${good}`}</p>
      <p>{`neutral ${neutral}`}</p>
      <p>{`bad ${bad}`}</p>
      <p>{`all ${all}`}</p>
      <p>{`average ${average}`}</p>
      <p>{`positive ${positive} %`}</p>
    </>
  );
}
