import React, { useState } from "react";
import "./Section.scss";

export default function Section() {
  const [hoveredImg, setHoveredImg] = useState(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (index) => {
    setHoveredImg(index);
  };

  const handleMouseLeave = () => {
    setHoveredImg(null);
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseMove = (e) => {
    const { offsetX, offsetY, target } = e.nativeEvent;
    const { offsetWidth, offsetHeight } = target;
    const xPos = (offsetX / offsetWidth) * 100;
    const yPos = (offsetY / offsetHeight) * 100;
    setPosition({ x: xPos, y: yPos });
  };

  return (
    <section>
      <div>
        <h1 className="collection">New collection</h1>
        <div className="picture">
          {[
            "/img/girl.png",
            "/img/girl1.png",
            "/img/girl2.png",
            "/img/girl3.png",
          ].map((imgSrc, index) => (
            <div
              key={index}
              className="img-container"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              onMouseMove={handleMouseMove}
            >
              <img
                src={imgSrc}
                alt=""
                className={`image ${hoveredImg === index ? "zoom" : ""}`}
                style={
                  hoveredImg === index
                    ? { transformOrigin: `${position.x}% ${position.y}%` }
                    : {}
                }
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
