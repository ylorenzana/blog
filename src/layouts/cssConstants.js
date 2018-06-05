import { css } from 'emotion';
import facepaint from 'facepaint';

const breakpoints = [576, 768, 992, 1200];

export const mq = facepaint(
  breakpoints.map(bp => `@media (min-width: ${bp}px)`)
);

// export const responsiveContent = css(
//   mq({
//     gridColumn: ['2 / -2', '2 / -2', '3 / -3'],
//   })
// );
