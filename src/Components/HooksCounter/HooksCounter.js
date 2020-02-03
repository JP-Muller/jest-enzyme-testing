import React, {useEffect} from 'react'
import '../../Counters.css'



function HooksCounter() {
    const [count, setCount] = React.useState(null)

    useEffect(() => {
        setCount(0)
    }, [])

    return (
          <div className='counter-wrapper'>
                <h3>Hooks Counter</h3>
                <div className='current-count'>
                    <h1>{count}</h1>
                    </div>
                    <div className='button-container'>
                        <button onClick={() => setCount(count - 1)}><i className="far fa-minus-square" /></button>
                        <button onClick={() => setCount(count + 1)}><i className="far fa-plus-square" /></button>
                        </div>                
            </div>
    )
}


export default HooksCounter
