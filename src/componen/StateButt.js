import { useState } from 'react'

function StateButt(){
    const [count, setCount] = useState(0)
    const names = ["Rusdi", "Tukam", "Fuad 69", "Hardin", "Mas Faiz"];
    const rand = names[Math.floor(Math.random() * names.length)]
    function handlecick(){
        setCount(count + rand)
    }
    return(
    <div>
        <button onClick={handlecick}>
        Member Ngawi : 
    </button>
    <h1>{rand}</h1>
    </div>
    )
}

export default StateButt