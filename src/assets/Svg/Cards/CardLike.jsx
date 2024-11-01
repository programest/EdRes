import * as React from "react";
const CardLike = (props) => (
  <svg
    width={66}
    height={66}
    viewBox="0 0 66 66"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#filter0_d_77_2111)">
      <rect
        x={20}
        y={20}
        width={34}
        height={34}
        rx={16}
        fill="white"
        fillOpacity={0.5}
      />
      <path
        d="M42.0544 36.8044L37 41.8588L31.9456 36.8044C31.0181 35.8769 31.0181 34.3731 31.9456 33.4456C32.8731 32.5181 34.3769 32.5181 35.3044 33.4456L36.2929 34.4342C36.4805 34.6217 36.7348 34.7271 37.0001 34.7271C37.2653 34.7271 37.5196 34.6217 37.7072 34.4341L38.6956 33.4456C38.6956 33.4456 38.6956 33.4456 38.6956 33.4456C39.6231 32.5181 41.1269 32.5181 42.0544 33.4456C42.9819 34.3731 42.9819 35.8769 42.0544 36.8044L42.7615 37.5115L42.0544 36.8044Z"
        stroke="black"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_77_2111"
        x={0}
        y={0}
        width={82}
        height={82}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx={4} dy={4} />
        <feGaussianBlur stdDeviation={12} />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.439216 0 0 0 0 0.564706 0 0 0 0 0.690196 0 0 0 0.12 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_77_2111"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_77_2111"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default CardLike;

