import React, { useState } from 'react'

function Practice() {
    const [count, setCount] = useState(10)

    function addValue() {
        setCount((prevCouter) => prevCouter + 1 )
        setCount((prevCouter) => prevCouter + 1 )
        setCount((prevCouter) => prevCouter + 1 )
        setCount((prevCouter) => prevCouter + 1 )
    }


    return (
        <div className="flex flex-col items-center gap-4 p-6">
            <p>Here is the text : {count}</p>

            <button onClick={addValue}>Click here to Increase</button>
        </div>
    )
}

export default Practice
