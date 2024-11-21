import { useState, useEffect } from "react";

const TrafficLight = () => {
  const [color, setColor] = useState("green");

  useEffect(() => {
    let timer;
    const lightSequence = [
      { color: "yellow", duration: 3000 },
      { color: "red", duration: 2000 },
      { color: "yellow", duration: 5000 },
      { color: "green", duration: 2000 },
    ];

    let currentIndex = 0;

    const change = () => {
      const nextLight = lightSequence[currentIndex];
      setColor(nextLight.color);
      timer = setTimeout(() => {
        currentIndex = (currentIndex + 1) % lightSequence.length;
        change();
      }, nextLight.duration);
    };

    change();

    return () => clearTimeout(timer);
  }, []);

  return (
      <div
        style={{
          ...styles.bulb,
          backgroundColor: color,
        }}
      />
  );
};

const styles = {
  bulb: {
    marginLeft: "500px",
    width: "100px",
    height: "100px",
    borderRadius: "50%",
  },
};

export default TrafficLight;
