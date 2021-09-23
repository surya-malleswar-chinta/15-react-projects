import React from 'react'

const List = (props) => {

    return (
        <div>
            <img src={props.image} alt={props.image} width="100"/>
            <p><strong>{props.name}</strong></p>
            <p>{props.age}</p>
        </div>
    )
}

export default List