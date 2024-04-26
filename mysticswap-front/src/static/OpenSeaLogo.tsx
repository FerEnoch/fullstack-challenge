import React from "react";

interface OpenSeaLogoProps {
  width: number
}

const OpenSeaLogo: React.FC<OpenSeaLogoProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      id="Layer_1"
      x={0}
      y={0}
      viewBox="0 0 100 100"
      {...props}
    >
      <style>{".st1{fill:#fff}"} </style>
      <path
        d="M50.4.5C22.8.3.3 22.8.5 50.4c.2 26.9 22.2 48.8 49.1 49.1 27.7.2 50.2-22.3 49.9-49.9C99.3 22.7 77.3.7 50.4.5z"
        style={{
          fill: "#2081e2",
        }}
      />
      <path
        d="M35.6 25.9c3.1 3.9 4.9 8.8 4.9 14.2 0 4.6-1.4 8.9-3.7 12.5H20.2l15.4-26.7z"
        className="st1"
      />
      <path
        d="M86.3 58.5c0 .2-.1.4-.3.5-1.1.5-4.8 2.2-6.4 4.4-4 5.5-7 14.3-13.8 14.3H37.3c-10.1 0-18.5-8-18.4-18.6 0-.3.2-.5.5-.5h13.4c.5 0 .8.4.8.8V62c0 1.4 1.1 2.5 2.5 2.5h10.2v-5.9h-7c4-5.1 6.4-11.5 6.4-18.5 0-7.8-3-14.9-7.9-20.2 3 .3 5.8.9 8.4 1.7v-1.7c0-1.7 1.4-3.1 3.1-3.1 1.7 0 3.1 1.4 3.1 3.1v4c9.5 4.4 15.8 11.8 15.8 20.2 0 4.9-2.1 9.5-5.8 13.3-.7.7-1.7 1.1-2.7 1.1h-7.2v5.9h9c1.9 0 5.4-3.7 7.1-5.9 0 0 .1-.1.3-.2.2-.1 16.6-3.8 16.6-3.8.3-.1.7.2.7.5l.1 3.5z"
        className="st1"
      />
    </svg>
  );
};

export default OpenSeaLogo;