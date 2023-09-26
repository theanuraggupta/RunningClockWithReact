import React, { useState, useEffect, useRef } from "react";

const RunningClock = () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [time, setTime] = useState("00:00");
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  const formatTime = (minutes, seconds) => {
    let totalSeconds = minutes * 60 + seconds;
    let formattedMinutes = Math.floor(totalSeconds / 60)
      .toString()
      .padStart(2, "0");
    let formattedSeconds = (totalSeconds % 60).toString().padStart(2, "0");
    return `${formattedMinutes}:${formattedSeconds}`;
  };

  useEffect(() => {
    if (isRunning && !isPaused) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => {
          const [prevMinutes, prevSeconds] = prevTime.split(":").map(Number);
          if (prevMinutes === 0 && prevSeconds === 0) {
            // console.log("do");
            setIsPaused(true);
            // clearInterval(intervalRef.current);
            return "00:00";
          }
          return formatTime(prevMinutes, prevSeconds - 1);
        });
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isRunning, isPaused]);

  const handleStart = () => {
    setTime(formatTime(minutes, seconds));
    setIsRunning(true);
    setIsPaused(false);
  };

  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);
    setMinutes(0);
    setSeconds(0);
    setTime("00:00");
    setIsRunning(false);
    setIsPaused(false);
  };

  return (
    <div>
      <label>
        <input
          type="number"
          value={minutes}
          onChange={(e) => setMinutes(parseInt(e.target.value, 10) || 0)}
        />
        Minutes
      </label>
      <label>
        <input
          type="number"
          value={seconds}
          onChange={(e) => setSeconds(parseInt(e.target.value, 10) || 0)}
        />
        Seconds
      </label>
      <button onClick={handleStart}>START</button>
      <button onClick={handlePauseResume}>PAUSE / RESUME</button>
      <button onClick={handleReset}>RESET</button>
      <h1 className="running-clock" data-testid="running-clock">
        {time}
      </h1>
    </div>
  );
};

export default RunningClock;
