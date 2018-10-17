import React from "react";

const svgLogo = ({
  style = {},
  width = "100%",

  className = "",
  title = "",
  fill = "#fff",
  viewBox = "0 0 45 33"
}) => (
  <svg
    width={width}
    height={width}
    viewBox={viewBox}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <title>{title}</title>
    <desc />
    <defs>
      <rect id="path-1" x="0" y="0" width="57" height="39" />
    </defs>
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="Artboard" transform="translate(-333.000000, -116.000000)">
        <g id="Group-2" transform="translate(328.000000, 114.000000)">
          <mask id="mask-2" fill="white">
            <use xlinkHref="#path-1" />
          </mask>
          <use id="Mask" fill="#FFFFFF" opacity="0" xlinkHref="#path-1" />
          <g
            mask="url(#mask-2)"
            fontWeight="normal"
            fontFamily="AmericanTypewriter, American Typewriter"
          >
            <g transform="translate(-26.000000, -6.000000)">
              <text id="F" fontSize="28" letterSpacing="-0.537697494">
                <tspan x="58.8977909" y="39.255225" fill="#999999">
                  F
                </tspan>
              </text>
              <text id="M" fontSize="36" letterSpacing="-0.691325366">
                <tspan x="31.348076" y="33" fill={fill}>
                  M
                </tspan>
              </text>
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
);

export default svgLogo;
