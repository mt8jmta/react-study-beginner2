import React from "react";

// defaultなしのexport
export const ColorfulMessage = (props) => {
  const { color, children } = props;
  const contentStyle = {
    color: color,
    fontSize: "18px"
  };
  return <p style={contentStyle}>{children}</p>;
};
// defaultのexport
// export default ColorfulMessage;
