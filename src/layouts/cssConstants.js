import { css } from '@emotion/css';
import facepaint from 'facepaint';

export const colors = {
  primaryBlue: '#2C3E50',
  lightBlue: '#7493b2',
  lighterBlue: '#b5c6d6',
  tan: '#A98B61',
  darkTan: '#7B633F',
  grey: '#393E46',
  darkGrey: '#222',
  white: '#FFF',
};

const breakpoints = [576, 768, 992, 1024, 1200];

export const mq = facepaint(
  breakpoints.map((bp) => `@media (min-width: ${bp}px)`)
);

export const contentWrapper = css({
  background: colors.primaryBlue,
  display: 'grid',
  minHeight: '100vh',
  gridTemplateColumns: 'repeat(18, 1fr)',
  gridTemplateRows: 'minmax(30vh, auto) minmax(50vh, auto) minmax(8vh, auto)',
  gridGap: '2rem 1rem',
  placeItems: 'center',
  margin: '0',
  alignItems: 'start',
  justifyItems: 'center',
});

export const mainContent = css(
  mq({
    gridColumn: ['2 / -2', '2 / -2', '2 / -2', '3 / -3'],
  }),
  {
    display: 'grid',
    gridTemplateColumns: 'repeat(10, 1fr)',
    justifyItems: 'center',
    height: '100%',
    gridGap: '1rem 0',
    padding: '3.5rem 1rem',
    background: colors.white,
    borderRadius: '0.95rem',
    webkitBoxShadow: '0px -1px 29px 2px rgba(0,0,0,0.80)',
    moxBoxShadow: '0px -1px 29px 2px rgba(0,0,0,0.80)',
    boxShadow: '0px -1px 29px 2px rgba(0,0,0,0.80)',
  }
);
