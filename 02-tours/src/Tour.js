import React, {useState} from 'react'


const Tour = ({tour, removeTour}) => {

    const [readMore, setReadMore] = useState(false)

    return (
        <div className="container">
            <img src={tour.image} alt={tour.image}/>
            <div className="tour-info">
                <p>{tour.name}</p>
                <p className="tour-price">{tour.price}</p>
            </div>
            <p>
                {readMore ? tour.info : `${tour.info.substring(0,200)}...`}
                <button onClick={() => setReadMore(!readMore)}>
                    {readMore ? "show less" : "read more"}
                </button>
            </p>
            <button onClick={() => removeTour(tour.id)}>Delete</button>
        </div>
    )
}

export default Tour;