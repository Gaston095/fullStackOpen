export default function Button({good, setGood, neutral, setNeutral, bad, setBad}) {
    return <>
        <button onClick={()=>{setGood(good +1)}}>good</button>
        <button onClick={()=>{setNeutral(neutral +1)}}>neutral</button>
        <button onClick={()=>{setBad(bad +1)}}>bad</button>
    </>
}