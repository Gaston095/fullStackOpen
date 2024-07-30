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
          <table>
            <tbody>
                <tr>
                    <td>good</td>
                    <td>{good}</td>
                </tr>
                <tr>
                    <td>neutral</td>
                    <td>{neutral}</td>
                </tr>
                <tr>
                    <td>bad</td>
                    <td>{bad}</td>
                </tr>
                <tr>
                    <td>all</td>
                    <td>{all}</td>
                </tr>
                <tr>
                    <td>average</td>
                    <td>{average}</td>
                </tr>
                <tr>
                    <td>positive</td>
                    <td>{positive} %</td>
                </tr>
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
