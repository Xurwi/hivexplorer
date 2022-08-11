import React from "react";

export const brightnessSvg = (color) => (
  <svg viewBox="0 0 24 24">
    <path
      fill={color}
      d="M12,18V6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,15.31L23.31,12L20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31Z"
    />
  </svg>
);

export const frFlag = (
  <svg xmlns="http://www.w3.org/2000/svg" id="flag-icons-fr" width="22" height="22" viewBox="0 0 640 480">
    <g fill-rule="evenodd" stroke-width="1pt">
      <path fill="#fff" d="M0 0h640v480H0z"/>
      <path fill="#002654" d="M0 0h213.3v480H0z"/>
      <path fill="#ce1126" d="M426.7 0H640v480H426.7z"/>
    </g>
  </svg>
);

export const gbFlag = (
  <svg xmlns="http://www.w3.org/2000/svg" id="flag-icons-gb" width="22" height="22" viewBox="0 0 640 480">
    <path fill="#012169" d="M0 0h640v480H0z"/>
    <path fill="#FFF" d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0h75z"/>
    <path fill="#C8102E" d="m424 281 216 159v40L369 281h55zm-184 20 6 35L54 480H0l240-179zM640 0v3L391 191l2-44L590 0h50zM0 0l239 176h-60L0 42V0z"/>
    <path fill="#FFF" d="M241 0v480h160V0H241zM0 160v160h640V160H0z"/>
    <path fill="#C8102E" d="M0 193v96h640v-96H0zM273 0v480h96V0h-96z"/>
  </svg>
);

export const hiveLogo = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 218.26 189.74">
    <g id="Layer_2" data-name="Layer 2">
      <g id="Layer_1-2" data-name="Layer 1">
        <path fill="#E31337" d="M157.13,107.34a.36.36,0,0,0-.3-.17H127.54a.35.35,0,0,0-.3.17l-47,81.35a.36.36,0,0,0,.31.53h29.28a.37.37,0,0,0,.31-.18l47-81.35A.36.36,0,0,0,157.13,107.34Z"/>
        <path fill="#E31337" d="M128,83.39a.34.34,0,0,0,.3.18h29.29a.35.35,0,0,0,.3-.18.36.36,0,0,0,0-.35L110.14.34a.38.38,0,0,0-.31-.17H80.55a.38.38,0,0,0-.31.17.36.36,0,0,0,0,.35Z"/>
        <path fill="#E31337" d="M218.21,94.52,163.94.34a.37.37,0,0,0-.31-.17h-29.2a.35.35,0,0,0-.3.17.32.32,0,0,0,0,.35l54.17,94-54.17,94a.32.32,0,0,0,0,.35.34.34,0,0,0,.3.18h29.2a.35.35,0,0,0,.31-.18l54.27-94.17A.36.36,0,0,0,218.21,94.52Z"/>
        <path fill="#E31337" d="M110.62,94.69,55.34.17A.38.38,0,0,0,55,0h0a.36.36,0,0,0-.3.17L.05,94.7a.32.32,0,0,0,0,.35l55.28,94.52a.38.38,0,0,0,.31.17h0a.36.36,0,0,0,.3-.17L110.62,95A.32.32,0,0,0,110.62,94.69Z"/>
      </g>
    </g>
  </svg>  
);
export const globeImg = (color: string) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22"  className="bi bi-globe" fill={color} viewBox="0 0 16 16">
  <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"/>
</svg>
)
export const infoIcon = (color: string) => (
  <svg xmlns="http://www.w3.org/2000/svg" className="svg-theme"viewBox="0 0 50 50" width="25px" height="25px" fill={color}>
    <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 25 11 A 3 3 0 0 0 22 14 A 3 3 0 0 0 25 17 A 3 3 0 0 0 28 14 A 3 3 0 0 0 25 11 z M 21 21 L 21 23 L 22 23 L 23 23 L 23 36 L 22 36 L 21 36 L 21 38 L 22 38 L 23 38 L 27 38 L 28 38 L 29 38 L 29 36 L 28 36 L 27 36 L 27 21 L 26 21 L 22 21 L 21 21 z"/>
  </svg>
)
export const showMoreIcon = (color: string) => (
  <svg xmlns="http://www.w3.org/2000/svg" className="svg-theme" viewBox="0 0 24 24" fill={color}><g data-name="Layer 2"><g data-name="arrowhead-down"><rect width="24" height="24" opacity="0"/><path d="M17.37 12.39L12 16.71l-5.36-4.48a1 1 0 1 0-1.28 1.54l6 5a1 1 0 0 0 1.27 0l6-4.83a1 1 0 0 0 .15-1.41 1 1 0 0 0-1.41-.14z"/><path d="M11.36 11.77a1 1 0 0 0 1.27 0l6-4.83a1 1 0 0 0 .15-1.41 1 1 0 0 0-1.41-.15L12 9.71 6.64 5.23a1 1 0 0 0-1.28 1.54z"/></g></g></svg>
)
export const showLessIcon = (color: string) => (
  <svg xmlns="http://www.w3.org/2000/svg" className="svg-theme" viewBox="0 0 24 24" fill={color}><g data-name="Layer 2"><g data-name="arrowhead-up"><rect width="24" height="24" opacity="0" transform="rotate(180 12 12)"/><path d="M6.63 11.61L12 7.29l5.37 4.48A1 1 0 0 0 18 12a1 1 0 0 0 .77-.36 1 1 0 0 0-.13-1.41l-6-5a1 1 0 0 0-1.27 0l-6 4.83a1 1 0 0 0-.15 1.41 1 1 0 0 0 1.41.14z"/><path d="M12.64 12.23a1 1 0 0 0-1.27 0l-6 4.83a1 1 0 0 0-.15 1.41 1 1 0 0 0 1.41.15L12 14.29l5.37 4.48A1 1 0 0 0 18 19a1 1 0 0 0 .77-.36 1 1 0 0 0-.13-1.41z"/></g></g></svg>
)