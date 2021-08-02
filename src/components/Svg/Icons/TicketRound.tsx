import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => (
  <Svg viewBox="0 0 92 107" {...props}>
    <image href= '/images/owlticketround.svg'/>
  </Svg>
);

export default Icon;
