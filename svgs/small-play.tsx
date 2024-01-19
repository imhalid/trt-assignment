import React, { SVGProps } from "react";

export default function SmallPlayIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="10"
      height="11"
      viewBox="0 0 10 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.19727 10.7383C1.43164 10.7383 1.63086 10.6445 1.86523 10.5098L8.69727 6.56055C9.18359 6.27344 9.35352 6.08594 9.35352 5.77539C9.35352 5.46484 9.18359 5.27734 8.69727 4.99609L1.86523 1.04102C1.63086 0.90625 1.43164 0.818359 1.19727 0.818359C0.763672 0.818359 0.494141 1.14648 0.494141 1.65625V9.89453C0.494141 10.4043 0.763672 10.7383 1.19727 10.7383Z"
        fill="#00BAFF"
      />
    </svg>
  );
}
