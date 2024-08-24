import './preloader.css';
import { useEffect, useState } from "react";

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setLoading(false);
      }, 1500); // Time for the fade-out animation
    }, 3500); // Time for preloader to stay visible
  }, []);

  if (!loading) {
    return null;
  }

  return (
    <div className={`preloader ${fadeOut ? "fade-out" : ""}`}>
      <div className="content">
        <div className="line">
          {"MOHIBULLAH".split("").map((letter, index) => (
            <span key={index} className="letter">
              {letter}
            </span>
          ))}
        </div>
        <div className="line">
          {"MOHIM".split("").map((letter, index) => (
            <span key={index} className="letter">
              {letter}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Preloader;

