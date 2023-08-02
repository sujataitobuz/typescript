import { useEffect, useRef, useState } from 'react'

export default function MutationRef() {
    const intervalRef = useRef<number | undefined>(0);
    const [time, setTime] = useState(0);

    const stopTimer = () => {
        if (intervalRef.current) {
            window.clearInterval(intervalRef.current)
        }
    }

    useEffect(() => {
        intervalRef.current = window,setInterval(() => {
            setTime((time) => time + 1 )
        }, 1000)
        return(
            stopTimer()
        )
    },[]);


  return (
    <>
        <div>{time}</div>
        <button onClick={() => stopTimer()}>Timer</button>
    </>
  )
}
