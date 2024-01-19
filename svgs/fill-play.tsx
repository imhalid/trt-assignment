import React, { SVGProps } from "react";

export default function FillPlayIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      {...props}
    >
      <rect width="64" height="64" fill="#00BAFF" />
      <path
        d="M23.8594 45.9688C24.4844 45.9688 25.0156 45.7188 25.6406 45.3594L43.8594 34.8281C45.1562 34.0625 45.6094 33.5625 45.6094 32.7344C45.6094 31.9062 45.1562 31.4062 43.8594 30.6562L25.6406 20.1094C25.0156 19.75 24.4844 19.5156 23.8594 19.5156C22.7031 19.5156 21.9844 20.3906 21.9844 21.75V43.7188C21.9844 45.0781 22.7031 45.9688 23.8594 45.9688Z"
        fill="#F7FCFF"
      />
    </svg>
  );
}
