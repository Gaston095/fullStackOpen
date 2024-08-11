export default function CountryDetail({country}) {
    const languagesArray = Object.values(country[0].languages)
    return (
        <>
            <h1>{country[0].name.common}</h1>
            <br/>
            <div>{`capital ${country[0].capital}`}</div>
            <div>{`area ${country[0].area}`}</div>
            <br/>
            <div><strong>languages:</strong></div>
            <ul>
                {languagesArray.map(lang => <li key={lang}>{lang}</li>)}
            </ul>
            <br/>
            <picture>
                <img height={'150px'} src={country[0].flags.png} alt={country[0].flags.alt}/>
            </picture>
        </>
    )
}