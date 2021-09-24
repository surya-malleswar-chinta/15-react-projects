const Job = ({company, duties, dates, title}) => {
    return (
        <>
            <h1>{title}</h1>
            <h2>{dates}</h2>
            <h3>{company}</h3>
            <ul>
                {duties.map((duty, index)=> <li key={index}>{duty}</li>)}
            </ul>
        </>
    )
}

export default Job