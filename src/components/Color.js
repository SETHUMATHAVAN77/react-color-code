import React, { useState, useEffect } from "react";

function componentToHex(C) {
  let hex = C.toString(16);

  return hex.length === 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

console.log(rgbToHex(255, 255, 255));

const Color = ({ rgb, weight, index }) => {
  // console.log(rgbToHex(...rgb));
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => clearTimeout(timeOut);
  }, [alert]);

  const hexValue = rgbToHex(...rgb);
  return (
    <article
      className={`color ${index > 10 ? "color-light" : "null"}`}
      style={{ backgroundColor: hexValue }}
      onClick={() => {
        navigator.clipboard.writeText(hexValue);
        setAlert(true);
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>
      {alert && <p className="alert">copied to clipBoard</p>}
    </article>
  );
};

export default Color;
