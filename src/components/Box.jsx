import React from "react";
import Box1 from "./Box1";
import Box2 from "./Box2";

export default function Box({ flag }) {
  if (flag === 1) {
    return <Box1 />;
  } else if (flag === 2) {
    return <Box2 />;
  } else {
    return <div>No box selected</div>;
  }
}