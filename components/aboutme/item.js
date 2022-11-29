import React, { useState } from 'react';

export default function Item(props) {

    const[long, setLong] = useState(false)    
    return (
        <div onClick={() => setLong(!long)}>{props.text} {long ? props.ltext : null}</div>
    )
}