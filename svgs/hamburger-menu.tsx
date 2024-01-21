import React, { SVGProps } from "react";

export default function HamburgerMenu(props: SVGProps<SVGSVGElement>) {
  return (
   <svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
    {...props}
>
  <path fill="currentColor" d="M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z" />
</svg>
  );
}


