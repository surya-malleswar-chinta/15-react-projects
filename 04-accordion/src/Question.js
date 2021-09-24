import React, {useState} from 'react'

const Question = ({title, info}) => {

    const [showMore, setShowMore] = useState(false)
    const styles = {
        display: showMore ? "block" : "none"
    }

    return (
        <div>
            <h2>{title}</h2>
            <button onClick={()=> setShowMore(!showMore)}>{showMore ? "Less" : "Expand"}</button>
            <p style={styles}>{info}</p>
        </div>
    )
}

export default Question