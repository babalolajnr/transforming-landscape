// const landscape = document.querySelector('#landscape1 path');
// console.log(landscape);

// setTimeout(() => {
//     landscape.animate(
//         { d: 'M0 108H22C44 108 89 108 133 126C178 144 222 180 267 222C311 264 356 312 400 294C444 276 489 192 533 168C578 144 622 180 667 174C711 168 756 120 800 120C844 120 889 168 933 192C978 216 1022 216 1067 180C1111 144 1156 72 1178 36L1200 0V360H1178C1156 360 1111 360 1067 360C1022 360 978 360 933 360C889 360 844 360 800 360C756 360 711 360 667 360C622 360 578 360 533 360C489 360 444 360 400 360C356 360 311 360 267 360C222 360 178 360 133 360C89 360 44 360 22 360H0V108Z' },
//         1000, 'easeInOut');
// }, 2000);

import { SVG } from '@svgdotjs/svg.js'

const landscape = document.querySelector('#landscape1');

const landscapeElement = SVG(landscape).fill('#000000');
