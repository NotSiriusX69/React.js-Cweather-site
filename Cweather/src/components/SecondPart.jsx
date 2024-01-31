import React from "react";

const SecondPart = () => {
  return (
    <div className="bg-light_blue pb-16">
      <h1 className="m-auto py-16 text-5xl">
        Inspecting Weather was never easier
      </h1>
      <div className="mt-16 flex items-center justify-evenly">
        <div className="w-2/5">
          <svg
            id="visual"
            viewBox="-30 0 900 600"
            width="450"
            height="300"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
          >
            <g transform="translate(419.99883253785185 337.8794837540265)">
              <path
                d="M215.9 -257.7C277.1 -206 322.2 -135.4 329.2 -62.9C336.1 9.5 304.9 83.7 260.3 140.1C215.6 196.5 157.6 235 96.4 251.4C35.2 267.8 -29.1 262.2 -97.5 246.5C-165.9 230.9 -238.4 205.2 -261.3 155.6C-284.2 106.1 -257.5 32.7 -239.6 -37.6C-221.6 -107.8 -212.4 -174.9 -173.9 -230.7C-135.4 -286.4 -67.7 -330.7 4.8 -336.4C77.3 -342.2 154.7 -309.4 215.9 -257.7"
                fill="#FFFFFF"
              ></path>
            </g>
            <text
              x="51%"
              y="30%"
              dominantBaseline="middle"
              textAnchor="middle"
              fill="#523F20"
              fontSize="52"
              fontWeight={600}
              letterSpacing="0.32vh"
            >
              Intuitive Interface
            </text>
            <text
              x="50%"
              y="45%"
              dominantBaseline="middle"
              textAnchor="middle"
              fill="#000"
              fontSize="34"
              fontWeight={500}
              letterSpacing="0.12vh"
            >
              <tspan x="49%" dy="3.5em">
                Our interface is so simple, even a
              </tspan>
              <tspan x="49%" dy="1.2em">
                5 year old can easily access
              </tspan>
            </text>
          </svg>
        </div>
        <div className="w-2/5">
          <svg
            id="visual"
            viewBox="0 0 1000 600"
            width="500"
            height="300"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
          >
            <g transform="translate(458.92768815068484 261.1504291689781)">
              <path
                d="M166.2 -189.8C212.8 -158.9 246.2 -104.1 256.5 -45.3C266.7 13.5 253.7 76.2 228.5 143.2C203.3 210.1 165.8 281.3 109.5 302.4C53.2 323.6 -21.8 294.8 -92.4 264.4C-163 234.1 -229.1 202.3 -258.3 150C-287.5 97.7 -279.6 24.9 -263 -42.3C-246.3 -109.6 -220.9 -171.2 -175.6 -202.3C-130.3 -233.4 -65.1 -233.9 -2.7 -230.7C59.8 -227.5 119.6 -220.6 166.2 -189.8"
                fill="#FFFFFF"
              ></path>
            </g>
            <text
              x="45%"
              y="20%"
              dominantBaseline="middle"
              textAnchor="middle"
              fill="#523F20"
              fontSize="58"
              fontWeight={600}
              letterSpacing="0.32vh"
            >
              Fast API
            </text>
            <text
              x="45%"
              y="35%"
              dominantBaseline="middle"
              textAnchor="middle"
              fill="#000"
              fontSize="34"
              fontWeight={500}
              letterSpacing="0.12vh"
            >
              <tspan x="45%" dy="3.2em">
                There is no delay in weather
              </tspan>
              <tspan x="45%" dy="1.2em">
                updates, refresh and enjoy!
              </tspan>
            </text>
          </svg>
        </div>
        <div className="w-2/5">
          <svg
            id="visual"
            viewBox="0 0 900 600"
            width="450"
            height="300"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
          >
            <g transform="translate(466.9483333644924 275.85325518194367)">
              <path
                d="M173 -196C229.5 -158.8 284.1 -109.3 297.9 -49.8C311.6 9.7 284.4 79.1 248.1 144.5C211.8 209.9 166.5 271.3 106.8 292.7C47.1 314.2 -26.9 295.7 -101.2 271.5C-175.5 247.3 -250.1 217.4 -293.4 160.6C-336.7 103.8 -348.5 20.1 -319.5 -41C-290.5 -102.2 -220.6 -140.9 -160.5 -177.5C-100.4 -214 -50.2 -248.5 4 -253.3C58.3 -258.1 116.6 -233.2 173 -196"
                fill="#FFFFFF"
              ></path>
            </g>
            <text
              x="51%"
              y="30%"
              dominantBaseline="middle"
              textAnchor="middle"
              fill="#523F20"
              fontSize="52"
              fontWeight={600}
              letterSpacing="0.32vh"
            >
              Trusted by many
            </text>
            <text
              x="50%"
              y="45%"
              dominantBaseline="middle"
              textAnchor="middle"
              fill="#000"
              fontSize="34"
              fontWeight={500}
              letterSpacing="0.12vh"
            >
              <tspan x="49%" dy="3.5em">
                We have been here since 1990.
              </tspan>
              <tspan x="49%" dy="1.2em">
                Our community trust us!
              </tspan>
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SecondPart;
