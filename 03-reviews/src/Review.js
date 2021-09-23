import React from 'react'

const Review = ({review}) => {

    return (
        <div className = "container">
            <img src={review.image} alt={review.image} width="100" />
            <h1>{review.name}</h1>
            <h2>{review.job}</h2>
            <p>{review.text}</p>
        </div>
    )
}

export default Review