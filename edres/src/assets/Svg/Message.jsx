import * as React from "react";

const Message = ({ text }) => {
  // Создаем ссылку для временного элемента
  const textRef = React.useRef(null);
  const [dimensions, setDimensions] = React.useState({ width: 245, height: 120 });

  React.useEffect(() => {
    if (textRef.current) {
      const { width, height } = textRef.current.getBoundingClientRect();
      // Учитываем отступы
      setDimensions({ width: width + 20, height: height + 28 });
    }
  }, [text]);

  return (
    <svg
      width={dimensions.width}
      height={dimensions.height}
      style={{ position: 'absolute', right: '15px', bottom: '20px' }}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_b_77_2005)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23.4522 24.7815C23.155 26.4763 23 28.22 23 30C23 46.5685 36.4314 60 53 60H216C232.568 60 246 46.5685 246 30C246 13.4315 232.568 0 216 0H53C45.1723 0 38.0448 2.99793 32.7031 7.90824C30.3269 7.19003 26.796 6.49997 22 6.5C15.1204 6.50004 6.80986 10.4362 1.24214 13.5994C0.229585 14.1747 1.00267 15.9682 2.15552 15.8036C5.63826 15.3063 9.85086 15.1967 13.5 16.5C17.5998 17.9642 21.1852 21.8298 23.4522 24.7815Z"
          fill="white"
          fillOpacity={0.5}
        />
      </g>
      <defs>
        <filter
          id="filter0_b_77_2005"
          x={-9.22754}
          y={0}
          width={265.228}
          height={120}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={5} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_77_2005"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_77_2005"
            result="shape"
          />
        </filter>
      </defs>
      
      {/* Используем foreignObject для автоматического переноса текста */}
      <foreignObject x="40" y="15" width={dimensions.width - 20} height={dimensions.height - 20}>
        <div
          ref={textRef}
          xmlns="http://www.w3.org/1999/xhtml"
          style={{ fontSize: '14px', color: 'black', overflowWrap: 'break-word', wordWrap: 'break-word' }}
        >
          <p style={{ margin: 0, color: '#2B3674', fontSize: 15 }}>{text}</p>
        </div>
      </foreignObject>
    </svg>
  );
};

export default Message;
