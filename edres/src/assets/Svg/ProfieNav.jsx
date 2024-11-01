import * as React from "react";
const ProfieNav = ({active}) => (
  <svg
    width={22}
    height={22}
    viewBox="0 0 22 22"
    fill={active ? "#007BFF" : "#A3AED0"}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.9998 9.90078C12.8223 9.90078 14.2998 8.42332 14.2998 6.60078C14.2998 4.77824 12.8223 3.30078 10.9998 3.30078C9.17726 3.30078 7.6998 4.77824 7.6998 6.60078C7.6998 8.42332 9.17726 9.90078 10.9998 9.90078Z"
      fill={active ? "#007BFF" : "#A3AED0"}
    />
    <path
      d="M3.2998 19.8008C3.2998 15.5482 6.74721 12.1008 10.9998 12.1008C15.2524 12.1008 18.6998 15.5482 18.6998 19.8008H3.2998Z"
      fill={active ? "#007BFF" : "#A3AED0"}
    />
  </svg>
);
export default ProfieNav;
