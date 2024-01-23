import { useEffect, useState } from "react";



function UseEffect2() {
    const [currntTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const updateClock = () => {
            setCurrentTime(new Date());
        }

        const setintervalId = setInterval(updateClock, 1000);
        return () => {
            clearInterval(setintervalId)
        }
    }, []);

    const formattedTime = currntTime.toLocaleTimeString();

    return (
        <>
            <h2>Real-Time Clock</h2>
            <h4>Current Time: {formattedTime}</h4>
        </>
    )
}
export default UseEffect2;