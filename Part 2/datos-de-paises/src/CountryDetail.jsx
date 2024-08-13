export default function CountryDetail({country}) {
    const languagesArray = Object.values(country.languages)
    return (
        <>
            <h1>{country.name.common}</h1>
            <br/>
            <div>{`capital ${country.capital}`}</div>
            <div>{`area ${country.area}`}</div>
            <br/>
            <div><strong>languages:</strong></div>
            <ul>
                {languagesArray.map(lang => <li key={lang}>{lang}</li>)}
            </ul>
            <br/>
            <picture>
                <img height={'150px'} src={country.flags.png} alt={country.flags.alt}/>
            </picture>
        </>
    )
}