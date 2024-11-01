import * as React from "react";
const CardLink = (props) => (
  <svg
    width={18}
    height={18}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M1 17L17 1M17 1V17M17 1H1" stroke="black" strokeWidth={2} />
  </svg>
);
export default CardLink;
