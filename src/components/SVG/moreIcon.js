import React from "react";

function MoreIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <g clipPath="url(#clip0_10_6608)">
        <path
          fill="#161616"
          d="M10 18c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2zm0-12c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2zm0 6c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_10_6608">
          <path fill="#fff" d="M0 0H24V24H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default MoreIcon;
