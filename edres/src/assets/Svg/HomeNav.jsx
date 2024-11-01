import * as React from "react";
const HomeNav = ({ active }) => (
  <svg
    width={22}
    height={22}
    viewBox="0 0 22 22"
    fill={active ? "#007BFF" : "#A3AED0"}
    xmlns="http://www.w3.org/2000/svg"

  >
    <path
      d="M11.778 2.5214C11.3484 2.09182 10.652 2.09182 10.2224 2.5214L2.52238 10.2214C2.0928 10.651 2.0928 11.3475 2.52238 11.777C2.95195 12.2066 3.64844 12.2066 4.07801 11.777L4.4002 11.4549V18.6992C4.4002 19.3067 4.89268 19.7992 5.5002 19.7992H7.70019C8.30771 19.7992 8.80019 19.3067 8.80019 18.6992V16.4992C8.80019 15.8917 9.29268 15.3992 9.90019 15.3992H12.1002C12.7077 15.3992 13.2002 15.8917 13.2002 16.4992V18.6992C13.2002 19.3067 13.6927 19.7992 14.3002 19.7992H16.5002C17.1077 19.7992 17.6002 19.3067 17.6002 18.6992V11.4549L17.9224 11.777C18.352 12.2066 19.0484 12.2066 19.478 11.777C19.9076 11.3475 19.9076 10.651 19.478 10.2214L11.778 2.5214Z"
      fill={active ? "#007BFF" : "#A3AED0"}
    />
  </svg>
);
export default HomeNav;
